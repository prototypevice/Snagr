import React from 'react';
import { RefreshCcw, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';

export default function ComparisonMatrix() {
  return (
    <section className="w-full mt-4 pb-16" id="matrix">
      <div className="bg-[#181B22] border border-white/[0.08] rounded-2xl p-5 sm:p-7 shadow-2xl relative overflow-hidden">
        {/* Live Telemetry / Result Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/[0.06] mb-6">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse"></div>
            <div>
              <span className="text-xs text-[#64748B] uppercase tracking-wider font-semibold block">Live Price Scan</span>
              <span className="text-sm font-semibold text-[#F1F5F9]">Afnan 9PM Eau De Parfum (100ml)</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#94A3B8] bg-white/[0.04] px-3 py-1.5 rounded-full border border-white/[0.06] w-fit">
            <RefreshCcw className="w-[16px] h-[16px] text-amber-400" />
            <span>Real-time parity check: 3 approved sellers</span>
          </div>
        </div>
        {/* 3 Comparison Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {/* Column 1: Shopee */}
          <div className="flex flex-col justify-between p-5 bg-[#0F1117]/80 rounded-2xl border border-white/[0.08] hover:border-white/[0.15] transition-all">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide bg-[#EE4D2D]/15 text-[#EE4D2D] border border-[#EE4D2D]/20 uppercase">
                  Shopee
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-[#10B981] font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-[13px] h-[13px]" /> Vetted Legit Seller
                </span>
              </div>
              <div className="font-semibold text-base text-[#F1F5F9] mb-1">JP Fragrance</div>
              <p className="text-xs text-[#94A3B8] mb-4">Fraghead PH Tier-1 Verified</p>
              {/* Breakdown */}
              <div className="space-y-2 py-3 border-t border-white/[0.06] text-xs text-[#94A3B8]">
                <div className="flex justify-between">
                  <span>List baseline:</span>
                  <span className="text-[#F1F5F9]">₱2,450</span>
                </div>
                <div className="flex justify-between text-emerald-400">
                  <span>Shop voucher:</span>
                  <span>−₱150</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span className="text-[#F1F5F9]">Free</span>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.06]">
              <span className="text-[11px] text-[#64748B] uppercase tracking-wider block font-medium">Net Checkout Price</span>
              <div className="text-2xl font-bold text-[#F1F5F9] mt-0.5">₱2,300</div>
              <a className="mt-3 block text-center py-2 px-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] text-xs font-semibold text-[#F1F5F9] border border-white/[0.08] transition-colors" href="#">
                View on Shopee
              </a>
            </div>
          </div>
          {/* Column 2: TikTok Shop (WINNER - DXB Dubai) */}
          <div className="relative flex flex-col justify-between p-5 bg-gradient-to-b from-[#1F232D] to-[#181B22] rounded-2xl border-2 border-amber-500/70 shadow-[0_0_30px_-5px_rgba(245,158,11,0.25)] md:-translate-y-1 transition-all">
            {/* Best Price Ribbon */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-emerald-400 text-[#0F1117] text-[11px] font-extrabold tracking-wider uppercase flex items-center gap-1 shadow-md">
              <ShieldCheck className="w-[13px] h-[13px]" />
              Best Price
            </div>
            <div>
              <div className="flex items-center justify-between mb-3 mt-1">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide bg-white/[0.08] text-white border border-white/[0.15] uppercase">
                  TikTok Shop
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-[#10B981] font-medium bg-emerald-500/15 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-[13px] h-[13px]" /> Vetted Legit Seller
                </span>
              </div>
              <div className="font-semibold text-base text-[#F1F5F9] mb-1">DXB Dubai Fragrances</div>
              <p className="text-xs text-amber-300/80 mb-4">Official Community Whitelist</p>
              {/* Breakdown */}
              <div className="space-y-2 py-3 border-t border-white/[0.08] text-xs">
                <div className="flex justify-between text-[#94A3B8]">
                  <span>List baseline:</span>
                  <span className="line-through text-[#64748B]">₱2,399</span>
                </div>
                <div className="flex justify-between text-emerald-400 font-medium">
                  <span>Flash voucher applied:</span>
                  <span>−₱220</span>
                </div>
                <div className="flex justify-between text-amber-300">
                  <span>Stacked creator drop:</span>
                  <span>Applied</span>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-amber-500/20">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-amber-400 uppercase tracking-wider font-semibold">Net Checkout Price</span>
                <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">SAVES ₱221</span>
              </div>
              <div className="text-3xl font-extrabold text-[#F1F5F9] mt-0.5">₱2,179</div>
              <button className="mt-3 w-full py-2.5 px-3 rounded-xl bg-[#F59E0B] hover:bg-amber-400 text-xs font-bold text-[#0F1117] transition-all shadow-md shadow-amber-500/20 flex items-center justify-center gap-1.5 active:scale-95">
                <span>Snag Deal</span>
                <ExternalLink className="w-[15px] h-[15px]" />
              </button>
            </div>
          </div>
          {/* Column 3: Lazada */}
          <div className="flex flex-col justify-between p-5 bg-[#0F1117]/80 rounded-2xl border border-white/[0.08] hover:border-white/[0.15] transition-all">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide bg-[#0F1466] text-[#4C7CFF] border border-[#4C7CFF]/30 uppercase">
                  Lazada
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-[#10B981] font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-[13px] h-[13px]" /> Vetted Legit Seller
                </span>
              </div>
              <div className="font-semibold text-base text-[#F1F5F9] mb-1">Authentic Frag PH</div>
              <p className="text-xs text-[#94A3B8] mb-4">LazMall Authenticity Guarantee</p>
              {/* Breakdown */}
              <div className="space-y-2 py-3 border-t border-white/[0.06] text-xs text-[#94A3B8]">
                <div className="flex justify-between">
                  <span>List baseline:</span>
                  <span className="text-[#F1F5F9]">₱2,500</span>
                </div>
                <div className="flex justify-between text-emerald-400">
                  <span>Platform voucher:</span>
                  <span>−₱100</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span className="text-[#F1F5F9]">Free</span>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.06]">
              <span className="text-[11px] text-[#64748B] uppercase tracking-wider block font-medium">Net Checkout Price</span>
              <div className="text-2xl font-bold text-[#F1F5F9] mt-0.5">₱2,400</div>
              <a className="mt-3 block text-center py-2 px-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] text-xs font-semibold text-[#F1F5F9] border border-white/[0.08] transition-colors" href="#">
                View on Lazada
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
