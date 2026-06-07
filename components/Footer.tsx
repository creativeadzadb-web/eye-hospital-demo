'use client';

import React from 'react';
import Link from 'next/link';
import { Eye, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Upper Footer section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Hospital Logo and Branding */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400">
                <Eye className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-poppins font-bold text-lg text-white leading-tight uppercase tracking-wider">
                  Eye <span className="text-sky-400">Hospital</span>
                </span>
                <span className="text-[10px] text-sky-300 tracking-widest uppercase font-semibold">
                  Demo Website
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed font-sans mt-2">
              Providing medical excellence and premium eye diagnostic and surgical care to restore, optimize, and preserve your precious vision for years to come.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-sky-500 hover:text-white flex items-center justify-center transition-colors text-slate-400"
                aria-label="Facebook"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-sky-500 hover:text-white flex items-center justify-center transition-colors text-slate-400"
                aria-label="Twitter"
              >
                <Twitter className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-sky-500 hover:text-white flex items-center justify-center transition-colors text-slate-400"
                aria-label="Instagram"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-sky-500 hover:text-white flex items-center justify-center transition-colors text-slate-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-poppins text-sm font-semibold uppercase tracking-wider text-white mb-6 underline-offset-8 decoration-sky-500 decoration-2">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3.5 text-sm">
              <li>
                <Link href="/" className="hover:text-sky-400 transition-colors flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 scale-0 group-hover:scale-100 transition-transform"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-sky-400 transition-colors flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 scale-0 group-hover:scale-100 transition-transform"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-sky-400 transition-colors flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 scale-0 group-hover:scale-100 transition-transform"></span>
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-sky-400 transition-colors flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 scale-0 group-hover:scale-100 transition-transform"></span>
                  Hospital Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-400 transition-colors flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 scale-0 group-hover:scale-100 transition-transform"></span>
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Offered */}
          <div>
            <h3 className="font-poppins text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Our Services
            </h3>
            <ul className="flex flex-col gap-3.5 text-sm text-slate-400">
              <li>Comprehensive Eye Checkup</li>
              <li>Cataract Surgical Center</li>
              <li>Advanced LASIK Surgery</li>
              <li>Retina Care & Vitreous Clinic</li>
              <li>Glaucoma Diagnostic Treatment</li>
              <li>Pediatric Opthalmology</li>
            </ul>
          </div>

          {/* Column 4: Contact & Working Hours */}
          <div className="flex flex-col gap-5 text-sm">
            <h3 className="font-poppins text-sm font-semibold uppercase tracking-wider text-white">
              Contact Information
            </h3>
            <div className="flex flex-col gap-3.5">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-sky-400 shrink-0 mt-0.5" />
                <span>100 Vision Care Avenue, Medical District, Suite 400, New York, NY 10016</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-sky-400 shrink-0" />
                <a href="tel:+18005553030" className="hover:text-sky-400 transition-colors">
                  +1 (800) 555-3030
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-sky-400 shrink-0" />
                <a href="mailto:info@eyehospitaldemo.com" className="hover:text-sky-400 transition-colors">
                  info@eyehospitaldemo.com
                </a>
              </div>
              <div className="flex items-start gap-3 pt-2 text-slate-400 border-t border-slate-850">
                <Clock className="h-5 w-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-slate-300">Working Hours</p>
                  <p className="text-xs text-slate-400 mt-0.5">Mon - Sat: 8:00 AM - 6:00 PM</p>
                  <p className="text-xs text-slate-400">Emergency Eye Care: 24/7 Live</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Copyright section */}
      <div className="bg-slate-950 text-slate-500 py-6 text-xs font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} Eye Hospital Demo Website. All rights reserved by clear healthcare standards.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="/" className="hover:text-slate-300">Terms of Service</Link>
            <button
              onClick={handleScrollTop}
              className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-sky-600 transition-all cursor-pointer flex items-center justify-center gap-1.5"
              title="Scroll to Top"
            >
              Back to Top
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
