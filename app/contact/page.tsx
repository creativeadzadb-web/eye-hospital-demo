'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { Send, CheckCircle2, ShieldAlert, PhoneCall, Building2, HelpCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'general',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        department: 'general',
        message: '',
      });
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="relative min-h-screen bg-slate-50 flex flex-col justify-between" id="contact-us-page">
      {/* Navigation Header */}
      <Header />

      <main className="w-full">
        {/* Page Header Banner */}
        <div className="relative bg-slate-900 text-white pt-36 pb-16 overflow-hidden">
          {/* Grid Background Pattern */}
          <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff_0.8px,transparent_0.8px)] [background-size:16px_16px] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-900/30 z-0" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeIn">
            <span className="text-[10px] font-bold font-poppins text-sky-400 uppercase tracking-widest bg-sky-500/10 border border-sky-450/20 px-3.5 py-1.2 rounded-full inline-block">
              24/7 Connectivity
            </span>
            <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-4">
              Contact Our Eye Specialists
            </h1>
            <p className="text-slate-400 font-sans text-xs md:text-sm mt-3 max-w-xl mx-auto leading-relaxed">
              Have questions about insurance coverage, clinical tests, surgical consults, or appointments? Send our team a message or call us instantly.
            </p>
          </div>
        </div>

        {/* Form and Map Grid container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Form Section */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/60" id="contact-form-container">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-sky-50 rounded-xl text-sky-600">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-lg text-slate-900">Send A Message</h3>
                  <p className="text-slate-500 text-xs mt-0.5">We typically reply within 2 hours during shift hours.</p>
                </div>
              </div>

              {isSubmitted ? (
                <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100/80 text-center flex flex-col items-center gap-4 animate-scaleUp">
                  <div className="p-3 bg-white text-emerald-600 rounded-full shadow-md">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-extrabold text-slate-900 text-sm">Message Sent Successfully!</h4>
                    <p className="text-slate-600 text-xs leading-relaxed mt-2.5">
                      Thank you for contacting Eye Hospital Demo Website. One of our ophthalmology coordinators will review your submission and contact you shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-2 w-full py-2.5 bg-slate-900 text-white rounded-xl font-poppins text-xs font-semibold hover:bg-slate-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-slate-700 text-xs font-semibold font-poppins mb-2">
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Johnathan Carter"
                      className="w-full px-4 py-3 bg-slate-50/80 hover:bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl text-slate-800 text-sm font-sans transition-colors outline-hidden font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-slate-700 text-xs font-semibold font-poppins mb-2">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-slate-50/80 hover:bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl text-slate-800 text-sm font-sans transition-colors outline-hidden font-medium"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-slate-700 text-xs font-semibold font-poppins mb-2">
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 bg-slate-50/80 hover:bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl text-slate-800 text-sm font-sans transition-colors outline-hidden font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-department" className="block text-slate-700 text-xs font-semibold font-poppins mb-2">
                      Inquiry Department
                    </label>
                    <select
                      id="contact-department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50/80 hover:bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl text-slate-800 text-sm font-sans transition-colors outline-hidden font-medium cursor-pointer"
                    >
                      <option value="general">General Inquiry & Info</option>
                      <option value="lasik">LASIK Vision Consultation</option>
                      <option value="cataract">Cataract Sutureless Surgery</option>
                      <option value="billing">Insurance & Billing Desk</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-slate-700 text-xs font-semibold font-poppins mb-2">
                      Inquiry Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your optical health concerns or inquiry details..."
                      className="w-full px-4 py-3 bg-slate-50/80 hover:bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl text-slate-800 text-sm font-sans transition-colors outline-hidden font-medium resize-none leading-relaxed"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-poppins font-bold text-sm tracking-wide shadow-md shadow-sky-600/10 hover:shadow-lg hover:shadow-sky-600/20 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="h-5 w-5 border-2 border-white/30 border-t-white animate-spin rounded-full inline-block"></span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* General FAQs/Help Column */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              {/* FAQ box */}
              <div className="bg-slate-900 text-slate-100 rounded-3xl p-8 border border-slate-800">
                <div className="flex items-center gap-2 mb-6">
                  <HelpCircle className="h-5 w-5 text-sky-400" />
                  <h4 className="font-poppins font-bold text-sm uppercase tracking-wider text-sky-400">Quick Clinical FAQ</h4>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="border-b border-slate-800 pb-4">
                    <p className="font-poppins font-semibold text-xs md:text-sm text-white">Do I need a referral to visit this eye hospital?</p>
                    <p className="text-slate-400 text-xs mt-1.5 leading-relaxed font-sans">
                      No, direct patient scheduling is open for outpatient checkups. Some specialty eye surgeries may require clinical reviews first.
                    </p>
                  </div>
                  <div className="border-b border-slate-800 pb-4">
                    <p className="font-poppins font-semibold text-xs md:text-sm text-white">Which health insurance networks are supported?</p>
                    <p className="text-slate-400 text-xs mt-1.5 leading-relaxed font-sans">
                      Our hospital is partnered with over 50 leading private health providers and major government medical insurance options. Contact our billing desk directly to confirm.
                    </p>
                  </div>
                  <div>
                    <p className="font-poppins font-semibold text-xs md:text-sm text-white">What is the recovery duration for cataract procedures?</p>
                    <p className="text-slate-400 text-xs mt-1.5 leading-relaxed font-sans">
                      With our modern micro-incision, sutureless surgeries, patients often report restored visual sharpness on the very next morning of recovery!
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency info card */}
              <div className="p-6 bg-amber-50 rounded-3xl border border-amber-100 flex items-start gap-4">
                <div className="p-3 bg-white text-amber-600 rounded-2xl shadow-sm shrink-0">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-xs md:text-sm text-amber-900 uppercase tracking-wide">Emergency Trauma Ward</h4>
                  <p className="text-slate-600 text-xs mt-1.5 leading-relaxed">
                    Our premium ocular trauma room is fully staffed <strong>24 hours a day, 7 days a week</strong> by an on-duty board-certified ophthalmology resident for foreign body eye injuries.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Full integrated maps section */}
        <div className="bg-slate-100 border-t border-slate-200">
          <ContactSection />
        </div>
      </main>

      {/* Footer & Floating CTAs */}
      <Footer />
      <FloatingButtons />
    </div>
  );
}
