'use client';

import React from 'react';
import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import DoctorsSection from '@/components/DoctorsSection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-slate-50 flex flex-col justify-between" id="about-us-page">
      {/* Navigation Header */}
      <Header />

      <main className="w-full">
        {/* Page Header Banner */}
        <div className="relative bg-slate-900 text-white pt-36 pb-16 overflow-hidden">
          {/* Grid Background Pattern */}
          <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff_0.8px,transparent_0.8px)] [background-size:16px_16px] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-900/30 z-0" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeIn">
            <span className="text-[10px] font-bold font-poppins text-sky-400 uppercase tracking-widest bg-sky-500/10 border border-sky-450/20 px-3.5 py-1.2 rounded-full inline-block">
              Clinical Excellence
            </span>
            <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-4">
              About Eye Hospital Demo Website
            </h1>
            <p className="text-slate-400 font-sans text-xs md:text-sm mt-3 max-w-xl mx-auto leading-relaxed">
              Discover our journey of clinical innovation, state-of-the-art diagnostic testing, and standard sutureless sight corrective surgeries.
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="bg-white">
          <AboutSection />
        </div>
        
        <div className="bg-slate-50 border-t border-b border-slate-100">
          <WhyChooseUs />
        </div>

        <div className="bg-white">
          <DoctorsSection />
        </div>
      </main>

      {/* Footer & Floating CTAs */}
      <Footer />
      <FloatingButtons />
    </div>
  );
}
