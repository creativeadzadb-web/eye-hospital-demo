'use client';

import React from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';

export default function FloatingButtons() {
  const whatsappNumber = '15555553030'; // Sample premium number
  const messageText = encodeURIComponent("Hello! I'm interested in booking an appointment or checking available services at Eye Hospital Demo Website.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${messageText}`;
  const phoneUrl = 'tel:+18005553030';

  return (
    <div className="fixed bottom-6 right-6 z-45 flex flex-col gap-3.5 items-end">
      {/* WhatsApp Floating CTA */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-4 md:px-5 md:py-3.5 shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-108 hover:-translate-y-1"
        title="Chat on WhatsApp"
      >
        <span className="max-w-0 overflow-hidden font-poppins font-medium text-xs tracking-wide transition-all duration-300 group-hover:max-w-[150px] whitespace-nowrap">
          Chat with Us
        </span>
        <MessageCircle className="h-5 w-5 shrink-0" />
      </a>

      {/* Call Floating CTA */}
      <a
        href={phoneUrl}
        className="group flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white rounded-full p-4 md:px-5 md:py-3.5 shadow-lg shadow-sky-600/20 transition-all duration-300 hover:scale-108 hover:-translate-y-1"
        title="Call Eye Hospital"
      >
        <span className="max-w-0 overflow-hidden font-poppins font-medium text-xs tracking-wide transition-all duration-300 group-hover:max-w-[150px] whitespace-nowrap">
          Call Emergency Care
        </span>
        <PhoneCall className="h-5 w-5 shrink-0" />
      </a>
    </div>
  );
}
