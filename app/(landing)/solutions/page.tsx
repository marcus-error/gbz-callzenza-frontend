import React from "react";
import Link from "next/link";
import "../gbz.css";

const solutions = [
  { icon: "🎙️", bg: "#EFEBFE", color: "#7C5CFF", title: "AI Voice Agent", desc: "Human-like outbound and inbound voice agents that handle real conversations at scale, qualify leads and transfer to your team." },
  { icon: "💬", bg: "#E6F0FF", color: "#0066FF", title: "AI Chatbot", desc: "Instant, on-brand support across web, mobile, and messaging channels — 24/7 without human intervention." },
  { icon: "📄", bg: "#E7F8F1", color: "#10B981", title: "Document Intelligence", desc: "Extract and structure data from PDFs, invoices, and contracts automatically with AI precision." },
  { icon: "⚙️", bg: "#FDF0E1", color: "#F97316", title: "Workflow Automation", desc: "Turn repetitive, multi-step processes into reliable automated pipelines that run without manual effort." },
  { icon: "📊", bg: "#FDE9E9", color: "#EF4444", title: "Predictive Analytics", desc: "Forecast outcomes and surface the decisions worth making today with real-time intelligence." },
  { icon: "📈", bg: "#E6F0FF", color: "#0066FF", title: "Smart Reporting", desc: "Live dashboards and reports that update themselves — no spreadsheets, no manual data pulls." },
];

export default function SolutionsPage() {
  return (
    <main className="gbz-root">
      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-50 py-6 w-full px-6">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <Link href="/"><img src="/gbz-logo.jpg" className="h-[45px] w-auto mix-blend-lighten" alt="GBZ Logo" /></Link>
          <div className="flex items-center gap-6">
            <Link href="/login" className="text-white text-sm font-semibold hover:text-blue-400 transition-colors">Log In</Link>
            <Link href="/login" className="bg-white text-blue-600 font-bold text-sm px-7 py-2.5 rounded-full hover:bg-gray-100 transition-all">Request a Demo &rarr;</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#030914] pt-48 pb-24 text-center relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0066FF]/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-[800px] mx-auto px-6 relative z-10">
          <div className="inline-block px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-[#A0ABC0] text-[0.65rem] font-bold tracking-[0.15em] mb-6 uppercase">SOLUTIONS</div>
          <h1 className="text-[3.5rem] font-extrabold text-white leading-tight mb-6">AI Solutions for<br /><span className="text-[#0066FF]">Modern Enterprises</span></h1>
          <p className="text-[1.05rem] text-[#8E9BB0] leading-relaxed">Six product pillars, one connected platform — built to automate, analyze, and accelerate every part of your business.</p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-3 gap-8">
            {solutions.map((s, i) => (
              <div key={i} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 hover:shadow-lg transition-all hover:border-blue-200 group">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5" style={{ background: s.bg }}>{s.icon}</div>
                <h3 className="font-bold text-[#0F172A] text-[1.1rem] mb-3">{s.title}</h3>
                <p className="text-[0.85rem] text-[#64748B] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link href="/login" className="bg-[#0066FF] text-white font-semibold text-[0.95rem] px-8 py-3.5 rounded-full hover:bg-blue-700 transition-colors shadow-lg mr-4">
              Request a Demo &rarr;
            </Link>
            <Link href="/login" className="border border-[#0066FF] text-[#0066FF] font-semibold text-[0.95rem] px-8 py-3.5 rounded-full hover:bg-blue-50 transition-colors">
              Log In
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
