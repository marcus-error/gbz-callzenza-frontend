import React from "react";
import Link from "next/link";
import "../gbz.css";

const features = [
  { icon: "🎙️", bg: "#EFEBFE", title: "AI Voice Agent", desc: "Human-like outbound calling that handles real conversations, qualifies leads and transfers to your team." },
  { icon: "📋", bg: "#E6F0FF", title: "Campaign Management", desc: "Set name, client, dialing method, business hours and upload leads — all in one place." },
  { icon: "🤖", bg: "#E7F8F1", title: "AI Agent Configuration", desc: "Customize prompt, voice, language, knowledge base, transfer rules and escalation handling." },
  { icon: "📊", bg: "#FDF0E1", title: "Real-time Call Monitoring", desc: "Live dashboards, call status tracking, barge-in and supervisor controls." },
  { icon: "👥", bg: "#FDE9E9", title: "Client Conferencing", desc: "Automatically connect the client into the call the moment a lead is qualified." },
  { icon: "📈", bg: "#E6F0FF", title: "Lead Management", desc: "Upload, track, recycle and disposition leads with full lifecycle visibility." },
];

export default function FeaturesPage() {
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
          <div className="inline-block px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-[#A0ABC0] text-[0.65rem] font-bold tracking-[0.15em] mb-6 uppercase">PRODUCT FEATURES</div>
          <h1 className="text-[3.5rem] font-extrabold text-white leading-tight mb-6">Powerful Features for<br /><span className="text-[#0066FF]">Smarter Calling</span></h1>
          <p className="text-[1.05rem] text-[#8E9BB0] leading-relaxed">Everything you need to run successful outbound calling campaigns with AI and human agents working seamlessly together.</p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5" style={{ background: f.bg }}>{f.icon}</div>
                <h3 className="font-bold text-[#0F172A] text-[1.1rem] mb-2">{f.title}</h3>
                <p className="text-[0.85rem] text-[#64748B] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link href="/login" className="bg-[#0066FF] text-white font-semibold text-[0.95rem] px-8 py-3.5 rounded-full hover:bg-blue-700 transition-colors shadow-lg">
              Request a Demo &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
