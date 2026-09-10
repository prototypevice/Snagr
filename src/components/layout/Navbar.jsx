import React from 'react';
import { Zap } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#0F1117]/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
        {/* Brand Logo (aligned to the far left) */}
        <a className="flex items-center gap-2.5 group" href="#">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-amber-400 flex items-center justify-center text-[#0F1117] shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <Zap className="w-[19px] h-[19px] font-bold" />
          </div>
          <span className="text-lg font-bold tracking-tight text-[#F1F5F9] group-hover:text-amber-400 transition-colors">Snagr</span>
        </a>
        {/* Right Action (aligned to the far right) */}
        <div className="flex items-center">
          <a className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-[#F59E0B] text-[#0F1117] hover:bg-amber-400 shadow-md shadow-amber-500/20 active:scale-95 transition-all" href="#onboard">
            Join Free
          </a>
        </div>
      </div>
    </header>
  );
}
