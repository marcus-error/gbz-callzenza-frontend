import React from "react";
import Link from "next/link";
import "../gbz.css";

const industries = [
  { icon: "🏥", label: "Healthcare" },
  { icon: "🏦", label: "Banking" },
  { icon: "🛒", label: "Retail" },
  { icon: "🏭", label: "Manufacturing" },
  { icon: "🎓", label: "Education" },
  { icon: "🛡️", label: "Insurance" },
  { icon: "🚚", label: "Logistics" },
  { icon: "🏛️", label: "Government" },
  { icon: "🏨", label: "Hospitality" },
];

const integrations = [
  "Salesforce", "Zoho CRM", "HubSpot", "Twilio",
  "Microsoft Teams", "Cisco", "RingCentral", "Asterisk",
];

export default function IndustriesPage() {
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
          <div className="inline-block px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-[#A0ABC0] text-[0.65rem] font-bold tracking-[0.15em] mb-6 uppercase">INDUSTRIES</div>
          <h1 className="text-[3.5rem] font-extrabold text-white leading-tight mb-6">Built for Every<br /><span className="text-[#0066FF]">High-Stakes Industry</span></h1>
          <p className="text-[1.05rem] text-[#8E9BB0] leading-relaxed">GBZ adapts to the specific needs of regulated and fast-moving industries with role-based access and custom AI configurations.</p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#0066FF] text-[0.65rem] font-bold tracking-[0.1em] mb-4 uppercase">INDUSTRIES</div>
            <h2 className="text-[2.5rem] font-extrabold text-[#0F172A]">Who We Serve</h2>
          </div>
          <div className="grid grid-cols-3 gap-5 mb-20">
            {industries.map((ind, i) => (
              <div key={i} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 flex items-center gap-4 hover:shadow-md transition-shadow">
                <span className="text-3xl">{ind.icon}</span>
                <span className="font-bold text-[#0F172A] text-[1.05rem]">{ind.label}</span>
              </div>
            ))}
          </div>

          {/* Integrations */}
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#0066FF] text-[0.65rem] font-bold tracking-[0.1em] mb-4 uppercase">INTEGRATIONS</div>
            <h2 className="text-[2.5rem] font-extrabold text-[#0F172A] mb-4">Connects to the Tools You Already Run</h2>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {integrations.map((int, i) => (
              <div key={i} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl py-4 px-6 text-center font-semibold text-[#0F172A] hover:border-blue-300 hover:bg-blue-50 transition-all">{int}</div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
