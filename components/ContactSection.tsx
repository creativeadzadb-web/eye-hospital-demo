'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold font-poppins text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1.2 rounded-full">
            Our Location
          </span>
          <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-905 text-slate-950 tracking-tight mt-4">
            Visit Eye Hospital Demo Website
          </h2>
          <p className="text-slate-500 font-sans text-sm md:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Conveniently situated in the central medical district, with subterranean parking, disability access, and standard transport links.
          </p>
        </div>

        {/* Info Grid & Map Integration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: 4 Master Contact detail Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            
            {/* Card 1: Address */}
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100/80 flex gap-4 transition-smooth hover:bg-sky-50/20 hover:border-sky-100">
              <div className="p-3 bg-white shadow-sm border border-slate-100 rounded-xl text-sky-600 shrink-0 h-11 w-11 flex items-center justify-center">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-poppins font-bold text-sm text-slate-900">Hospital Address</h4>
                <p className="text-slate-500 text-xs md:text-sm mt-1.5 leading-relaxed font-sans">
                  Eye Hospital Demo Website, 45 Vision Care Road, 100 Feet Rd, Indiranagar, Bengaluru, Karnataka 560038
                </p>
              </div>
            </div>

            {/* Card 2: Phone */}
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100/80 flex gap-4 transition-smooth hover:bg-sky-50/20 hover:border-sky-100">
              <div className="p-3 bg-white shadow-sm border border-slate-100 rounded-xl text-teal-600 shrink-0 h-11 w-11 flex items-center justify-center">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-poppins font-bold text-sm text-slate-900">Phone Numbers</h4>
                <p className="text-slate-500 text-xs md:text-sm mt-1.5 leading-relaxed font-sans">
                  Hospital Info: <a href="tel:+918055503030" className="hover:text-sky-600 font-semibold font-poppins">+91 (80) 5550-3030</a>
                </p>
                <p className="text-slate-500 text-xs leading-relaxed font-sans">
                  Surgical Hub: <a href="tel:+918055503035" className="hover:text-sky-600">+91 (80) 5550-3035</a>
                </p>
              </div>
            </div>

            {/* Card 3: Email */}
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100/80 flex gap-4 transition-smooth hover:bg-sky-50/20 hover:border-sky-100">
              <div className="p-3 bg-white shadow-sm border border-slate-100 rounded-xl text-indigo-600 shrink-0 h-11 w-11 flex items-center justify-center">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-poppins font-bold text-sm text-slate-900">Email Contacts</h4>
                <p className="text-slate-500 text-xs md:text-sm mt-1.5 leading-relaxed font-sans">
                  General Queries: <a href="mailto:info@eyehospitaldemo.com" className="hover:text-sky-600 font-semibold">info@eyehospitaldemo.com</a>
                </p>
                <p className="text-slate-500 text-xs leading-relaxed font-sans">
                  Surgical Booking: <a href="mailto:surgery@eyehospitaldemo.com" className="hover:text-sky-600">surgery@eyehospitaldemo.com</a>
                </p>
              </div>
            </div>

            {/* Card 4: Working Hours */}
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100/80 flex gap-4 transition-smooth hover:bg-sky-50/20 hover:border-sky-100">
              <div className="p-3 bg-white shadow-sm border border-slate-100 rounded-xl text-rose-600 shrink-0 h-11 w-11 flex items-center justify-center">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-poppins font-bold text-sm text-slate-900">Working Hours</h4>
                <p className="text-slate-500 text-xs md:text-sm mt-1.5 leading-relaxed font-sans">
                  Outpatients: <strong>Mon - Sat: 8:00 AM - 6:00 PM</strong>
                </p>
                <div className="text-[11px] text-rose-600 font-semibold mt-1 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping"></span>
                  Inpatient Emergency Ward: 24 Hours / 7 Days Live
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Map Placeholder */}
          <div className="lg:col-span-7 flex flex-col justify-stretch">
            <div className="relative border border-slate-100 shadow-xl rounded-3xl overflow-hidden bg-slate-50 p-2 min-h-[400px] flex-1 flex flex-col justify-stretch">
              
              {/* Map Canvas Frame */}
              <div className="relative rounded-2xl overflow-hidden flex-1 w-full h-full min-h-[380px] bg-slate-200 border border-slate-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.699745555115!2d77.6385412!3d12.9766549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16af8ede1233%3A0x8bae16af8ede1233!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1717717420123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full rounded-2xl z-0"
                ></iframe>

                {/* Top Overlay Bar */}
                <div className="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl border border-sky-100 shadow-md flex items-center justify-between text-xs z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <p className="font-poppins font-semibold text-slate-800">Hospital Valet Parking: Active</p>
                  </div>
                  <span className="text-[10px] font-bold text-sky-600 uppercase tracking-wider bg-sky-50 px-2.5 py-1 rounded">125 Slots Free</span>
                </div>

                {/* Bottom interactive placeholder control overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 text-slate-400 p-4 rounded-xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs z-10">
                  <p className="text-white text-xs font-sans text-center sm:text-left">
                    Direct GPS Navigation to Eye Hospital Demo Website
                  </p>
                  <a
                    href="https://maps.google.com/?q=Indiranagar,Bengaluru,India"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4.5 py-2 bg-sky-600 hover:bg-sky-500 text-white font-poppins font-semibold rounded-lg text-[11px] uppercase tracking-wider shrink-0 transition-colors"
                  >
                    Launch In Google Maps
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
