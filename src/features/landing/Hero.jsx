import React from 'react';
import { Search, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center pt-8 pb-14 max-w-3xl mx-auto">
      {/* Badge with Soft Amber Glow */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold tracking-wide mb-6 shadow-[0_0_20px_-4px_rgba(245,158,11,0.25)]">
        <span>🛡️ Philippine Fragrance &amp; Tech Whitelist</span>
      </div>
      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F1F5F9] leading-[1.15] text-balance">
        Find the lowest price.<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Never buy a fake.</span>
      </h1>
      {/* Subheadline */}
      <p className="mt-5 text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl text-pretty font-normal">
        We check Shopee, TikTok Shop, and Lazada to find the best voucher-stacked price—strictly from legit, community-approved sellers.
      </p>
      {/* Modern Integrated Search Container */}
      <div className="mt-8 w-full max-w-xl">
        <form className="p-1.5 bg-[#181B22] border border-white/[0.12] hover:border-amber-500/40 rounded-full shadow-2xl flex items-center transition-all focus-within:border-amber-500 focus-within:ring-2 focus-within:ring-amber-500/20" onSubmit={(e) => e.preventDefault()}>
          <div className="pl-4 text-[#94A3B8] flex items-center">
            <Search className="w-[22px] h-[22px]" />
          </div>
          <input className="w-full bg-transparent border-none text-[#F1F5F9] placeholder-[#64748B] text-sm sm:text-base px-3 py-2.5 focus:outline-none focus:ring-0 font-medium" placeholder="Search perfumes, GPUs, phones..." type="text" defaultValue="Afnan 9PM (100ml)" />
          <button className="px-5 sm:px-6 py-2.5 rounded-full bg-[#F59E0B] text-[#0F1117] font-semibold text-sm hover:bg-amber-400 transition-all shrink-0 active:scale-95 shadow-md shadow-amber-500/25 flex items-center gap-1.5" type="submit">
            <span>Snag Deals</span>
            <ArrowRight className="w-[18px] h-[18px] font-bold" />
          </button>
        </form>
        {/* Social Proof Micro-Text */}
        <div className="mt-3.5 flex items-center justify-center gap-2 text-xs text-[#94A3B8] font-medium">
          <ShieldCheck className="w-[15px] h-[15px] text-[#10B981]" />
          <span>30+ trusted shops indexed daily</span>
          <span className="text-white/20">•</span>
          <span>Zero ₱150 counterfeits</span>
        </div>
      </div>
    </section>
  );
}
