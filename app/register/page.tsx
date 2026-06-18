"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { setActiveSession } from "@/lib/mock-data";

export default function RegisterPage() {
  const router = useRouter();
  const [role, setRole] = useState<"Customer" | "Homemaker">("Customer");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = phone.replace(/[^0-9]/g, "");
    if (!name.trim() || !email.trim() || password.length < 8) {
      setErrorMsg("Enter your name, email and a password with at least 8 characters.");
      return;
    }
    if (!/^94\d{9}$/.test(cleanPhone)) {
      setErrorMsg("Enter a valid Sri Lankan mobile number using country code 94.");
      return;
    }

    // Register active user
    setActiveSession({
      role: role,
      email: email.toLowerCase().trim(),
      homemakerId: role === "Homemaker" ? "hm_temp" : undefined
    });

    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("storage"));
    }

    if (role === "Homemaker") {
      // Homemakers are routed to the onboarding form
      router.push("/homemaker-portal/onboarding");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-paper flex flex-col font-sans text-charcoal">
      <Navbar />

      <main className="max-w-md mx-auto w-full px-4 py-16 flex-1 flex flex-col justify-center">
        
        <div className="text-center space-y-2 mb-8">
          <Link href="/" className="font-display text-3xl font-extrabold text-ink inline-block">
            Her HomeNest
          </Link>
          <p className="text-xs text-charcoal/50 uppercase font-mono tracking-wider">
            Register and Join Colombo&apos;s Nest of Talents
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border-2 border-charcoal/5 shadow-md space-y-6">
          <h2 className="font-display text-2xl font-bold text-charcoal text-center">
            Create Free Account
          </h2>

          {errorMsg && (
            <div className="bg-clay/10 border border-clay/20 text-clay text-xs p-2.5 rounded-lg font-mono">
              ⚠️ {errorMsg}
            </div>
          )}

          {/* TWO PRIMARY ACCESS CHOICES */}
          <div className="space-y-2.5">
            <span className="text-xs font-semibold text-charcoal/50 uppercase font-mono block">Setup your profile role:</span>
            <div className="grid grid-cols-2 gap-3">
              
              <button
                type="button"
                onClick={() => setRole("Customer")}
                className={`py-4 px-3 rounded-2xl border-2 text-center transition-all flex flex-col items-center gap-1.5 cursor-pointer ${
                  role === "Customer"
                    ? "bg-paper/50 border-ink shadow"
                    : "bg-white border-charcoal/10 hover:border-charcoal/30"
                }`}
              >
                <span className="text-2xl">👥</span>
                <span className="text-xs font-bold text-charcoal">I&apos;m a Customer</span>
                <span className="text-[9px] text-charcoal/50 font-normal">Support Colombo Shops</span>
              </button>

              <button
                type="button"
                onClick={() => setRole("Homemaker")}
                className={`py-4 px-3 rounded-2xl border-2 text-center transition-all flex flex-col items-center gap-1.5 cursor-pointer ${
                  role === "Homemaker"
                    ? "bg-paper/50 border-ink shadow"
                    : "bg-white border-charcoal/10 hover:border-charcoal/30"
                }`}
              >
                <span className="text-2xl">👩🌾</span>
                <span className="text-xs font-bold text-charcoal">I&apos;m a Homemaker</span>
                <span className="text-[9px] text-charcoal/50 font-normal">Onboard for approvals</span>
              </button>

            </div>
          </div>

          <form onSubmit={handleRegisterSubmit} className="space-y-4 font-sans text-xs">
            
            <div className="space-y-1">
              <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono">Your Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Fatheema Rahaman"
                className="w-full bg-paper/50 rounded-lg py-2.5 px-3 text-sm text-charcoal border border-charcoal/15 focus:outline-none focus:border-ink transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. fatheema@gmail.com"
                  className="w-full bg-paper/50 rounded-lg py-2.5 px-3 text-sm text-charcoal border border-charcoal/15 focus:outline-none focus:border-ink transition-colors font-mono"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono">Mobile / WhatsApp</label>
                <input
                  type="text"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +94771234567"
                  className="w-full bg-paper/50 rounded-lg py-2.5 px-3 text-sm text-charcoal border border-charcoal/15 focus:outline-none focus:border-ink transition-colors font-mono"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono">Set Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-paper/50 rounded-lg py-2.5 px-3 text-sm text-charcoal border border-charcoal/15 focus:outline-none focus:border-ink transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-ink hover:bg-ink/90 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all cursor-pointer text-center"
            >
              {role === "Homemaker" ? "Create Account & Start Onboarding ➔" : "Complete Registration"}
            </button>
          </form>

          <p className="rounded-lg bg-paper p-3 text-[10px] leading-relaxed text-charcoal/55">
            Local prototype notice: registration data is stored only in this browser. A public launch
            requires encrypted server-side accounts, email or phone verification and consent records.
          </p>

          <p className="text-center text-xs text-charcoal/60 pt-2 font-sans">
            Already have an account?{" "}
            <Link href="/login" className="text-clay font-bold hover:underline">
              Login here
            </Link>
          </p>
        </div>

      </main>

      <Footer />
    </div>
  );
}
