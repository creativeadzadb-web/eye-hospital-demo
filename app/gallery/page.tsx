'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { Eye, X, ChevronLeft, ChevronRight, Filter, ZoomIn } from 'lucide-react';

interface GalleryItem {
  id: number;
  category: 'hospital' | 'doctors' | 'facilities' | 'treatments';
  title: string;
  url: string;
  aspect: string; // for simulated masonry layout
}

const CATEGORIES = [
  { value: 'all', label: 'All Photos' },
  { value: 'hospital', label: 'Our Clinic' },
  { value: 'doctors', label: 'Expert Doctors' },
  { value: 'facilities', label: 'Advanced Facilities' },
  { value: 'treatments', label: 'Patient Care' },
];

const GALLERY_ITEMS: GalleryItem[] = [
  // 1. HOSPITAL
  { id: 25, category: 'hospital', title: 'Premium Eye Care Diagnostics Wing', url: 'https://lh3.googleusercontent.com/d/1iT8AIAYiiwBisfEhDhuhCGdgLIOtO26E', aspect: 'aspect-[3/2]' },
  { id: 1, category: 'hospital', title: 'Modern Main Clinic Lobby', url: 'https://picsum.photos/seed/clinloby/900/600', aspect: 'aspect-[3/2]' },
  { id: 2, category: 'hospital', title: 'Surgical Consultation Corridor', url: 'https://picsum.photos/seed/clincor/900/1200', aspect: 'aspect-[3/4]' },
  { id: 3, category: 'hospital', title: 'Premium Patient Reception Room', url: 'https://picsum.photos/seed/clinrec/900/600', aspect: 'aspect-[3/2]' },
  { id: 4, category: 'hospital', title: 'Emergency Eye Care Ward', url: 'https://picsum.photos/seed/clinemg/900/600', aspect: 'aspect-[3/2]' },
  { id: 5, category: 'hospital', title: 'Suturing Recovery Area Room 1A', url: 'https://picsum.photos/seed/clinrcv/900/500', aspect: 'aspect-[16/9]' },
  { id: 6, category: 'hospital', title: 'Optical Diagnostic Lounge', url: 'https://picsum.photos/seed/clinopt/950/600', aspect: 'aspect-[3/2]' },

  // 2. DOCTORS
  { id: 26, category: 'doctors', title: 'Specialist Consultation & Direct Examination Suite', url: 'https://lh3.googleusercontent.com/d/18_N7gln3k4010jXvmtcHJAc8_CskehIj', aspect: 'aspect-[3/2]' },
  { id: 7, category: 'doctors', title: 'Dr. Robert Vance in Consultation', url: 'https://picsum.photos/seed/docvanceconsult/900/1250', aspect: 'aspect-[3/4]' },
  { id: 8, category: 'doctors', title: 'Dr. Sarah Chen adjusting laser rig', url: 'https://picsum.photos/seed/docchenlaser/900/600', aspect: 'aspect-[3/2]' },
  { id: 9, category: 'doctors', title: 'Our Ophthalmology Surgical Team', url: 'https://picsum.photos/seed/docteam/900/600', aspect: 'aspect-[3/2]' },
  { id: 10, category: 'doctors', title: 'Pediatric checkup by Dr. Vance', url: 'https://picsum.photos/seed/docpediatric/900/1200', aspect: 'aspect-[3/4]' },
  { id: 11, category: 'doctors', title: 'Senior ophthalmology review board', url: 'https://picsum.photos/seed/docboard/900/600', aspect: 'aspect-[3/2]' },
  { id: 12, category: 'doctors', title: 'Ocular research scientist on microscope', url: 'https://picsum.photos/seed/docmicro/900/600', aspect: 'aspect-[3/2]' },

  // 3. FACILITIES
  { id: 27, category: 'facilities', title: 'Clinical Autorefraction Station', url: 'https://lh3.googleusercontent.com/d/1FDImTgYRDT8BTUwc5QvketqzUsXw6BLU', aspect: 'aspect-[3/2]' },
  { id: 28, category: 'facilities', title: 'High-Fidelity Corneal Mapping Platform', url: 'https://lh3.googleusercontent.com/d/1VuguPHGD_lCicAtyqGd65jGnKf3fgtzX', aspect: 'aspect-[3/4]' },
  { id: 13, category: 'facilities', title: 'High Frequency LASIK Laser Machine', url: 'https://picsum.photos/seed/faclasik/900/600', aspect: 'aspect-[3/2]' },
  { id: 14, category: 'facilities', title: 'Topographical Corneal Mapping Rig', url: 'https://picsum.photos/seed/faccorneal/900/1200', aspect: 'aspect-[3/4]' },
  { id: 15, category: 'facilities', title: 'Intraocular Pressure Testing Station', url: 'https://picsum.photos/seed/facpressure/900/605', aspect: 'aspect-[3/2]' },
  { id: 16, category: 'facilities', title: 'Advanced Optical Coherence Tomograph', url: 'https://picsum.photos/seed/facoct/900/500', aspect: 'aspect-[16/9]' },
  { id: 17, category: 'facilities', title: 'Refraction Autorefractor Console', url: 'https://picsum.photos/seed/facrefract/900/610', aspect: 'aspect-[3/2]' },
  { id: 18, category: 'facilities', title: 'Sterile Surgical Air Circulation Filter', url: 'https://picsum.photos/seed/facsurgical/900/600', aspect: 'aspect-[3/2]' },

  // 4. TREATMENTS
  { id: 29, category: 'treatments', title: 'Vance Laser Vision Correction Suite', url: 'https://lh3.googleusercontent.com/d/13koz0Dv8-6LEK751STLF_VAK5tyBvJJj', aspect: 'aspect-[3/2]' },
  { id: 19, category: 'treatments', title: 'Cataract micro-incision surgery prep', url: 'https://picsum.photos/seed/trcataract/900/1200', aspect: 'aspect-[3/4]' },
  { id: 20, category: 'treatments', title: 'Pediatric strabismus screening test', url: 'https://picsum.photos/seed/trtped/900/600', aspect: 'aspect-[3/2]' },
  { id: 21, category: 'treatments', title: 'Visual fields mapping review', url: 'https://picsum.photos/seed/trtmap/900/600', aspect: 'aspect-[3/2]' },
  { id: 22, category: 'treatments', title: 'Custom scleral contact lens alignment', url: 'https://picsum.photos/seed/trtlens/900/1180', aspect: 'aspect-[3/4]' },
  { id: 23, category: 'treatments', title: 'Retinal photo laser coagulation therapy', url: 'https://picsum.photos/seed/trtcoag/900/600', aspect: 'aspect-[3/2]' },
  { id: 24, category: 'treatments', title: 'Post-operative recovery vision check', url: 'https://picsum.photos/seed/trtpost/900/550', aspect: 'aspect-[16/9]' },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items
  const filteredItems = filter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const handleNext = React.useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return prevIndex === filteredItems.length - 1 ? 0 : prevIndex + 1;
    });
  }, [lightboxIndex, filteredItems.length]);

  const handlePrev = React.useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return prevIndex === 0 ? filteredItems.length - 1 : prevIndex - 1;
    });
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev]);

  return (
    <div className="relative min-h-screen bg-slate-50 flex flex-col justify-between">
      {/* Shared Header Navigation */}
      <Header />

      {/* Page Header Banner */}
      <div className="relative bg-slate-900 text-white pt-36 pb-16 overflow-hidden">
        {/* Background visual overlay */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff_0.8px,transparent_0.8px)] [background-size:16px_16px] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-910 from-slate-900 to-slate-900/30 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[10px] font-bold font-poppins text-sky-400 uppercase tracking-widest bg-sky-500/10 border border-sky-450/20 px-3.5 py-1.2 rounded-full inline-block">
            Virtual Hospital Tour
          </span>
          <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-4">
            Interactive Clinical Gallery
          </h1>
          <p className="text-slate-400 font-sans text-xs md:text-sm mt-3 max-w-xl mx-auto leading-relaxed">
            Take an intimate look at our sterile surgical fields, pediatric care spaces, advanced diagnostic machines, and specialist doctors.
          </p>
        </div>
      </div>

      {/* Main Filter & Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full pb-24">
        
        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setFilter(cat.value);
                setLightboxIndex(null); // close lightbox on filter switch to avoid index out of bound
              }}
              className={`px-5 py-2.5 rounded-full font-poppins text-xs font-semibold uppercase tracking-wide transition-all border ${
                filter === cat.value
                  ? 'bg-sky-600 border-sky-600 text-white shadow-md shadow-sky-650/10'
                  : 'bg-white border-slate-200 text-slate-655 text-slate-600 hover:border-slate-350 hover:bg-slate-50'
              } cursor-pointer`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Flex/Column Masonry Grid */}
        {filteredItems.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-slate-900 border border-slate-100 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Images with loading and optimization */}
                <div className={`relative w-full ${item.aspect}`}>
                  <Image
                    src={item.url}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-108"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle dark layout layout hover indicator state */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white z-10" />
                  
                  {/* Content revealed on Hover */}
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-sky-600/90 text-white p-2.5 rounded-xl shadow-md">
                      <ZoomIn className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 z-20 p-5 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-[9px] font-bold font-poppins uppercase tracking-wider text-sky-305 bg-sky-500/25 px-2.5 py-1 rounded">
                      {item.category}
                    </span>
                    <h3 className="font-poppins font-bold text-sm tracking-wide mt-2.5">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-100">
            <p className="text-slate-450 font-sans text-sm">No items found matching this diagnostic filter.</p>
          </div>
        )}

      </div>

      {/* Dynamic Pop-up Lightbox Dialog Overlay */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 bg-slate-950/98 backdrop-blur-md z-99 flex flex-col items-center justify-between p-4 md:p-8 animate-fadeIn">
          
          {/* Top Info Bar */}
          <div className="w-full max-w-6xl flex items-center justify-between text-white z-10">
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-bold font-poppins text-sky-400 uppercase tracking-widest">
                Viewing Photo {lightboxIndex + 1} of {filteredItems.length}
              </span>
              <h2 className="font-poppins font-bold text-sm md:text-base mt-1 text-slate-100">
                {filteredItems[lightboxIndex].title}
              </h2>
            </div>
            
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Large Image View Zone */}
          <div className="relative w-full max-w-4xl h-[65vh] md:h-[70vh] flex items-center justify-center my-4">
            
            {/* Previous Arrow Control */}
            <button
              onClick={handlePrev}
              className="absolute left-2 md:-left-16 p-3.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-10 cursor-pointer"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Core Image Rendering Frame */}
            <div className="relative w-full h-full max-h-[100%] max-w-[100%] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src={filteredItems[lightboxIndex].url}
                alt={filteredItems[lightboxIndex].title}
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Next Arrow Control */}
            <button
              onClick={handleNext}
              className="absolute right-2 md:-right-16 p-3.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-10 cursor-pointer"
              aria-label="Next Photo"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

          </div>

          {/* Bottom Information details footer */}
          <div className="max-w-lg text-center text-slate-400 text-xs z-10 pb-2">
            <p className="font-poppins uppercase text-[10px] tracking-wide text-sky-500 font-semibold mb-1">
              Category: {filteredItems[lightboxIndex].category}
            </p>
            <p className="opacity-75">Use left/right arrows on your desktop keyboard, or click the sides to navigate.</p>
          </div>

        </div>
      )}

      {/* Shared Footer layout */}
      <Footer />

      {/* Shared Floating CTA actions */}
      <FloatingButtons />
    </div>
  );
}
