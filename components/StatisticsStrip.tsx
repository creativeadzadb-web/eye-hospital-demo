'use client';

import React from 'react';
import { Users, Award, ShieldCheck, HeartPulse } from 'lucide-react';

const STATS = [
  {
    id: 1,
    value: '10,000+',
    label: 'Patients Restored',
    icon: Users,
    color: 'text-sky-600',
    bgColor: 'bg-sky-50',
  },
  {
    id: 2,
    value: '20+',
    label: 'Years of Experience',
    icon: Award,
    color: 'text-teal-600',
    bgColor: 'bg-teal-50',
  },
  {
    id: 3,
    value: '2',
    label: 'Specialist Surgeons',
    icon: ShieldCheck,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
  },
  {
    id: 4,
    value: '98%',
    label: 'Patient Satisfaction',
    icon: HeartPulse,
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
  },
];

export default function StatisticsStrip() {
  return (
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 md:-mt-14">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-100/80 border border-slate-100 p-6 md:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 divide-y divide-slate-100 lg:divide-y-0 lg:divide-x divide-solid">
        {STATS.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.id}
              className={`flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left ${
                idx > 1 ? 'pt-6 lg:pt-0' : idx > 0 ? 'pt-6 sm:pt-0 lg:pt-0' : ''
              } lg:pl-6 first:pl-0`}
            >
              <div className={`p-3 rounded-xl ${stat.bgColor} ${stat.color} shrink-0`}>
                <Icon className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-poppins font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1 font-sans">
                  {stat.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
