"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useAuthStore } from "@/lib/store";
import { getTenantSubdomain } from "@/lib/api-client";

export type ConnectionStatus = "connected" | "reconnecting" | "disconnected";

export interface WebSocketEventMessage {
  event: string;
  call_id?: string;
  status?: string;
  lead_name?: string;
  client_name?: string;
  client_phone?: string;
  agent_status?: string;
  user_id?: string;
  reason?: string;
  [key: string]: any;
}

export function getWebSocketHost(): string {
  if (typeof window === "undefined") {
    if (process.env.NEXT_PUBLIC_WS_URL) return process.env.NEXT_PUBLIC_WS_URL;
    if (process.env.NEXT_PUBLIC_API_URL) return process.env.NEXT_PUBLIC_API_URL.replace(/^http/, "ws");
    return "ws://127.0.0.1:8001";
  }
  if (process.env.NEXT_PUBLIC_WS_URL) {
    return process.env.NEXT_PUBLIC_WS_URL;
  }
  const proto = window.location.protocol === "https:" ? "wss:" : "ws:";
  const portNum = parseInt(window.location.port, 10);
  const isLocalHost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

  // Derive backend port from NEXT_PUBLIC_API_URL if configured
  let backendPort = "8001";
  if (process.env.NEXT_PUBLIC_API_URL && process.env.NEXT_PUBLIC_API_URL.startsWith("http")) {
    try {
      const parsed = new URL(process.env.NEXT_PUBLIC_API_URL, window.location.href);
      if (parsed.port) {
        backendPort = parsed.port;
      }
    } catch (_) {}
  }

  // When frontend is accessed on dev port 3000-3010 (locally or on server dev port), connect to backend port
  if (portNum >= 3000 && portNum <= 3010) {
    return `${proto}//${window.location.hostname}:${backendPort}`;
  }
  if (process.env.NEXT_PUBLIC_API_URL && process.env.NEXT_PUBLIC_API_URL.startsWith("http")) {
    try {
      const parsed = new URL(process.env.NEXT_PUBLIC_API_URL, window.location.href);
      // If NEXT_PUBLIC_API_URL points to localhost/127.0.0.1, but page is accessed from a remote server/domain/IP,
      // connect to the current server host so remote browser users connect reliably
      if ((parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1") && !isLocalHost) {
        return `${proto}//${window.location.host}`;
      }
    } catch (_) {}
    return process.env.NEXT_PUBLIC_API_URL.replace(/^http/, "ws");
  }
  return `${proto}//${window.location.host}`;
}

const MAX_RECONNECT_ATTEMPTS = 20;

export function useWebSocketSync(onMessageReceived?: (data: WebSocketEventMessage) => void, onReconnect?: () => void) {
  const storeToken = useAuthStore((s) => s.token);
  const [status, setStatus] = useState<ConnectionStatus>("disconnected");
  const socketRef = useRef<WebSocket | null>(null);
  const retryCountRef = useRef(0);
  const reconnectTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isUnmountedRef = useRef(false);

  const onMessageRef = useRef(onMessageReceived);
  const onReconnectRef = useRef(onReconnect);

  useEffect(() => {
    onMessageRef.current = onMessageReceived;
    onReconnectRef.current = onReconnect;
  }, [onMessageReceived, onReconnect]);

  const getToken = useCallback(() => {
    if (storeToken) return storeToken;
    if (typeof window !== "undefined") {
      try {
        const stored = sessionStorage.getItem("GBZ-auth") || localStorage.getItem("GBZ-auth");
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed?.state?.token) return parsed.state.token;
        }
      } catch (_) {}
      return localStorage.getItem("token") || "";
    }
    return "";
  }, [storeToken]);

  const connect = useCallback(() => {
    if (isUnmountedRef.current) return;
    const activeToken = getToken();
    if (!activeToken || typeof window === "undefined") return;

    if (socketRef.current) {
      const oldWs = socketRef.current;
      socketRef.current = null;
      oldWs.onclose = null;
      oldWs.onerror = null;
      oldWs.close();
    }

    const host = getWebSocketHost();
    const tenant = getTenantSubdomain();
    const url = `${host}/api/ws/call-events?token=${encodeURIComponent(activeToken)}${tenant ? `&tenant_subdomain=${encodeURIComponent(tenant)}` : ""}`;

    try {
      const ws = new WebSocket(url);
      socketRef.current = ws;

      ws.onopen = () => {
        if (isUnmountedRef.current) {
          ws.close();
          return;
        }
        setStatus("connected");
        const wasReconnecting = retryCountRef.current > 0;
        retryCountRef.current = 0;
        if (wasReconnecting && onReconnectRef.current) {
          onReconnectRef.current();
        }
      };

      ws.onmessage = (event) => {
        if (isUnmountedRef.current) return;
        try {
          const data: WebSocketEventMessage = JSON.parse(event.data);
          if (data.status === "heartbeat" || data.event === "PING" || data.event === "CONNECTED") {
            return;
          }
          if (onMessageRef.current) {
            onMessageRef.current(data);
          }
        } catch (_) {}
      };

      ws.onerror = () => {
        if (isUnmountedRef.current) return;
        setStatus("reconnecting");
      };

      ws.onclose = () => {
        if (isUnmountedRef.current) return;
        if (retryCountRef.current >= MAX_RECONNECT_ATTEMPTS) {
          setStatus("disconnected");
          return;
        }

        setStatus("reconnecting");
        const backoffMs = Math.min(1000 * Math.pow(1.5, Math.min(retryCountRef.current, 8)), 10000);
        retryCountRef.current += 1;

        if (reconnectTimerRef.current) clearTimeout(reconnectTimerRef.current);
        reconnectTimerRef.current = setTimeout(() => {
          if (!isUnmountedRef.current) {
            connect();
          }
        }, backoffMs);
      };
    } catch (_) {
      if (!isUnmountedRef.current) {
        setStatus("disconnected");
      }
    }
  }, [getToken]);

  useEffect(() => {
    isUnmountedRef.current = false;
    connect();

    const handleOnline = () => {
      retryCountRef.current = 0;
      connect();
    };
    const handleVisibility = () => {
      if (typeof document !== "undefined" && document.visibilityState === "visible") {
        if (!socketRef.current || socketRef.current.readyState !== WebSocket.OPEN) {
          retryCountRef.current = 0;
          connect();
        }
      }
    };
    window.addEventListener("online", handleOnline);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      isUnmountedRef.current = true;
      window.removeEventListener("online", handleOnline);
      document.removeEventListener("visibilitychange", handleVisibility);
      if (reconnectTimerRef.current) {
        clearTimeout(reconnectTimerRef.current);
        reconnectTimerRef.current = null;
      }
      if (socketRef.current) {
        const ws = socketRef.current;
        socketRef.current = null;
        ws.onclose = null;
        ws.onerror = null;
        ws.close();
      }
    };
  }, [connect]);

  return { status, reconnect: connect };
}
