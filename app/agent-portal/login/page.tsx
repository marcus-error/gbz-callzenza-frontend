"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  Bot,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowRight,
  BarChart3,
  FileText,
  LogIn,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { agentPortalService } from "@/lib/services/agentPortalService";
import { useAuthStore } from "@/lib/store";

interface FormValues {
  email: string;
  password: string;
}

export default function AgentPortalLoginPage() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<FormValues>();
  const { token, user, setToken, setUser } = useAuthStore();
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  // If already logged in as portal user, redirect
  useEffect(() => {
    if (token && user?.role === "AI_AGENT_PORTAL_USER") {
      router.replace("/agent-portal/agents");
    }
  }, [token, user, router]);

  const onSubmit = async (values: FormValues) => {
    setError(null);
    try {
      const res = await agentPortalService.login({
        email: values.email.trim(),
        password: values.password,
      });

      // Store token + user
      setToken(res.access_token);
      setUser({
        id: res.user.id,
        email: res.user.email,
        full_name: res.user.full_name,
        role: res.user.role,
        business_id: res.user.business_id ?? undefined,
      });

      if (typeof window !== "undefined") {
        const payload = JSON.stringify({
          state: { token: res.access_token, user: { ...res.user, business_id: res.user.business_id ?? undefined } },
          version: 0,
        });
        sessionStorage.setItem("GBZ-auth", payload);
        localStorage.setItem("GBZ-auth-AI_AGENT_PORTAL_USER", payload);
      }

      router.replace("/agent-portal/agents");
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : "Invalid credentials. Please check your email and password."
      );
    }
  };

  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-slate-950 font-sans">
      {/* Left Pane */}
      <div className="hidden lg:flex lg:col-span-7 flex-col justify-between p-16 relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
        {/* Background glows */}
        <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Grid texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Brand */}
        <div className="flex items-center gap-3 relative z-10">
          <div className="h-11 w-11 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-0.5 shadow-lg shadow-indigo-500/30">
            <div className="h-full w-full bg-slate-950 rounded-[14px] flex items-center justify-center">
              <Bot className="h-6 w-6 text-indigo-400" />
            </div>
          </div>
          <div>
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-200 bg-clip-text text-transparent">
              GBZ
            </span>
            <p className="text-[10px] uppercase font-bold tracking-widest text-indigo-400 -mt-0.5">
              AI Agent Portal
            </p>
          </div>
        </div>

        {/* Main copy */}
        <div className="max-w-xl space-y-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
              <ShieldCheck className="h-3.5 w-3.5" />
              Read-Only Monitoring Portal
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight leading-tight text-white">
              Monitor Every
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                AI Conversation.
              </span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Deep visibility into your AI agents — calls, transcripts, recordings,
              lead qualification, and performance analytics. All in one secure portal.
            </p>
          </motion.div>

          {/* Feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: BarChart3,
                label: "Live Performance",
                desc: "KPIs, call volumes, success rates.",
                color: "indigo",
              },
              {
                icon: FileText,
                label: "Full Transcripts",
                desc: "Search & review every conversation.",
                color: "cyan",
              },
              {
                icon: Bot,
                label: "Multi-Agent View",
                desc: "Filter and switch between AI agents.",
                color: "purple",
              },
              {
                icon: ShieldCheck,
                label: "Secure & Read-Only",
                desc: "Zero write access. Full audit safety.",
                color: "emerald",
              },
            ].map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex gap-3 bg-white/[0.03] border border-white/[0.07] rounded-2xl p-4 hover:bg-white/[0.06] transition-colors"
              >
                <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-xl h-fit shrink-0">
                  <f.icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">{f.label}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="text-xs text-slate-600 relative z-10">
          AI Agent Portal &copy; 2026 GBZ. Read-only access only.
        </p>
      </div>

      {/* Right Pane - Form */}
      <div className="lg:col-span-5 flex flex-col justify-center items-center p-8 bg-slate-950 relative">
        {/* Mobile branding */}
        <div className="lg:hidden flex items-center gap-2.5 mb-8">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 p-0.5">
            <div className="h-full w-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Bot className="h-5 w-5 text-indigo-400" />
            </div>
          </div>
          <div>
            <span className="font-extrabold text-white tracking-tight">GBZ</span>
            <p className="text-[9px] uppercase tracking-widest text-indigo-400 font-bold -mt-0.5">
              AI Agent Portal
            </p>
          </div>
        </div>

        <div className="w-full max-w-md flex flex-col gap-7">
          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-white">
              Portal Sign In
            </h2>
            <p className="text-sm text-slate-500">
              Access is granted by your organization administrator.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-7 space-y-5"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Email Address
                </label>
                <Input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="you@company.com"
                  className="bg-slate-800 border-slate-700 text-white placeholder-slate-600 focus:border-indigo-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Password
                </label>
                <div className="relative">
                  <Input
                    {...register("password", { required: true })}
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="bg-slate-800 border-slate-700 text-white placeholder-slate-600 focus:border-indigo-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((p) => !p)}
                    className="absolute right-3.5 top-3 text-slate-500 hover:text-slate-300 cursor-pointer transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-3.5 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 text-xs font-medium"
                >
                  {error}
                </motion.div>
              )}

              <Button
                type="submit"
                disabled={formState.isSubmitting}
                className="w-full mt-1 bg-indigo-600 hover:bg-indigo-500 text-white font-bold cursor-pointer transition-colors"
              >
                <LogIn className="mr-2 h-4 w-4" />
                {formState.isSubmitting ? "Authenticating…" : "Sign In to Portal"}
              </Button>
            </form>

            <div className="pt-1 border-t border-slate-800 text-center">
              <p className="text-xs text-slate-600">
                This portal provides read-only access to AI agent data.
              </p>
            </div>
          </motion.div>

          {/* Link back to main login */}
          <div className="text-center text-xs text-slate-600">
            <span>Looking for a different portal? </span>
            <a
              href="/login"
              className="text-indigo-400 hover:text-indigo-300 font-semibold inline-flex items-center gap-0.5 transition-colors"
            >
              Back to main login <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
