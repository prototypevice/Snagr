import React from 'react';
import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.06] bg-[#0F1117] py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
            <Zap className="w-[13px] h-[13px]" />
          </div>
          <span>© 2025 Snagr Technologies Inc. All rights reserved.</span>
        </div>
        <nav className="flex items-center gap-6">
          <a className="hover:text-[#F1F5F9] transition-colors" href="#">Privacy</a>
          <a className="hover:text-[#F1F5F9] transition-colors" href="#">Terms</a>
          <a className="hover:text-[#F1F5F9] transition-colors" href="#">Security</a>
          <a className="hover:text-[#F1F5F9] transition-colors" href="#">Status</a>
        </nav>
      </div>
    </footer>
  );
}
