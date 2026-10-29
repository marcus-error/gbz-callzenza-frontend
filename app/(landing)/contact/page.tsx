import React from "react";
import Link from "next/link";
import "../gbz.css";

export default function ContactPage() {
  return (
    <main className="gbz-root">
      <section className="bg-[#050B14] py-32 relative">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div className="inline-block w-fit px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-[#A0ABC0] text-[0.65rem] font-bold tracking-[0.15em] mb-6 uppercase">LET&apos;S GROW TOGETHER</div>
          <h1 className="text-white text-[3rem] font-extrabold mt-2 leading-tight mb-4">Ready to transform your business?</h1>
          <p className="text-[#8E9BB0] text-[1.05rem] max-w-xl mx-auto mb-10">
            Schedule a personalized demo and see how GBZ fits into your operations in under 30 minutes.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/login" className="bg-[#0066FF] text-white font-semibold text-[0.95rem] px-8 py-3.5 rounded-full hover:bg-blue-700 transition-colors shadow-lg">
              Get Started &rarr;
            </Link>
            <Link href="/login" className="border border-white/20 text-white font-semibold text-[0.95rem] px-8 py-3.5 rounded-full hover:bg-white/5 transition-colors">
              Log In
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
