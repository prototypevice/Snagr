import React from 'react';

export default function FeatureRow() {
  return (
    <section className="py-10 border-t border-white/[0.08]" id="how-it-works">
      <div className="text-center max-w-xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#F1F5F9] tracking-tight">How Snagr Operates</h2>
        <p className="mt-2 text-sm text-[#94A3B8]">Simple, fast, and engineered to eliminate counterfeit risks.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1 */}
        <div className="p-6 bg-[#181B22] border border-white/[0.08] rounded-2xl hover:border-white/[0.15] transition-all">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-base mb-4">
            1
          </div>
          <h3 className="text-base font-bold text-[#F1F5F9] mb-2">Whitelisted Only</h3>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            We only pull listings from community-verified shops. If it's not verified, it doesn't show up.
          </p>
        </div>
        {/* Card 2 */}
        <div className="p-6 bg-[#181B22] border border-white/[0.08] rounded-2xl hover:border-white/[0.15] transition-all">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-base mb-4">
            2
          </div>
          <h3 className="text-base font-bold text-[#F1F5F9] mb-2">Voucher Calculator</h3>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            We factor in platform vouchers, shop coupons, and flash deals to show your actual checkout total.
          </p>
        </div>
        {/* Card 3 */}
        <div className="p-6 bg-[#181B22] border border-white/[0.08] rounded-2xl hover:border-white/[0.15] transition-all">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-base mb-4">
            3
          </div>
          <h3 className="text-base font-bold text-[#F1F5F9] mb-2">All In One Spot</h3>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Compare Shopee, Lazada, and TikTok Shop side-by-side without switching apps.
          </p>
        </div>
      </div>
    </section>
  );
}
