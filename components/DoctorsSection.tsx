'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Mail, ShieldAlert, Calendar, ArrowRight } from 'lucide-react';
import doctorRobertImg from '@/src/assets/images/regenerated_image_1780840726579.png';
import doctorSarahImg from '@/src/assets/images/regenerated_image_1780840729847.png';

const DOCTORS = [
  {
    id: 1,
    name: 'Dr. Robert Vance, MD, FACS',
    role: 'Chief Eye Specialist',
    qualification: 'MD in Ophthalmology, Harvard Medical School',
    experience: '22 Years of Clinical Experience',
    bio: 'Specializes in premium refractive treatment, laser vision surgeries, and complex corneal transplants. Acted as Lead Clinical Ophthalmologist in major hospitals.',
    image: doctorRobertImg,
    email: 'r.vance@eyehospitaldemo.com',
    badge: 'Senior Specialist',
  },
  {
    id: 2,
    name: 'Dr. Sarah Chen, MD, PhD',
    role: 'Ophthalmic Eye Surgeon',
    qualification: 'MD in Pediatric Ophthalmology, Johns Hopkins University',
    experience: '16 Years of Surgical Experience',
    bio: 'A certified vitreoretinal surgeon. Sarah is widely recognized for delicate, sutureless micro-cataract surgeries and pediatric vision management.',
    image: doctorSarahImg,
    email: 's.chen@eyehospitaldemo.com',
    badge: 'Lead Eye Surgeon',
  },
];

export default function DoctorsSection() {
  return (
    <section id="doctors" className="py-20 md:py-28 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold font-poppins text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1.2 rounded-full">
            Expert Clinicians
          </span>
          <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-4">
            Board-Certified Physicians
          </h2>
          <p className="text-slate-500 font-sans text-sm md:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Meet our senior clinical directors. Highly published, globally certified, and dedicated to vision care.
          </p>
        </div>

        {/* Doctors Grid: Exactly 2 cards as specified */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl lg:max-w-6xl mx-auto">
          {DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-md transition-all duration-300 hover:shadow-xl flex flex-col sm:flex-row min-h-[290px]"
            >
              {/* Doctor Avatar side */}
              <div className="relative w-full sm:w-[250px] aspect-[4/5] sm:aspect-auto shrink-0 bg-slate-900 overflow-hidden">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-104"
                  referrerPolicy="no-referrer"
                />
                
                {/* Float Badge */}
                <span className="absolute top-4 left-4 bg-sky-600 text-white font-poppins font-semibold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded">
                  {doc.badge}
                </span>
              </div>

              {/* Doctor Description side */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-xs font-bold text-sky-600 font-poppins tracking-wide">
                    {doc.role}
                  </span>
                  
                  <h3 className="font-poppins font-extrabold text-lg text-slate-900 tracking-tight mt-1 mb-2">
                    {doc.name}
                  </h3>
                  
                  <p className="text-slate-650 text-xs font-semibold text-slate-700 leading-snug mb-1">
                    {doc.qualification}
                  </p>

                  <p className="text-xs text-teal-650 font-semibold text-teal-600 mb-4 flex items-center gap-1.5 font-poppins">
                    <span>★</span> {doc.experience}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed font-sans line-clamp-4">
                    {doc.bio}
                  </p>
                </div>

                {/* Social icons & CTAs */}
                <div className="flex items-center gap-3.5 mt-6 pt-4 border-t border-slate-100">
                  <a
                    href={`mailto:${doc.email}`}
                    className="p-2 bg-slate-50 text-slate-500 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors cursor-pointer"
                    title={`Email ${doc.name}`}
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-slate-50 text-slate-500 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors cursor-pointer"
                    title={`Ver profile`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Book Appointment CTA below doctors */}
        <div className="mt-16 text-center">
          <Link
            href="/appointment"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-poppins font-semibold text-sm rounded-xl shadow-lg shadow-sky-600/20 hover:shadow-xl hover:shadow-sky-600/30 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer group"
          >
            <Calendar className="h-4.5 w-4.5" />
            Book An Appointment
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
