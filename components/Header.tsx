'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Eye, Menu, X, Phone, Calendar } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Services', url: '/services' },
    { label: 'Gallery', url: '/gallery' },
    { label: 'Contact', url: '/contact' },
  ];

  return (
    <header
      id="header-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 text-slate-800 border-b border-sky-100'
          : 'bg-slate-950/80 backdrop-blur-md py-4 text-white border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Placeholder */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-xl transition-all duration-300 ${isScrolled ? 'bg-sky-550 text-sky-600 bg-sky-50' : 'bg-white/15 text-white'}`}>
              <Eye className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className={`font-poppins font-bold text-lg leading-tight uppercase tracking-wider ${isScrolled ? 'text-sky-950' : 'text-white'}`}>
                Eye <span className="text-sky-500">Hospital</span>
              </span>
              <span className={`text-[10px] tracking-widest uppercase font-semibold ${isScrolled ? 'text-slate-500' : 'text-sky-200'}`}>
                Demo Website
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center gap-8 font-poppins ml-auto mr-10">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.url}
                className={`text-sm font-medium transition-colors hover:text-sky-500 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-sky-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left ${
                  pathname === item.url
                    ? isScrolled ? 'text-sky-600 font-semibold' : 'text-sky-300 font-semibold'
                    : isScrolled ? 'text-slate-600' : 'text-slate-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Sticky CTAs / CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/appointment"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-poppins text-xs font-semibold tracking-wide shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-md ${
                isScrolled
                  ? 'bg-sky-600 hover:bg-sky-700 text-white'
                  : 'bg-white hover:bg-sky-50 text-sky-900 shadow-white/10'
              }`}
            >
              <Calendar className="h-3.5 w-3.5" />
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors focus:outline-none ${
                isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-lg border-t border-slate-100 shadow-xl absolute top-full left-0 right-0 py-6 px-4 animate-fadeIn">
          <div className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.url}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-lg text-base font-poppins font-medium transition-colors ${
                  pathname === item.url
                    ? 'bg-sky-50 text-sky-600 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-sky-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-slate-100 pt-4 flex flex-col gap-3">
              <Link
                href="/appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-poppins text-sm font-semibold rounded-lg shadow-sm"
              >
                <Calendar className="h-4 w-4" />
                Book Appointment
              </Link>
              <a
                href="tel:+18005553030"
                className="flex items-center justify-center gap-2 w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-poppins text-sm font-semibold rounded-lg transition-colors border border-slate-200"
              >
                <Phone className="h-4 w-4 text-sky-600" />
                Call +1 (800) 555-3030
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
