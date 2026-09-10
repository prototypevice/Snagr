import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Hero from './Hero';
import ComparisonMatrix from './ComparisonMatrix';
import FeatureRow from './FeatureRow';
import CategoryShowcase from './CategoryShowcase';
import Footer from '../../components/layout/Footer';

export default function LandingPage() {
  return (
    <div className="bg-[#0F1117] text-[#F1F5F9] antialiased min-h-screen flex flex-col selection:bg-amber-500/20 selection:text-amber-300 font-sans">
      {/* Subtle Ambient Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent blur-[140px] pointer-events-none -z-10"></div>
      <div className="fixed top-[600px] right-0 w-[500px] h-[350px] bg-emerald-500/5 blur-[150px] pointer-events-none -z-10"></div>

      <Navbar />

      {/* Main Content Container */}
      <main className="w-full flex-1 max-w-6xl mx-auto px-4 md:px-6 pt-12 pb-20 flex flex-col">
        <Hero />
        <ComparisonMatrix />
        <FeatureRow />
        <CategoryShowcase />

        {/* Clean Onboarding Card (Bottom Funnel) */}
        <section className="pt-6 pb-8" id="onboard">
          <div className="relative w-full max-w-2xl mx-auto rounded-2xl bg-[#181B22] border border-white/[0.08] p-8 sm:p-10 shadow-2xl overflow-hidden text-center">
            {/* Warm Ambient Glow Inside Card */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-amber-500/10 blur-[80px] pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-emerald-500/10 blur-[80px] pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F1F5F9] tracking-tight">
                Ready to start saving?
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-[#94A3B8] max-w-md mx-auto leading-relaxed font-normal">
                Create an account to track your favorite shops and get instant price-drop alerts.
              </p>
              
              {/* Clean Email Form */}
              <form className="mt-6 flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto" onSubmit={(e) => {
                  e.preventDefault();
                  document.getElementById('signupAlert').classList.remove('hidden');
                }}>
                <input 
                  className="flex-1 px-4 py-3 rounded-xl bg-[#0F1117] border border-white/[0.12] text-sm text-[#F1F5F9] placeholder-[#64748B] focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-normal" 
                  placeholder="Enter your work or personal email" 
                  required 
                  type="email" 
                />
                <button 
                  className="px-6 py-3 rounded-xl bg-[#F59E0B] hover:bg-amber-400 text-[#0F1117] font-semibold text-sm transition-all whitespace-nowrap shadow-md shadow-amber-500/20 active:scale-95" 
                  type="submit"
                >
                  Create Free Account
                </button>
              </form>
              
              {/* Feedback notification */}
              <div className="hidden mt-4 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium" id="signupAlert">
                ✓ Invitation dispatched! Check your email to complete your setup.
              </div>
              
              {/* Reassurances */}
              <div className="mt-5 flex items-center justify-center gap-3 text-xs text-[#94A3B8]">
                <span>Free forever</span>
                <span className="text-white/20">•</span>
                <span>No spam</span>
                <span className="text-white/20">•</span>
                <span>Instant alerts</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
