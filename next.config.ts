import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Allow access from other devices on the local network during development
  allowedDevOrigins: ["192.168.1.24", "192.168.0.158", "localhost", "127.0.0.1"],

  turbopack: {
    root: path.resolve(__dirname),
  },

  async rewrites() {
    const backendTarget =
      process.env.INTERNAL_API_URL ||
      process.env.NEXT_PUBLIC_API_URL ||
      "http://127.0.0.1:8001";

    return [
      {
        source: "/api/:path*",
        destination: `${backendTarget}/api/:path*`,
      },
      {
        source: "/auth/:path*",
        destination: `${backendTarget}/auth/:path*`,
      },
      {
        source: "/gmail/:path*",
        destination: `${backendTarget}/gmail/:path*`,
      },
      {
        source: "/call/:path*",
        destination: `${backendTarget}/call/:path*`,
      },
      {
        source: "/static/:path*",
        destination: `${backendTarget}/static/:path*`,
      },
      {
        source: "/recordings/:path*",
        destination: `${backendTarget}/recordings/:path*`,
      },
      {
        source: "/health",
        destination: `${backendTarget}/health`,
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/voice_agent/:path*",
        destination: "/voice-agent/:path*",
        permanent: false,
      },
      {
        source: "/admin/campaigns/create",
        destination: "/admin/campaigns/new",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;