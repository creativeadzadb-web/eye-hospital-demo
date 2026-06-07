import React from 'react';
import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import StatisticsStrip from '@/components/StatisticsStrip';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import DoctorsSection from '@/components/DoctorsSection';
import Testimonials from '@/components/Testimonials';
import AppointmentSection from '@/components/AppointmentSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function Page() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Dynamic Sticky Header Navigation */}
      <Header />

      <main className="w-full">
        {/* Full-width Hero Slider */}
        <HeroSlider />

        {/* Floating metric numbers on top of Hero */}
        <StatisticsStrip />

        {/* Core Clinical Sections */}
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <DoctorsSection />
        <Testimonials />
        <AppointmentSection />
        <ContactSection />
      </main>

      {/* Structured Footer */}
      <Footer />

      {/* Floating CTA Buttons (WhatsApp and Phone) */}
      <FloatingButtons />
    </div>
  );
}
