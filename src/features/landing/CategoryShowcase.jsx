import React from 'react';
import { FlaskConical, Cpu, Smartphone, Headphones } from 'lucide-react';

export default function CategoryShowcase() {
  return (
    <section className="py-10" id="categories">
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">Protected Verticals</span>
          <h3 className="text-lg font-bold text-[#F1F5F9] mt-0.5">Top Counterfeit-Targeted Markets</h3>
        </div>
        <span className="text-xs font-medium text-[#94A3B8] hidden sm:block">Strict Seller Registries</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
        <div className="p-4 bg-[#181B22] border border-white/[0.08] rounded-2xl hover:border-white/[0.18] transition-all flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/[0.04] flex items-center justify-center text-amber-400">
            <FlaskConical className="w-[20px] h-[20px]" />
          </div>
          <div>
            <div className="text-xs font-semibold text-[#F1F5F9]">Fragrances</div>
            <div className="text-[11px] text-[#64748B]">Middle Eastern &amp; Niche</div>
          </div>
        </div>
        <div className="p-4 bg-[#181B22] border border-white/[0.08] rounded-2xl hover:border-white/[0.18] transition-all flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/[0.04] flex items-center justify-center text-amber-400">
            <Cpu className="w-[20px] h-[20px]" />
          </div>
          <div>
            <div className="text-xs font-semibold text-[#F1F5F9]">PC Hardware</div>
            <div className="text-[11px] text-[#64748B]">GPUs &amp; Processors</div>
          </div>
        </div>
        <div className="p-4 bg-[#181B22] border border-white/[0.08] rounded-2xl hover:border-white/[0.18] transition-all flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/[0.04] flex items-center justify-center text-amber-400">
            <Smartphone className="w-[20px] h-[20px]" />
          </div>
          <div>
            <div className="text-xs font-semibold text-[#F1F5F9]">Smartphones</div>
            <div className="text-[11px] text-[#64748B]">NTC Approved Units</div>
          </div>
        </div>
        <div className="p-4 bg-[#181B22] border border-white/[0.08] rounded-2xl hover:border-white/[0.18] transition-all flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/[0.04] flex items-center justify-center text-amber-400">
            <Headphones className="w-[20px] h-[20px]" />
          </div>
          <div>
            <div className="text-xs font-semibold text-[#F1F5F9]">Audiophile Gear</div>
            <div className="text-[11px] text-[#64748B]">IEMs, DACs &amp; Amps</div>
          </div>
        </div>
      </div>
    </section>
  );
}
