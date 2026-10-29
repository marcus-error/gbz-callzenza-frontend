import React from "react";
import Link from "next/link";
import "../gbz.css";

export default function PricingPage() {
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#0066FF]/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-[700px] mx-auto px-6 relative z-10">
          <div className="inline-block px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-[#A0ABC0] text-[0.65rem] font-bold tracking-[0.15em] mb-6 uppercase">PRICING</div>
          <h1 className="text-[3.5rem] font-extrabold text-white leading-tight mb-6">Simple, <span className="text-[#0066FF]">Transparent</span> Pricing</h1>
          <p className="text-[1.05rem] text-[#8E9BB0]">Choose the plan that fits your business — upgrade any time as you grow.</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-white py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 items-stretch">
            {/* Starter */}
            <div className="border border-[#E2E8F0] rounded-3xl p-8 flex flex-col">
              <div className="text-[0.75rem] font-bold text-[#64748B] uppercase tracking-wider mb-2">Starter</div>
              <p className="text-[0.85rem] text-[#94A3B8] mb-6">Perfect for small businesses</p>
              <div className="text-[3rem] font-extrabold text-[#0F172A] mb-1">$29<span className="text-[1rem] font-medium text-[#64748B]">/month</span></div>
              <ul className="mt-6 mb-8 flex flex-col gap-3 flex-1">
                {["Up to 5 users", "Core AI features", "Email support", "Standard integrations"].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-[0.9rem] text-[#475569]">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-[#0066FF] flex items-center justify-center text-xs">✓</span>{f}
                  </li>
                ))}
              </ul>
              <Link href="/login" className="border-2 border-[#0066FF] text-[#0066FF] font-semibold text-[0.9rem] px-6 py-3 rounded-full hover:bg-blue-50 transition-colors text-center">Get started</Link>
            </div>

            {/* Professional */}
            <div className="border-2 border-[#0066FF] rounded-3xl p-8 flex flex-col relative shadow-[0_20px_60px_rgba(0,102,255,0.15)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0066FF] text-white text-[0.65rem] font-bold px-4 py-1 rounded-full tracking-wider">MOST POPULAR</div>
              <div className="text-[0.75rem] font-bold text-[#0066FF] uppercase tracking-wider mb-2">Professional</div>
              <p className="text-[0.85rem] text-[#94A3B8] mb-6">Best for growing teams</p>
              <div className="text-[3rem] font-extrabold text-[#0F172A] mb-1">$99<span className="text-[1rem] font-medium text-[#64748B]">/month</span></div>
              <ul className="mt-6 mb-8 flex flex-col gap-3 flex-1">
                {["Up to 50 users", "Advanced AI features", "Analytics dashboard", "API access", "Priority support"].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-[0.9rem] text-[#475569]">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-[#0066FF] flex items-center justify-center text-xs">✓</span>{f}
                  </li>
                ))}
              </ul>
              <Link href="/login" className="bg-[#0066FF] text-white font-semibold text-[0.9rem] px-6 py-3 rounded-full hover:bg-blue-700 transition-colors text-center shadow-lg">Get started</Link>
            </div>

            {/* Enterprise */}
            <div className="border border-[#E2E8F0] rounded-3xl p-8 flex flex-col">
              <div className="text-[0.75rem] font-bold text-[#64748B] uppercase tracking-wider mb-2">Enterprise</div>
              <p className="text-[0.85rem] text-[#94A3B8] mb-6">For large organizations</p>
              <div className="text-[3rem] font-extrabold text-[#0F172A] mb-1">Custom</div>
              <ul className="mt-6 mb-8 flex flex-col gap-3 flex-1">
                {["Unlimited users", "Custom integrations", "Dedicated support", "Advanced security", "SLA & compliance"].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-[0.9rem] text-[#475569]">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-[#0066FF] flex items-center justify-center text-xs">✓</span>{f}
                  </li>
                ))}
              </ul>
              <Link href="/login" className="border-2 border-[#0066FF] text-[#0066FF] font-semibold text-[0.9rem] px-6 py-3 rounded-full hover:bg-blue-50 transition-colors text-center">Contact sales</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
