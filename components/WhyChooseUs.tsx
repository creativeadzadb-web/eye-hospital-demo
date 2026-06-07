'use client';

import React from 'react';
import { UserCheck, Sliders, ThumbsUp, HeartHandshake } from 'lucide-react';

const REASONS = [
  {
    id: 1,
    title: 'Expert Eye Specialists',
    description: 'Our clinic leads with double-certified ophthalmic surgeons, combining clinical rigor with warm client consultations.',
    icon: UserCheck,
    color: 'text-sky-600',
    borderColor: 'border-sky-100',
    bgColor: 'bg-sky-50/50',
  },
  {
    id: 2,
    title: 'Advanced Technology',
    description: 'We boast FDA-approved, ultra-modern optical diagnostics, topographic eye mapping, and high-precision laser equipment.',
    icon: Sliders,
    color: 'text-teal-600',
    borderColor: 'border-teal-100',
    bgColor: 'bg-teal-50/50',
  },
  {
    id: 3,
    title: 'Trusted Treatment',
    description: 'Serving with 98% positive reviews over 20 years, our high surgical success rate provides long-term patient assurance.',
    icon: ThumbsUp,
    color: 'text-indigo-600',
    borderColor: 'border-indigo-100',
    bgColor: 'bg-indigo-50/50',
  },
  {
    id: 4,
    title: 'Patient-Centered Care',
    description: 'We treat people, not just eyes. Expect complete family support, transparent treatment schedules, and ongoing care reviews.',
    icon: HeartHandshake,
    color: 'text-rose-600',
    borderColor: 'border-rose-100',
    bgColor: 'bg-rose-50/50',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold font-poppins text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1.2 rounded-full">
            Our Quality Standards
          </span>
          <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-905 text-slate-950 tracking-tight mt-4">
            Why Trusted Ophthalmic Patients Choose Us
          </h2>
          <p className="text-slate-500 font-sans text-sm md:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Consistently leading in clinical success, safety protocols, and comfortable patient experiences.
          </p>
        </div>

        {/* 4 Cards Grid as specified */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {REASONS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`p-6 rounded-2xl border ${item.borderColor} ${item.bgColor} flex flex-col items-start transition-smooth hover:shadow-lg hover:shadow-slate-100/50 hover:bg-white`}
              >
                <div className={`p-3 rounded-xl bg-white shadow-sm border ${item.borderColor} ${item.color} mb-5 shrink-0`}>
                  <Icon className="h-5 w-5" />
                </div>
                
                <h3 className="font-poppins font-bold text-base text-slate-900 tracking-tight mb-2.5">
                  {item.title}
                </h3>
                
                <p className="text-slate-550 text-slate-500 text-xs md:text-sm leading-relaxed mt-1">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
