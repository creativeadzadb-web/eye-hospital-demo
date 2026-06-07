'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, User, Phone, Clipboard, ArrowRight, CheckCircle2, Clock } from 'lucide-react';

interface AppointmentType {
  name: string;
  phone: string;
  service: string;
  date: string;
  message: string;
  timestamp: string;
}

export default function AppointmentSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Comprehensive Eye Checkup');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  
  const [bookings, setBookings] = useState<AppointmentType[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('ocucare_bookings');
        return saved ? JSON.parse(saved) : [];
      } catch (e) {
        console.error(e);
      }
    }
    return [];
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastSubmitted, setLastSubmitted] = useState<AppointmentType | null>(null);

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    const tempErrors: Record<string, string> = {};

    if (!name.trim()) tempErrors.name = 'Please provide your full name.';
    if (!phone.trim()) {
      tempErrors.phone = 'Phone number is required.';
    } else if (!/^[+]?[0-9\s-]{7,15}$/.test(phone.trim())) {
      tempErrors.phone = 'Please provide a valid diagnostic contact number.';
    }
    if (!date) tempErrors.date = 'Select your preferred clinical slot.';

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }

    setErrors({});
    const newAppointment: AppointmentType = {
      name,
      phone,
      service,
      date,
      message,
      timestamp: new Date().toLocaleString(),
    };

    const updatedBookings = [newAppointment, ...bookings];
    setBookings(updatedBookings);
    setLastSubmitted(newAppointment);
    setIsSubmitted(true);

    try {
      localStorage.setItem('ocucare_bookings', JSON.stringify(updatedBookings));
    } catch (err) {
      console.error(err);
    }

    // Reset Form Input
    setName('');
    setPhone('');
    setService('Comprehensive Eye Checkup');
    setDate('');
    setMessage('');
  };

  const handleClearLast = () => {
    setIsSubmitted(false);
    setLastSubmitted(null);
  };

  return (
    <section id="appointment" className="py-20 md:py-28 bg-white border-b border-slate-100 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Booking details and active schedules */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-xs font-bold font-poppins text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1.2 rounded-full mb-4">
              Schedule Visit
            </span>
            <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Get an Immediate Diagnostic Consult Today
            </h2>
            <p className="text-slate-500 font-sans text-xs md:text-sm leading-relaxed mt-4">
              Book your comprehensive eye checkup, cataracts consult, pediatric checkup, or refractive surgery review. No registration fee required beforehand.
            </p>

            <div className="mt-8 flex flex-col gap-4.5 w-full">
              <div className="flex gap-4 p-4.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="p-2.5 bg-sky-500 text-white rounded-lg shrink-0 h-10 w-10 flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-poppins font-bold text-sm text-slate-900">Pre-Diagnosis Assessment</h4>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed">Our clinical administrator will call back within 15 minutes to verify details.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="p-2.5 bg-teal-500 text-white rounded-lg shrink-0 h-10 w-10 flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-poppins font-bold text-sm text-slate-900">Choose Specialist</h4>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed">You will be matched with Dr. Vance or Dr. Chen based on your symptoms.</p>
                </div>
              </div>
            </div>

            {/* Display user booking list if populated */}
            {bookings.length > 0 && (
              <div className="mt-10 w-full animate-fadeIn">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-poppins font-bold text-xs uppercase tracking-wider text-slate-400">
                    Your Active Bookings ({bookings.length})
                  </h4>
                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to clear your booking history?')) {
                        localStorage.removeItem('ocucare_bookings');
                        setBookings([]);
                      }
                    }}
                    className="text-[10px] font-semibold text-slate-450 hover:text-rose-600 transition-colors cursor-pointer"
                  >
                    Clear History
                  </button>
                </div>
                <div className="max-h-[180px] overflow-y-auto flex flex-col gap-2.5 pr-2">
                  {bookings.map((b, i) => (
                    <div key={i} className="p-3 bg-sky-50/40 border border-sky-100/60 rounded-xl text-xs flex justify-between items-center">
                      <div>
                        <p className="font-poppins font-bold text-slate-900">{b.service}</p>
                        <p className="text-[10px] text-slate-500 mt-0.5">Date Preferred: <strong className="text-sky-700">{b.date}</strong></p>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-teal-650 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-100 uppercase tracking-wider">
                        <Clock className="w-2.5 h-2.5" /> Pending Call
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Interactive Form or Success Box */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-3xl bg-slate-50/50 border border-slate-100 shadow-xl shadow-slate-100/30">
              
              {!isSubmitted ? (
                <form onSubmit={handleBook} className="flex flex-col gap-5">
                  <h3 className="font-poppins font-bold text-lg text-slate-950 mb-1">
                    Book Your Consult
                  </h3>

                  {/* FIELD: Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-600 font-poppins" htmlFor="booking-name">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="h-4 w-4" />
                      </div>
                      <input
                        id="booking-name"
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`w-full font-sans text-sm pl-10 pr-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all ${
                          errors.name ? 'border-rose-455 border-rose-500' : 'border-slate-200'
                        }`}
                      />
                    </div>
                    {errors.name && <span className="text-[10px] font-semibold text-rose-600 mt-1">{errors.name}</span>}
                  </div>

                  {/* FIELD: Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-600 font-poppins" htmlFor="booking-phone">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="h-4 w-4" />
                      </div>
                      <input
                        id="booking-phone"
                        type="tel"
                        placeholder="+1 (555) 555-0199"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={`w-full font-sans text-sm pl-10 pr-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all ${
                          errors.phone ? 'border-rose-455 border-rose-500' : 'border-slate-200'
                        }`}
                      />
                    </div>
                    {errors.phone && <span className="text-[10px] font-semibold text-rose-600 mt-1">{errors.phone}</span>}
                  </div>

                  {/* FIELD: Service Dropdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-600 font-poppins" htmlFor="booking-service">
                        Required Service
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Clipboard className="h-4 w-4" />
                        </div>
                        <select
                          id="booking-service"
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full font-sans text-sm pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all appearance-none cursor-pointer"
                        >
                          <option>Comprehensive Eye Checkup</option>
                          <option>Cataract Surgery</option>
                          <option>LASIK Refractive Correction</option>
                          <option>Retina & Vitreous Care</option>
                          <option>Glaucoma Treatment</option>
                          <option>Pediatric Eye Care</option>
                        </select>
                      </div>
                    </div>

                    {/* FIELD: Date */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-600 font-poppins" htmlFor="booking-date">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Calendar className="h-4 w-4" />
                        </div>
                        <input
                          id="booking-date"
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className={`w-full font-sans text-sm pl-10 pr-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all ${
                            errors.date ? 'border-rose-455 border-rose-500' : 'border-slate-200'
                          }`}
                        />
                      </div>
                      {errors.date && <span className="text-[10px] font-semibold text-rose-600 mt-1">{errors.date}</span>}
                    </div>
                  </div>

                  {/* FIELD: Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-600 font-poppins" htmlFor="booking-message">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      id="booking-message"
                      rows={3}
                      placeholder="Mention any symptoms, e.g., flashes of light, blurred vision, eyestrain..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full font-sans text-sm px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all resize-none"
                    />
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 mt-2 bg-sky-600 hover:bg-sky-700 text-white font-poppins font-semibold text-sm rounded-xl shadow-lg shadow-sky-600/15 transition-all hover:scale-[1.01] cursor-pointer"
                  >
                    <span>Book Appointment</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              ) : (
                /* SUCCESS BOX */
                <div className="flex flex-col items-center justify-center text-center py-6 animate-scaleUp">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-500 border border-emerald-100 rounded-full flex items-center justify-center mb-5 shadow-inner">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  
                  <h3 className="font-poppins font-bold text-xl text-slate-950 mb-2">
                    Consultation Reserved Successfully!
                  </h3>
                  
                  <p className="text-slate-500 text-xs md:text-sm max-w-md mb-6 leading-relaxed">
                    Thank you, <strong className="text-slate-800">{lastSubmitted?.name}</strong>. Your choice of <strong>{lastSubmitted?.service}</strong> is recorded for <strong className="text-slate-800">{lastSubmitted?.date}</strong>. Our medical coordination team will contact you at <strong className="text-sky-600 font-poppins">{lastSubmitted?.phone}</strong> within 15 minutes to organize your visit.
                  </p>

                  <div className="p-4 bg-emerald-50/50 border border-emerald-100/60 rounded-2xl w-full text-left text-xs mb-6 font-sans">
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Appointment Receipt</p>
                    <div className="grid grid-cols-2 gap-y-2 gap-x-4 mt-3 text-slate-600">
                      <p><strong>Service:</strong> {lastSubmitted?.service}</p>
                      <p><strong>Slot Preferred:</strong> {lastSubmitted?.date}</p>
                      <p className="col-span-2"><strong>Patient Name:</strong> {lastSubmitted?.name}</p>
                    </div>
                  </div>

                  <button
                    onClick={handleClearLast}
                    className="px-5 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-poppins text-xs font-semibold shadow-sm transition-colors cursor-pointer"
                  >
                    Book Another Consult Slot
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
