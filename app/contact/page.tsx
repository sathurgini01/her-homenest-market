"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim() && message.trim()) {
      const subject = encodeURIComponent(`Her HomeNest enquiry from ${name.trim()}`);
      const body = encodeURIComponent(`${message.trim()}\n\nReply to: ${email.trim()}`);
      window.location.href = `mailto:assist@herhomenest.lk?subject=${subject}&body=${body}`;
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4400);
    }
  };

  return (
    <div className="min-h-screen bg-paper flex flex-col font-sans text-charcoal">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1 space-y-12">
        <div className="text-center space-y-3">
          <span className="font-mono text-xs text-clay font-bold uppercase tracking-widest block">Colombo Desk</span>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-ink">
            Keep in Touch with Our Admins
          </h1>
          <p className="text-xs sm:text-sm text-charcoal/60 max-w-md mx-auto">
            Need help setting up your WhatsApp business links? Or want to report a fake review? Send us an inquiry!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Quick contact Details */}
          <div className="md:col-span-5 bg-white p-6 rounded-2xl border border-charcoal/5 shadow-sm space-y-6">
            <h3 className="font-display text-lg font-bold text-charcoal">Platform Operators</h3>
            
            <div className="space-y-4 text-xs font-mono">
              <div className="flex items-start gap-3">
                <span className="text-lg">📍</span>
                <div>
                  <h4 className="font-bold text-charcoal/80 uppercase">Main Office Hub</h4>
                  <p className="font-sans text-charcoal/60 mt-0.5 font-medium">Bambalapitiya Plaza, Galle Road, Colombo 04</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-lg">📞</span>
                <div>
                  <h4 className="font-bold text-charcoal/80 uppercase">Mobile Helpline</h4>
                  <p className="font-sans text-charcoal/60 mt-0.5 font-medium">+94 77 123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-lg">✉️</span>
                <div>
                  <h4 className="font-bold text-charcoal/80 uppercase">Email Support</h4>
                  <p className="font-sans text-charcoal/60 mt-0.5 font-medium">assist@herhomenest.lk</p>
                </div>
              </div>
            </div>

            <div className="bg-paper p-4 rounded-xl border border-charcoal/5">
              <h4 className="text-xs font-bold text-ink mb-1">👩 Lakhs of love for homemakers</h4>
              <p className="text-[10px] text-charcoal/60 leading-relaxed font-sans">
                Our helpline operates 9:00 AM to 6:00 PM Colombo time, assisting less technically-inclined elders list their delicious hopper recipes or alteration centers!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="md:col-span-7 bg-white p-6 rounded-2xl border border-charcoal/10 shadow-sm space-y-4">
            <h3 className="font-display text-xl font-bold text-charcoal">Send an Inquiry Notice</h3>
            
            {success && (
              <div className="bg-betel/15 border border-betel/20 text-betel text-xs p-3 rounded-lg font-mono">
                Your email app has been opened with this enquiry. Please press Send there to deliver it.
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kumari Perera"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-paper/50 rounded-lg py-2 px-3 text-sm text-charcoal border border-charcoal/15 focus:outline-none focus:border-ink transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. kumari@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-paper/50 rounded-lg py-2 px-3 text-sm text-charcoal border border-charcoal/15 focus:outline-none focus:border-ink transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono">Message Notice</label>
              <textarea
                rows={5}
                required
                placeholder="Let us know what details or assistance you are seeking..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-paper/50 rounded-lg py-2 px-3 text-xs text-charcoal border border-charcoal/15 focus:outline-none focus:border-ink transition-colors"
              />
            </div>

            <button
              type="submit"
              className="bg-ink hover:bg-ink/90 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-lg transition-colors w-full cursor-pointer text-center"
            >
              Submit Notice to Team
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
