'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Check, ShieldAlert, Award, ShieldCheck, Heart } from 'lucide-react';
import aboutImg from '@/src/assets/images/regenerated_image_1780819938592.webp';

const FEATURES = [
  {
    title: 'Experienced Doctors',
    description: 'Our board-certified ophthalmologists possess over two decades of expert clinical experience in vision correction.',
    icon: Award,
    color: 'bg-blue-50 text-sky-600 border-sky-100',
  },
  {
    title: 'Advanced Equipment',
    description: 'We invest in advanced optical diagnostics and high-frequency laser technologies for micro-incision treatments.',
    icon: ShieldCheck,
    color: 'bg-teal-50 text-teal-600 border-teal-100',
  },
  {
    title: 'Personalized Care',
    description: 'Every treatment path is highly tailored to your lifestyle, age, occupational demands, and surgical suitability.',
    icon: Heart,
    color: 'bg-rose-50 text-rose-600 border-rose-100',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Beautiful clinical workspace image */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-sky-100 rounded-full blur-2xl opacity-70 z-0" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-100 rounded-full blur-3xl opacity-70 z-0" />

            <div className="relative z-10 p-3 bg-white rounded-3xl shadow-xl shadow-slate-100/60 border border-slate-100 aspect-[5/6] max-w-md mx-auto overflow-hidden">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={aboutImg}
                  alt="Elite ophthalmologist workspace setup"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Embedded Patient trust floating badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100/50 flex items-center gap-3">
                  <div className="p-2 bg-emerald-500 text-white rounded-lg shrink-0">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-poppins font-semibold text-xs text-slate-900 leading-tight">Ministry Certified Care</p>
                    <p className="text-[10px] text-slate-500 mt-0.5 leading-none">Class-A Healthcare License</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Context and structural pillars */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs font-bold font-poppins text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1.2 rounded-full mb-4">
              About Our Hospital
            </span>
            
            <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A Premium Path to Preserving & Re-establishing Pristine Vision
            </h2>
            
            <p className="text-slate-500 text-sm md:text-base leading-relaxed mt-5 max-w-2xl font-sans">
              Founded on the belief that pristine vision leads to a happier, healthier life, Eye Hospital Demo Website has served the region with patient-centered diagnostic therapy. We combine the friendly warmth of community outpatient consultation with the ultra-modern power of diagnostic and surgical systems.
            </p>

            <p className="text-slate-500 text-sm leading-relaxed mt-3 max-w-2xl font-sans text-xs">
              Whether you need basic screening for eyeglasses or modern laser lens correction surgery, our specialists lead with rigorous medical training and certified procedures.
            </p>

            {/* Feature Cards list */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 w-full">
              {FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] flex flex-col items-start text-left"
                  >
                    <div className={`p-2.5 rounded-lg border ${feature.color} mb-4`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-poppins font-bold text-sm text-slate-905 text-slate-800 tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
