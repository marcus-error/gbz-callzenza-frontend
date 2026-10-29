import React from "react";
import Link from "next/link";
import "./gbz.css";
import { PhoneIcon, UserIcon, UserGroupIcon, ClipboardDocumentCheckIcon, CheckBadgeIcon, CheckCircleIcon, ChartBarSquareIcon, CpuChipIcon, ChartPieIcon, UsersIcon, DevicePhoneMobileIcon, NoSymbolIcon, PhoneArrowDownLeftIcon } from "@heroicons/react/24/solid";
import { BriefcaseIcon, ViewfinderCircleIcon, ShieldCheckIcon, AdjustmentsHorizontalIcon, Cog6ToothIcon, GlobeAltIcon, BookOpenIcon, ArrowPathIcon, ClockIcon, ExclamationTriangleIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

export default function GBZLanding() {
  return (
    <main className="gbz-root">

      {/* 
        ========================
        NAVIGATION BAR 
        ========================
      */}
      <nav className="absolute top-0 left-0 right-0 z-50 py-6 w-full px-6">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* The GBZ Image Logo */}
            <img src="/gbz-logo.jpg" className="h-[45px] w-auto mix-blend-lighten" alt="GBZ Logo" />
          </div>
          <div className="flex gap-10 text-sm font-medium text-gray-300">
            <Link href="#product" className="hover:text-white transition-colors">Features</Link>
            <Link href="#features" className="hover:text-white transition-colors">AI Configuration</Link>
            <Link href="#process" className="hover:text-white transition-colors">Process Flow</Link>
            <Link href="#industries" className="hover:text-white transition-colors">Roles</Link>
            <Link href="#resources" className="hover:text-white transition-colors">Tracking</Link>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/login" className="text-white text-sm font-semibold hover:text-blue-400 transition-colors">Log In</Link>
            <Link href="/login" className="bg-white text-blue-600 font-bold text-sm px-7 py-2.5 rounded-full hover:bg-gray-100 transition-all shadow-lg shadow-white/10">Request a Demo &rarr;</Link>
          </div>
        </div>
      </nav>

      {/* 
        ========================
        HERO SECTION (Xerox Copy)
        ========================
      */}
      <header className="relative w-full overflow-hidden bg-[#030914] pt-40 pb-56">

        {/* Glow Effects on the right */}
        <div className="absolute top-[0%] right-[0%] w-[800px] h-[800px] bg-[#0066FF]/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#0044CC]/20 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Thick Glowing Arc behind */}
        <div className="absolute top-[-10%] right-[10%] w-[1000px] h-[1000px] rounded-full border border-[#0066FF]/30 shadow-[0_0_80px_rgba(0,102,255,0.3)_inset] pointer-events-none z-0"></div>
        <div className="absolute top-[-5%] right-[12%] w-[900px] h-[900px] rounded-full border-[2px] border-[#00C2FF]/40 shadow-[0_0_50px_rgba(0,194,255,0.4)] pointer-events-none z-0"></div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full flex justify-between">

          {/* Left Content (Text & Stats) */}
          <div className="w-[45%] relative z-10 flex flex-col justify-center">
            <div className="inline-block w-fit px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-[#A0ABC0] text-[0.65rem] font-bold tracking-[0.15em] mb-6 uppercase shadow-inner">
              AI-POWERED OUTBOUND CALLING PLATFORM
            </div>
            <h1 className="text-[5.5rem] font-extrabold leading-[1] tracking-tight mb-4 relative inline-block group cursor-default">
              {/* Pulsing outer aura behind text */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#00C2FF] to-[#0066FF] blur-2xl opacity-30 animate-pulse pointer-events-none"></span>

              {/* The shiny gradient text with motion */}
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-[#70E0FF] to-[#0066FF] drop-shadow-[0_0_15px_rgba(0,102,255,0.4)] hover:scale-[1.03] transition-transform duration-500 inline-block animate-text-shimmer">
                GBZ
              </span>
              {/* Robot Eye Blinking Dot */}
              <span className="inline-block w-[20px] h-[20px] ml-3 mb-[0.5rem] bg-[#00C2FF] rounded-full shadow-[0_0_25px_8px_rgba(0,194,255,0.7)] animate-robot-eye border-2 border-white/40"></span>
            </h1>
            <h2 className="text-[1.8rem] font-bold text-white mb-6 tracking-normal">Smarter Calls. Higher Conversions.</h2>
            <p className="text-[1.05rem] text-gray-400 max-w-[480px] mb-10 leading-relaxed">
              An AI-powered calling platform that automates lead engagement, qualifies customers and connects them to your team &mdash; all in one seamless flow.
            </p>
            <div className="flex items-center gap-4 mb-16">
              <Link href="/login" className="bg-[#0066FF] text-white font-semibold text-[0.95rem] px-8 py-3.5 rounded-full hover:bg-[#0052CC] transition-colors shadow-[0_4px_14px_0_rgba(0,102,255,0.39)]">
                Request a Demo &rarr;
              </Link>
              <Link href="/login" className="border border-white/20 text-white font-semibold text-[0.95rem] px-8 py-3.5 rounded-full hover:bg-white/5 transition-colors flex items-center gap-2">
                Watch Video
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-8 border-t border-white/10 relative z-20">
              <div>
                <div className="text-[2.2rem] font-extrabold text-white mb-1 leading-none">3x</div>
                <div className="text-[0.7rem] text-[#94A3B8] font-medium tracking-wide">Higher Conversions</div>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div>
                <div className="text-[2.2rem] font-extrabold text-white mb-1 leading-none">70%</div>
                <div className="text-[0.7rem] text-[#94A3B8] font-medium tracking-wide">Time Saved</div>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div>
                <div className="text-[2.2rem] font-extrabold text-white mb-1 leading-none">24/7</div>
                <div className="text-[0.7rem] text-[#94A3B8] font-medium tracking-wide">AI Calling</div>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div>
                <div className="text-[2.2rem] font-extrabold text-white mb-1 leading-none">100%</div>
                <div className="text-[0.7rem] text-[#94A3B8] font-medium tracking-wide">Trackable &amp; Measurable</div>
              </div>
            </div>
          </div>

          {/* Right Visuals */}
          {/* Note: using absolute positioning relative to the header so it breaks out of the wrapper on the right */}
          <div className="absolute right-0 top-0 bottom-0 w-[45%] h-full z-0 overflow-visible pointer-events-none">

            {/* The hero image with a radial mask and blend mode to fade it smoothly into the background in all directions */}
            <div className="absolute inset-0 z-0 flex items-center justify-center scale-[1.15]" style={{ maskImage: "radial-gradient(circle at center, black 30%, transparent 65%)", WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 65%)" }}>
              <img src="/robot.jpg" className="w-full h-full object-contain mix-blend-lighten opacity-80" alt="AI Agent Robot" />
            </div>

            {/* Floating Cards Container */}
            <div className="absolute inset-0 z-10 pointer-events-none">

              {/* AI Agent Card */}
              <div className="absolute top-[28%] left-[5%] bg-[#0F1423]/60 backdrop-blur-md border border-white/10 rounded-[14px] p-3 pr-8 flex items-center gap-3 shadow-[0_15px_30px_rgba(0,0,0,0.4)]">
                <div className="w-10 h-10 rounded-[10px] bg-[#0066FF] flex items-center justify-center shadow-[0_0_15px_rgba(0,102,255,0.4)]">
                  <PhoneIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-[0.85rem] text-white">AI Agent</div>
                  <div className="text-[0.65rem] text-gray-400 mt-0.5">Calling Lead...</div>
                  <div className="flex gap-[2px] items-end h-[10px] mt-1.5">
                    <div className="w-[2px] bg-[#00C2FF] h-[4px] rounded-full"></div>
                    <div className="w-[2px] bg-[#00C2FF] h-[10px] rounded-full"></div>
                    <div className="w-[2px] bg-[#00C2FF] h-[6px] rounded-full"></div>
                    <div className="w-[2px] bg-[#00C2FF] h-[8px] rounded-full"></div>
                    <div className="w-[2px] bg-[#00C2FF] h-[3px] rounded-full"></div>
                    <div className="w-[2px] bg-[#00C2FF] h-[10px] rounded-full"></div>
                    <div className="w-[2px] bg-[#00C2FF] h-[5px] rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Lead Qualified Card */}
              <div className="absolute top-[48%] left-[10%] bg-[#0F1423]/60 backdrop-blur-md border border-white/10 rounded-[14px] p-3 pr-8 flex items-center gap-3 shadow-[0_15px_30px_rgba(0,0,0,0.4)]">
                <div className="w-10 h-10 rounded-[10px] bg-[#0A1F1C] border border-[#00E676]/20 flex items-center justify-center">
                  <UserIcon className="w-5 h-5 text-[#00E676]" />
                </div>
                <div>
                  <div className="font-bold text-[0.85rem] text-white">Lead Qualified</div>
                  <div className="text-[0.65rem] text-gray-400 mt-0.5">Transferring to Voice Agent</div>
                </div>
              </div>

              {/* Conference Call Card */}
              <div className="absolute top-[68%] left-[0%] bg-[#0F1423]/60 backdrop-blur-md border border-white/10 rounded-[14px] p-3 pr-8 flex items-center gap-3 shadow-[0_15px_30px_rgba(0,0,0,0.4)]">
                <div className="w-10 h-10 rounded-[10px] bg-[#0A132B] border border-white/10 flex items-center justify-center">
                  <UserGroupIcon className="w-5 h-5 text-gray-300" />
                </div>
                <div>
                  <div className="font-bold text-[0.85rem] text-white">Conference Call</div>
                  <div className="text-[0.65rem] text-gray-400 mt-0.5">Client + Agent + Customer</div>
                </div>
              </div>
            </div>

            {/* Handwriting */}
            <div className="absolute bottom-[10%] right-[15%] z-20 flex flex-col items-center">
              <svg width="40" height="40" viewBox="0 0 50 50" fill="none" className="-ml-6 mb-2 rotate-12">
                <path d="M20 10 Q 40 10 30 40 L 25 35 M 30 40 L 35 35" stroke="#E2E8F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="font-[Caveat,cursive] text-[1.4rem] text-[#E2E8F0] -rotate-6 leading-[1.1] text-center">
                From First Call<br />to Closed Deal<br />All Automated
              </div>
            </div>
          </div>
        </div>

        {/* The large white swoosh curve covering the bottom of the hero */}
        <div className="absolute bottom-0 left-0 right-0 w-full z-30 pointer-events-none">
          <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="w-full h-[120px] sm:h-[160px] block translate-y-[2px]">
            <path d="M0,160 L1440,160 L1440,60 Q1080,140 720,70 Q360,0 0,70 Z" fill="#FFFFFF" />
          </svg>
        </div>
      </header>

      {/* 
        ========================
        HOW GBZ WORKS
        ========================
      */}
      <section id="process" className="bg-white relative z-20 pt-16 pb-32">
        <div className="max-w-[1400px] mx-auto px-10 flex items-center gap-10">

          {/* Left Text Side */}
          <div className="w-[35%]">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#0066FF] text-[0.65rem] font-bold tracking-[0.1em] mb-6 uppercase">HOW GBZ WORKS</div>
            <h2 className="text-[3rem] font-extrabold text-[#0F172A] mb-4 leading-[1.1] tracking-tight">From Leads to<br /><span className="text-[#0066FF]">Closed Conversations</span></h2>
            <p className="text-[0.95rem] text-[#475569] leading-relaxed max-w-[400px]">
              A complete end-to-end calling process &mdash; from campaign setup to AI calling, lead qualification, voice agent handover and final disposition.
            </p>
          </div>

          {/* Right Steps Side */}
          <div className="w-[65%] flex justify-between items-start relative pt-8">
            {/* Connecting faint line and arrows */}
            <div className="absolute top-[60px] left-[10%] right-[10%] h-[1px] bg-blue-100 -z-10"></div>

            <div className="flex-1 text-center relative">
              <div className="w-[60px] h-[60px] mx-auto bg-[#0066FF] rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(0,102,255,0.4)] text-white mb-4 relative z-10">
                <ClipboardDocumentCheckIcon className="w-6 h-6" />
              </div>
              <div className="text-[0.75rem] font-bold text-[#64748B] mb-1">01</div>
              <h4 className="text-[1rem] font-extrabold text-[#0F172A] mb-1">Setup</h4>
              <p className="text-[0.75rem] text-[#64748B] leading-tight">Create campaign<br />and upload leads</p>
              <div className="absolute top-[20px] right-[-15px] text-blue-200 text-lg z-0">&rarr;</div>
            </div>

            <div className="flex-1 text-center relative">
              <div className="w-[60px] h-[60px] mx-auto bg-[#0066FF] rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(0,102,255,0.4)] text-white mb-4 relative z-10">
                <PhoneIcon className="w-6 h-6" />
              </div>
              <div className="text-[0.75rem] font-bold text-[#64748B] mb-1">02</div>
              <h4 className="text-[1rem] font-extrabold text-[#0F172A] mb-1">AI Calls</h4>
              <p className="text-[0.75rem] text-[#64748B] leading-tight">AI Agent calls,<br />detects intent</p>
              <div className="absolute top-[20px] right-[-15px] text-blue-200 text-lg z-0">&rarr;</div>
            </div>

            <div className="flex-1 text-center relative">
              <div className="w-[60px] h-[60px] mx-auto bg-[#0066FF] rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(0,102,255,0.4)] text-white mb-4 relative z-10">
                <CheckBadgeIcon className="w-6 h-6" />
              </div>
              <div className="text-[0.75rem] font-bold text-[#64748B] mb-1">03</div>
              <h4 className="text-[1rem] font-extrabold text-[#0F172A] mb-1">Qualification</h4>
              <p className="text-[0.75rem] text-[#64748B] leading-tight">Collects &amp; qualifies<br />customer data</p>
              <div className="absolute top-[20px] right-[-15px] text-blue-200 text-lg z-0">&rarr;</div>
            </div>

            <div className="flex-1 text-center relative">
              <div className="w-[60px] h-[60px] mx-auto bg-[#0A132B] rounded-full border border-blue-900 flex items-center justify-center shadow-[0_10px_20px_rgba(10,19,43,0.4)] text-white mb-4 relative z-10">
                <UserIcon className="w-6 h-6" />
              </div>
              <div className="text-[0.75rem] font-bold text-[#64748B] mb-1">04</div>
              <h4 className="text-[1rem] font-extrabold text-[#0F172A] mb-1">Handover</h4>
              <p className="text-[0.75rem] text-[#64748B] leading-tight">Transfers to<br />Voice Agent</p>
              <div className="absolute top-[20px] right-[-15px] text-blue-200 text-lg z-0">&rarr;</div>
            </div>

            <div className="flex-1 text-center relative">
              <div className="w-[60px] h-[60px] mx-auto bg-[#0066FF] rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(0,102,255,0.4)] text-white mb-4 relative z-10">
                <CheckCircleIcon className="w-6 h-6" />
              </div>
              <div className="text-[0.75rem] font-bold text-[#64748B] mb-1">05</div>
              <h4 className="text-[1rem] font-extrabold text-[#0F172A] mb-1">Close</h4>
              <p className="text-[0.75rem] text-[#64748B] leading-tight">Conference client<br />and complete call</p>
            </div>
          </div>
        </div>

      </section>

      {/* 
        ========================
        BUILT FOR EVERY ROLE
        ========================
      */}
      <section id="industries" className="relative overflow-hidden pt-32 pb-40 z-10 mt-[-40px]">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#060B14] z-10 opacity-90"></div>
          {/* Subtle office background image (using gradient as fallback) */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-900/20 via-[#060B14] to-[#060B14] z-0"></div>
        </div>

        {/* Slanted Top Divider (White covering the top left) */}
        <div className="absolute top-0 left-0 right-0 w-full z-20 pointer-events-none">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-[60px] sm:h-[100px] block">
            <polygon points="0,0 1440,0 0,100" fill="#ffffff" />
          </svg>
        </div>

        <div className="max-w-[1300px] mx-auto px-10 grid grid-cols-[1fr_1.5fr] gap-12 items-center relative z-20 mt-10">
          <div className="relative">
            <div className="inline-block px-3 py-1.5 rounded-full border border-white/20 bg-white/5 text-[#94A3B8] text-[0.65rem] font-bold tracking-[0.1em] mb-6 uppercase">BUILT FOR EVERY ROLE</div>
            <h2 className="text-[3rem] font-extrabold text-white mb-4 leading-[1.1] tracking-tight">A Platform for<br />Every Team Member</h2>
            <p className="text-[1rem] text-[#94A3B8] mb-10 leading-relaxed max-w-[400px]">Role-based access with dedicated tools and dashboards to keep your calling operations organized and efficient.</p>
            <Link href="/login" className="inline-flex border border-white/30 text-white font-semibold text-[0.9rem] px-7 py-3 rounded-full hover:bg-white/10 transition-colors">View Process Flow &rarr;</Link>

            <div className="relative mt-16 ml-8">
              <svg width="40" height="50" viewBox="0 0 50 60" fill="none" className="absolute -top-12 -left-10">
                <path d="M40 10 Q 20 20 20 50 L 25 45 M 20 50 L 15 45" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-[Caveat,cursive] text-[1.5rem] text-[#E2E8F0] -rotate-6 inline-block leading-[1.1]">
                People<br />Process<br />Technology<br />Business Growth
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-5 relative z-10">
            {/* Top Row: 3 Cards */}
            <div className="flex gap-5">
              {/* Admin */}
              <div className="bg-[#121A2F]/60 backdrop-blur-xl border-t border-white/10 border-l border-white/5 rounded-2xl p-6 flex-1 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0066FF]/20 to-transparent rounded-xl flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#00C2FF]"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" /></svg>
                </div>
                <h4 className="font-bold text-white text-[1.05rem] mb-2">Admin</h4>
                <p className="text-[0.75rem] text-[#94A3B8] leading-relaxed">Configure accounts, manage users, create campaigns, upload leads and monitor calls.</p>
              </div>
              {/* Supervisor */}
              <div className="bg-[#121A2F]/60 backdrop-blur-xl border-t border-white/10 border-l border-white/5 rounded-2xl p-6 flex-1 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0066FF]/20 to-transparent rounded-xl flex items-center justify-center mb-4">
                  <UserGroupIcon className="w-6 h-6 text-[#0088FF]" />
                </div>
                <h4 className="font-bold text-white text-[1.05rem] mb-2">Superviser</h4>
                <p className="text-[0.75rem] text-[#94A3B8] leading-relaxed">Monitor live calls, track agent activity, view reports and barge into calls.</p>
              </div>
              {/* Client */}
              <div className="bg-[#121A2F]/60 backdrop-blur-xl border-t border-white/10 border-l border-white/5 rounded-2xl p-6 flex-1 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F59E0B]/20 to-transparent rounded-xl flex items-center justify-center mb-4">
                  <BriefcaseIcon className="w-6 h-6 text-[#F59E0B]" />
                </div>
                <h4 className="font-bold text-white text-[1.05rem] mb-2">Client</h4>
                <p className="text-[0.75rem] text-[#94A3B8] leading-relaxed">Provides leads and join the call when a lead is qualified.</p>
              </div>
            </div>

            {/* Bottom Row: 2 Cards Centered */}
            <div className="flex gap-5 justify-center pl-10 pr-10">
              {/* AI Agent */}
              <div className="bg-[#121A2F]/60 backdrop-blur-xl border-t border-white/10 border-l border-white/5 rounded-2xl p-6 flex-1 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0066FF]/20 to-transparent rounded-xl flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#00C2FF]"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a3 3 0 0 1 3 3v2h2v4h-2v1a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-1H3v-4h2v-2a3 3 0 0 1 3-3h1V5.73A2 2 0 0 1 12 2zM9 11a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" fill="currentColor" /></svg>
                </div>
                <h4 className="font-bold text-white text-[1.05rem] mb-2">AI Agent</h4>
                <p className="text-[0.75rem] text-[#94A3B8] leading-relaxed">Makes first-touch calls, detects intent, qualifies leads and collects data.</p>
              </div>
              {/* Voice Agent */}
              <div className="bg-[#121A2F]/60 backdrop-blur-xl border-t border-white/10 border-l border-white/5 rounded-2xl p-6 flex-1 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0066FF]/20 to-transparent rounded-xl flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#0088FF]"><path d="M12 3a9 9 0 0 0-9 9v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H5a7 7 0 1 1 14 0h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-3.5C21 7.25 16.97 3 12 3z" fill="currentColor" /></svg>
                </div>
                <h4 className="font-bold text-white text-[1.05rem] mb-2">Voice Agent</h4>
                <p className="text-[0.75rem] text-[#94A3B8] leading-relaxed">Talks to qualified leads, conference the client and closes the call.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Slanted Bottom Divider (White covering the bottom right) */}
        <div className="absolute bottom-[-1px] left-0 right-0 w-full z-20 pointer-events-none">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-[60px] sm:h-[100px] block">
            <polygon points="0,100 1440,100 1440,0" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* 
        ========================
        POWERFUL FEATURES
        ========================
      */}
      <section id="product" className="bg-gradient-to-br from-[#F4F7FC] to-[#FFFFFF] pt-20 pb-20 overflow-hidden relative">
        <div className="max-w-[1300px] mx-auto px-10 flex items-center gap-12">

          {/* Left side text */}
          <div className="w-[45%] z-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-[#0066FF] text-[0.65rem] font-bold tracking-[0.1em] mb-4 uppercase">PRODUCT OVERVIEW</div>
            <h2 className="text-[2.6rem] font-extrabold text-[#0F172A] mb-3 leading-[1.1] tracking-tight">Powerful Features<br />for Smarter <span className="text-[#0066FF]">Calling</span></h2>
            <p className="text-[0.95rem] text-[#475569] mb-8 leading-relaxed">Everything you need to run successful outbound<br />calling campaigns with AI and human agents.</p>

            <div className="flex flex-col gap-5">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 min-w-[2.5rem] bg-[#0066FF] text-white rounded-xl flex items-center justify-center shadow-sm"><ClipboardDocumentCheckIcon className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-[0.95rem] mb-0.5">Campaign Management</h4>
                  <p className="text-[0.8rem] text-[#64748B] leading-snug">Set name, client, agent, dialing method, business hours.</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 min-w-[2.5rem] bg-[#0066FF] text-white rounded-xl flex items-center justify-center shadow-sm"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg></div>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-[0.95rem] mb-0.5">AI Agent Configuration</h4>
                  <p className="text-[0.8rem] text-[#64748B] leading-snug">Customize prompt, voice, language, knowledge base.</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 min-w-[2.5rem] bg-[#0066FF] text-white rounded-xl flex items-center justify-center shadow-sm"><ChartPieIcon className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-[0.95rem] mb-0.5">Real-time Call Monitoring</h4>
                  <p className="text-[0.8rem] text-[#64748B] leading-snug">Live dashboards, call status and reports.</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 min-w-[2.5rem] bg-[#0066FF] text-white rounded-xl flex items-center justify-center shadow-sm"><UsersIcon className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-[0.95rem] mb-0.5">Client Conferencing</h4>
                  <p className="text-[0.8rem] text-[#64748B] leading-snug">Easily connect the client into the call.</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 min-w-[2.5rem] bg-[#0066FF] text-white rounded-xl flex items-center justify-center shadow-sm"><ViewfinderCircleIcon className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-[0.95rem] mb-0.5">Lead Management</h4>
                  <p className="text-[0.8rem] text-[#64748B] leading-snug">Upload, track and recycle leads.</p>
                </div>
              </div>
            </div>
            <Link href="/login" className="bg-[#0066FF] text-white font-semibold text-[0.85rem] px-6 py-2.5 rounded-[10px] hover:bg-blue-700 transition-colors shadow-md mt-8 inline-block">Explore All Features &rarr;</Link>
          </div>

          {/* Right side static photo with gradient fade mask */}
          <div className="w-[55%] relative flex justify-center items-center">
            <div
              className="w-full h-full"
              style={{
                maskImage: "radial-gradient(ellipse at center, black 60%, transparent 95%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, black 60%, transparent 95%)"
              }}
            >
              <img src="/laptop.jpg" className="w-full h-auto object-cover mix-blend-darken opacity-90 hover:opacity-100 transition-opacity" alt="GBZ Dashboard on Laptop" />
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================
        AI AGENT CONFIG
        ========================
      */}
      <section id="features" className="bg-[#030711] py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-[1.5fr_1fr] gap-10 items-center relative z-10">
          <div className="relative z-10">
            <div className="inline-block w-fit px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-[#A0ABC0] text-[0.65rem] font-bold tracking-[0.15em] mb-6 uppercase">AI AGENT CONFIGURATION</div>
            <h2 className="text-[2.5rem] font-extrabold text-white mb-6 leading-tight">Create AI Agents<br />That Understand Your Business</h2>
            <p className="text-[1.05rem] text-[#8E9BB0] mb-8 leading-relaxed max-w-[500px]">Configure prompts, voice, language, knowledge base, transfer rules, business hours and more.</p>
            <Link href="/login" className="inline-flex border border-white/20 text-white font-semibold text-[0.9rem] px-6 py-2.5 rounded-full hover:bg-white/5 transition-colors">Learn More &rarr;</Link>
          </div>

          <div className="relative w-full h-[400px] flex justify-center items-center">
            <div className="absolute left-[-20%] flex flex-col gap-4 text-left z-20">
              <div className="bg-[#121A2F]/90 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full text-[0.8rem] text-white flex items-center gap-2 shadow-lg"><AdjustmentsHorizontalIcon className="w-4 h-4 text-gray-400" /> Custom Prompt</div>
              <div className="bg-[#121A2F]/90 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full text-[0.8rem] text-white flex items-center gap-2 shadow-lg"><GlobeAltIcon className="w-4 h-4 text-gray-400" /> Choose Voice</div>
              <div className="bg-[#121A2F]/90 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full text-[0.8rem] text-white flex items-center gap-2 shadow-lg"><GlobeAltIcon className="w-4 h-4 text-gray-400" /> Multi-language</div>
              <div className="bg-[#121A2F]/90 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full text-[0.8rem] text-white flex items-center gap-2 shadow-lg"><BookOpenIcon className="w-4 h-4 text-gray-400" /> Knowledge Base</div>
            </div>

            <img src="/robot.jpg" className="w-[320px] h-[320px] object-contain drop-shadow-[0_0_40px_rgba(0,102,255,0.4)] relative z-10" alt="AI Robot" />

            <div className="absolute right-[-20%] flex flex-col gap-4 text-left z-20">
              <div className="bg-[#121A2F]/90 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full text-[0.8rem] text-white flex items-center gap-2 shadow-lg"><ArrowPathIcon className="w-4 h-4 text-gray-400" /> Transfer Rules</div>
              <div className="bg-[#121A2F]/90 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full text-[0.8rem] text-white flex items-center gap-2 shadow-lg"><ClockIcon className="w-4 h-4 text-gray-400" /> Business Hours</div>
              <div className="bg-[#121A2F]/90 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full text-[0.8rem] text-white flex items-center gap-2 shadow-lg"><ExclamationTriangleIcon className="w-4 h-4 text-gray-400" /> Escalation Handling</div>
              <div className="bg-[#121A2F]/90 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full text-[0.8rem] text-white flex items-center gap-2 shadow-lg"><QuestionMarkCircleIcon className="w-4 h-4 text-gray-400" /> Frequently Asked Questions</div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================
        STATUS TIMELINE
        ========================
      */}
      <section id="resources" className="bg-[#F8FAFC] relative z-20 pt-28 pb-32">
        {/* Top Curve from Dark to Light */}
        <div className="absolute top-[-1px] left-0 right-0 w-full z-20 pointer-events-none rotate-180">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[30px] sm:h-[60px] block">
            <path d="M0,60 L1440,60 L1440,0 Q720,60 0,0 Z" fill="#030711" />
          </svg>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#0066FF] text-[0.65rem] font-bold tracking-[0.1em] mb-6 uppercase">TRACK EVERY CONVERSATION</div>
          <h2 className="text-[2.8rem] font-extrabold text-[#0F172A] mb-4 tracking-tight">Complete Call Status <span className="text-[#0066FF]">Tracking</span></h2>
          <p className="text-[1.05rem] text-[#475569] max-w-[600px] mx-auto mb-20">Every call goes through a trackable lifecycle &mdash; from ringing to completed.</p>

          <div className="flex items-start justify-between w-full relative px-10">
            {/* Connecting line */}
            <div className="absolute h-[1px] bg-blue-200 left-[5%] right-[5%] top-[30px] z-0"></div>

            {/* 1. Ringing */}
            <div className="flex flex-col items-center flex-1 relative z-10 group">
              <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-[#0066FF] to-[#3B82F6] shadow-[0_0_0_8px_white,0_10px_20px_rgba(0,102,255,0.4)] flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                <PhoneIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-[0.85rem] text-[#0F172A] mb-1">Ringing</h4>
              <p className="text-[0.7rem] text-[#64748B]">Call placed</p>
              <div className="absolute top-[22px] right-[-10px] text-blue-300 text-sm z-0">&rarr;</div>
            </div>

            {/* 2. Busy */}
            <div className="flex flex-col items-center flex-1 relative z-10 group">
              <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-[#F97316] to-[#FB923C] shadow-[0_0_0_8px_white,0_10px_20px_rgba(249,115,22,0.4)] flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                <DevicePhoneMobileIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-[0.85rem] text-[#0F172A] mb-1">Busy</h4>
              <p className="text-[0.7rem] text-[#64748B]">Line is busy</p>
              <div className="absolute top-[22px] right-[-10px] text-blue-300 text-sm z-0">&rarr;</div>
            </div>

            {/* 3. No Answer */}
            <div className="flex flex-col items-center flex-1 relative z-10 group">
              <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-[#EF4444] to-[#F87171] shadow-[0_0_0_8px_white,0_10px_20px_rgba(239,68,68,0.4)] flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                <NoSymbolIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-[0.85rem] text-[#0F172A] mb-1">No Answer</h4>
              <p className="text-[0.7rem] text-[#64748B]">Not picked up</p>
              <div className="absolute top-[22px] right-[-10px] text-blue-300 text-sm z-0">&rarr;</div>
            </div>

            {/* 4. Answered */}
            <div className="flex flex-col items-center flex-1 relative z-10 group">
              <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-[#10B981] to-[#34D399] shadow-[0_0_0_8px_white,0_10px_20px_rgba(16,185,129,0.4)] flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                <PhoneIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-[0.85rem] text-[#0F172A] mb-1">Answered</h4>
              <p className="text-[0.7rem] text-[#64748B]">Call connected</p>
              <div className="absolute top-[22px] right-[-10px] text-blue-300 text-sm z-0">&rarr;</div>
            </div>

            {/* 5. Qualified */}
            <div className="flex flex-col items-center flex-1 relative z-10 group">
              <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-[#10B981] to-[#34D399] shadow-[0_0_0_8px_white,0_10px_20px_rgba(16,185,129,0.4)] flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                <ViewfinderCircleIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-[0.85rem] text-[#0F172A] mb-1">Qualified</h4>
              <p className="text-[0.7rem] text-[#64748B]">Meets criteria</p>
              <div className="absolute top-[22px] right-[-10px] text-blue-300 text-sm z-0">&rarr;</div>
            </div>

            {/* 6. Connected to Agent */}
            <div className="flex flex-col items-center flex-1 relative z-10 group">
              <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#0066FF] shadow-[0_0_0_8px_white,0_10px_20px_rgba(139,92,246,0.4)] flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                <UserGroupIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-[0.85rem] text-[#0F172A] mb-1 text-center leading-tight">Connected<br />to Agent</h4>
              <p className="text-[0.7rem] text-[#64748B]">Transferred</p>
              <div className="absolute top-[22px] right-[-10px] text-blue-300 text-sm z-0">&rarr;</div>
            </div>

            {/* 7. Client Joined */}
            <div className="flex flex-col items-center flex-1 relative z-10 group">
              <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-[#0066FF] to-[#3B82F6] shadow-[0_0_0_8px_white,0_10px_20px_rgba(0,102,255,0.4)] flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                <UsersIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-[0.85rem] text-[#0F172A] mb-1 text-center leading-tight">Client<br />Joined</h4>
              <p className="text-[0.7rem] text-[#64748B]">Conference call</p>
              <div className="absolute top-[22px] right-[-10px] text-blue-300 text-sm z-0">&rarr;</div>
            </div>

            {/* 8. Completed */}
            <div className="flex flex-col items-center flex-1 relative z-10 group">
              <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-[#10B981] to-[#34D399] shadow-[0_0_0_8px_white,0_10px_20px_rgba(16,185,129,0.4)] flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                <CheckBadgeIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-[0.85rem] text-[#0F172A] mb-1">Completed</h4>
              <p className="text-[0.7rem] text-[#64748B]">Call closed</p>
              <div className="absolute top-[22px] right-[-10px] text-blue-300 text-sm z-0">&rarr;</div>
            </div>

            {/* 9. Call Back */}
            <div className="flex flex-col items-center flex-1 relative z-10 group">
              <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#A855F7] shadow-[0_0_0_8px_white,0_10px_20px_rgba(168,85,247,0.4)] flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                <PhoneArrowDownLeftIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-[0.85rem] text-[#0F172A] mb-1">Call Back</h4>
              <p className="text-[0.7rem] text-[#64748B]">Follow-up later</p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================
        FOOTER CTA
        ========================
      */}
      <section className="bg-[#050B14] relative">
        <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none -mt-[120px] z-20">
          <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="w-full h-[120px] block rotate-180">
            <path d="M0,160 L1440,160 L1440,60 Q1080,140 720,70 Q360,0 0,70 Z" fill="#FFF" />
          </svg>
        </div>
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-[1fr_0.8fr] gap-20 pt-24 pb-32 items-center">
          <div className="relative z-10">
            <div className="inline-block w-fit px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-[#A0ABC0] text-[0.65rem] font-bold tracking-[0.15em] mb-6 uppercase">LET&apos;S GROW TOGETHER</div>
            <h2 className="text-white text-[2.5rem] font-extrabold mt-2 leading-tight">Turn More Conversations<br />into <span className="text-[#0066FF]">Opportunities</span></h2>
            <p className="text-[#8E9BB0] mt-6 text-[1.05rem] max-w-xl">Experience how GBZ can automate your outbound calling and help your team focus on what truly matters &mdash; conversions.</p>
            <div className="mt-10 flex gap-4">
              <Link href="/login" className="bg-[#0066FF] text-white font-semibold text-[0.95rem] px-8 py-3.5 rounded-full hover:bg-blue-700 transition-colors shadow-lg">Request a Demo &rarr;</Link>
              <Link href="/login" className="border border-white/20 text-white font-semibold text-[0.95rem] px-8 py-3.5 rounded-full hover:bg-white/5 transition-colors">Contact Us</Link>
            </div>
          </div>
          <div className="relative z-10">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl flex flex-col items-center">
              <div className="w-full flex items-center justify-center gap-6 mb-8">
                <div className="w-16 h-16 rounded-full bg-[#0066FF] flex items-center justify-center shadow-[0_0_30px_rgba(0,102,255,0.6)]"><PhoneIcon className="w-8 h-8 text-white" /></div>
              </div>
              <h3 className="text-white font-bold text-[1.4rem] text-center mb-3">Ready to see GBZ in action?</h3>
              <p className="text-[#8E9BB0] text-center text-[0.85rem] leading-relaxed max-w-[280px]">Get a personalized demo and explore the complete process flow based on your business needs.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
