'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'Thomas Miller',
    role: 'LASIK Vision Patient',
    text: "Having LASIK at this eye hospital was life-changing. The surgeons explained the process perfectly, and the procedure took only 10 minutes. I was back to work with 20/20 vision the next business day. Amazing premium hospital!",
    image: 'https://picsum.photos/seed/patient1/150/150',
    stars: 5,
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    role: 'Cataract Surgical Patient',
    text: "My grandmother was deeply anxious about cataract removal. Dr. Vance was incredibly patient and reassuring. The state-of-the-art procedure was sutureless and totally painless. She can read comfortably again without glasses!",
    image: 'https://picsum.photos/seed/patient2/150/150',
    stars: 5,
  },
  {
    id: 3,
    name: 'David Brooks',
    role: 'Comprehensive Diagnostic Patient',
    text: "Excellent attention to clinical detail! Their retina scanners caught an early-stage issue that other centers completely overlooked. Highly recommend their comprehensive premium checkups for families.",
    image: 'https://picsum.photos/seed/patient3/150/150',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold font-poppins text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1.2 rounded-full">
            Patient Stories
          </span>
          <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-4">
            Encouraging Words From Our Cured Patients
          </h2>
          <p className="text-slate-500 font-sans text-sm md:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Discover what our outpatient patrons say about our surgical precision and diagnostic safety.
          </p>
        </div>

        {/* Testimonials Grid: Exactly 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="relative p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Quote visual element */}
              <div className="absolute top-6 right-6 text-sky-100 shrink-0">
                <Quote className="h-10 w-10 rotate-180" />
              </div>

              <div>
                {/* Star rating rendering */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs md:text-sm text-slate-600 italic leading-relaxed font-sans mb-6">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Patient Avatar Profile info */}
              <div className="flex items-center gap-4.5 pt-4 border-t border-slate-100 shrink-0">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-sky-100">
                  <Image
                    src={rev.image}
                    alt={rev.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-sm text-slate-950 leading-tight">
                    {rev.name}
                  </h4>
                  <span className="text-[10px] uppercase font-semibold text-sky-600 tracking-wide mt-1 inline-block">
                    {rev.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
