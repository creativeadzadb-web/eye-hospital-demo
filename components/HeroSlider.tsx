'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Calendar, Phone } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    badge: 'Trusted Eye Care',
    headline: 'Clear Vision Starts Here',
    description: 'Experience professional diagnostic treatments and personalized care. Our cutting-edge technology restores your clarity, making life more vibrant every day.',
    bgImage: 'https://drive.google.com/thumbnail?sz=w1600&id=1nBnjKMsJB_SUkEw0wj7blp3M8JwFWxI5',
    sideImage: 'https://drive.google.com/thumbnail?sz=w800&id=1nBnjKMsJB_SUkEw0wj7blp3M8JwFWxI5',
    altText: 'State-of-the-art clear eye examination equipment',
  },
  {
    id: 2,
    badge: 'Advanced Ophthalmology',
    headline: 'Advanced Eye Care For Every Generation',
    description: 'From pediatric checkups to micro-incision sutureless cataract surgeries, our specialist surgeons bring clarity back to your grandparents and kids alike.',
    bgImage: 'https://drive.google.com/thumbnail?sz=w1600&id=13koz0Dv8-6LEK751STLF_VAK5tyBvJJj',
    sideImage: 'https://drive.google.com/thumbnail?sz=w800&id=13koz0Dv8-6LEK751STLF_VAK5tyBvJJj',
    altText: 'Intricate eye surgical microscope technology',
  },
  {
    id: 3,
    badge: 'Clinical Excellence',
    headline: 'Expert Care For Your Precious Sight',
    description: 'Book comprehensive clinical trials, LASIK vision correction consults, or routine tests with board-certified medical doctors passionate about optical health.',
    bgImage: 'https://drive.google.com/thumbnail?sz=w1600&id=1JBER9Gauws5NwHuhbV3XXoHahJc5We_J',
    sideImage: 'https://drive.google.com/thumbnail?sz=w800&id=1JBER9Gauws5NwHuhbV3XXoHahJc5We_J',
    altText: 'Comfortable consultation room and eye specialist discussion',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleScrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full h-[85vh] md:h-[95vh] min-h-[550px] bg-slate-950 overflow-hidden pt-20">
      {/* Background slide with dark premium overlay */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.22 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={SLIDES[current].bgImage}
              alt={SLIDES[current].headline}
              fill
              className="object-cover scale-102 transition-transform duration-[5000ms]"
              priority
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/85 to-slate-950/70" />
      </div>

      {/* Main slider layout */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full items-center"
          >
            {/* Left Content Side */}
            <div className="lg:col-span-7 flex flex-col items-start text-left text-white">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-450/20 text-sky-400 text-xs font-semibold tracking-wide font-poppins uppercase">
                {SLIDES[current].badge}
              </span>
              
              <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white mt-4 leading-tight mb-4">
                {SLIDES[current].headline}
              </h1>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl font-normal">
                {SLIDES[current].description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  href="/appointment"
                  className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-sky-550 bg-sky-600 hover:bg-sky-500 text-white font-poppins font-semibold text-sm shadow-lg shadow-sky-550/20 transition-all hover:scale-[1.03]"
                >
                  <Calendar className="h-4 w-4" />
                  Book Appointment
                </Link>
                <a
                  href="tel:+18005553030"
                  className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-slate-100 hover:bg-white text-slate-900 font-poppins font-semibold text-sm transition-all hover:scale-[1.03]"
                >
                  <Phone className="h-4 w-4 text-sky-600" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Right Side: Large image frame */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="relative group">
                {/* Visual shadow decoration */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-450 to-teal-450 rounded-2xl blur opacity-30 group-hover:opacity-40 transition-opacity" />
                
                {/* Real Image Frame */}
                <div className="relative bg-slate-900/40 p-2 border border-white/10 rounded-2xl shadow-2xl overflow-hidden aspect-[4/3] w-full">
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src={SLIDES[current].sideImage}
                      alt={SLIDES[current].altText}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-104"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Manual Arrow Slides Button */}
      <div className="absolute bottom-6 left-4 sm:left-8 lg:left-auto lg:right-[15%] z-20 flex items-center gap-3">
        <button
          onClick={prevSlide}
          className="flex items-center justify-center w-11 h-11 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:bg-sky-600 hover:border-sky-600 transition-colors cursor-pointer"
          aria-label="Previous Slide"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          onClick={nextSlide}
          className="flex items-center justify-center w-11 h-11 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:bg-sky-600 hover:border-sky-600 transition-colors cursor-pointer"
          aria-label="Next Slide"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === idx
                ? 'bg-sky-450 bg-sky-500 scale-120'
                : 'bg-slate-700 hover:bg-slate-500'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
