'use client';

import React from 'react';
import { Eye, Activity, Sparkles, Scan, Smile, Droplets } from 'lucide-react';

const SERVICES = [
  {
    id: 1,
    title: 'Comprehensive Eye Checkup',
    description: 'A 45-minute premium ocular checkup covering refraction, intraocular pressure measurement, and visual field scanning to detect issues early.',
    icon: Eye,
    color: 'sky',
  },
  {
    id: 2,
    title: 'Cataract Surgery',
    description: 'Painless, stitch-less laser eye surgery featuring high-end monofocal or multifocal intraocular lens implants to safely restore sight.',
    icon: Sparkles,
    color: 'teal',
  },
  {
    id: 3,
    title: 'LASIK Refractive Correction',
    description: 'Experience blade-free refractive laser therapy to say goodbye to prescription lenses, glasses, and contact lenses in under 15 minutes.',
    icon: Scan,
    color: 'indigo',
  },
  {
    id: 4,
    title: 'Retina & Vitreous Care',
    description: 'Advanced diagnosis and therapies for diabetic retinopathy, age-related macular degeneration (AMD), and critical retinal detachments.',
    icon: Activity,
    color: 'rose',
  },
  {
    id: 5,
    title: 'Glaucoma Treatment',
    description: 'Protect your optic nerve from pressure damage with medication drops, laser trabeculoplasty, or selective micro-bypass shunt surgery.',
    icon: Droplets,
    color: 'cyan',
  },
  {
    id: 6,
    title: 'Pediatric Eye Care',
    description: 'Specialized eye checkups for toddlers and children to diagnose refractive errors, lazy eyes (amblyopia), or squints early.',
    icon: Smile,
    color: 'blue',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold font-poppins text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1.2 rounded-full">
            Specialized Care
          </span>
          <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-904 text-slate-950 tracking-tight mt-4">
            Our Elite Ophthalmic Services
          </h2>
          <p className="text-slate-500 font-sans text-sm md:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            From pediatric diagnostics to high-frequency laser surgery, our clinic provides complete state-of-the-art therapies for your vision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative p-8 rounded-2xl bg-white border border-slate-100 transition-all duration-300 hover:shadow-xl hover:shadow-slate-100 hover:border-slate-200 hover:-translate-y-1 flex flex-col items-start"
              >
                {/* Visual decoration line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-sky-550 bg-sky-600 rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                
                {/* Responsive Icon Circle */}
                <div className="p-3.5 rounded-xl bg-slate-50 group-hover:bg-sky-50 group-hover:text-sky-600 text-slate-700 transition-colors duration-300 mb-6 shrink-0 flex items-center justify-center">
                  <Icon className="h-6 w-6" />
                </div>
                
                <h3 className="font-poppins font-bold text-lg text-slate-900 tracking-tight mb-3">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-sky-600 font-poppins group-hover:text-sky-700 cursor-pointer">
                  <span>Learn more</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
