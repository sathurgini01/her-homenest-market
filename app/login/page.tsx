"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { setActiveSession } from "@/lib/mock-data";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<"Customer" | "Homemaker" | "Admin">("Customer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setErrorMsg("Please provide your email address and credentials.");
      return;
    }

    // Set simulator user session
    setActiveSession({
      role: role,
      email: email.toLowerCase().trim(),
      homemakerId: role === "Homemaker" ? "hm_1" : undefined
    });

    // Notify other components if any
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("storage"));
    }

    // Redirect corresponding dashboards
    if (role === "Homemaker") {
      router.push("/homemaker-portal/dashboard");
    } else if (role === "Admin") {
      router.push("/admin/dashboard");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-paper flex flex-col font-sans text-charcoal">
      <Navbar />

      <main className="max-w-md mx-auto w-full px-4 py-16 flex-1 flex flex-col justify-center">
        
        {/* Brand Header */}
        <div className="text-center space-y-2 mb-8">
          <Link href="/" className="font-display text-3xl font-extrabold text-ink inline-block">
            Her HomeNest
          </Link>
          <p className="text-xs text-charcoal/50 uppercase font-mono tracking-wider">
            Access Colombo Seller &amp; Customer Portals
          </p>
        </div>

        {/* Core Entry Form */}
        <div className="bg-white p-8 rounded-3xl border-2 border-charcoal/5 shadow-md space-y-6">
          <h2 className="font-display text-2xl font-bold text-charcoal text-center">
            Sign In to Your Nest
          </h2>

          {errorMsg && (
            <div className="bg-clay/10 border border-clay/20 text-clay text-xs p-2.5 rounded-lg font-mono">
              ⚠️ {errorMsg}
            </div>
          )}

          {/* TWO PRIMARY CHOICE CARDS (RATHER THAN DROPDOWN) */}
          <div className="space-y-2.5">
            <span className="text-xs font-semibold text-charcoal/50 uppercase font-mono block">Choose your access path:</span>
            <div className="grid grid-cols-2 gap-3">
              
              <button
                type="button"
                onClick={() => {
                  setRole("Customer");
                  setEmail("customer@homenest.lk");
                }}
                className={`py-4 px-3 rounded-2xl border-2 text-center transition-all flex flex-col items-center gap-1.5 cursor-pointer ${
                  role === "Customer"
                    ? "bg-paper/50 border-ink shadow"
                    : "bg-white border-charcoal/10 hover:border-charcoal/30"
                }`}
              >
                <span className="text-2xl">👥</span>
                <span className="text-xs font-bold text-charcoal">I&apos;m a Customer</span>
                <span className="text-[9px] text-charcoal/50 font-normal">Browse &amp; Review</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setRole("Homemaker");
                  setEmail("fatheema@homenest.lk");
                }}
                className={`py-4 px-3 rounded-2xl border-2 text-center transition-all flex flex-col items-center gap-1.5 cursor-pointer ${
                  role === "Homemaker"
                    ? "bg-paper/50 border-ink shadow"
                    : "bg-white border-charcoal/10 hover:border-charcoal/30"
                }`}
              >
                <span className="text-2xl">👩🌾</span>
                <span className="text-xs font-bold text-charcoal">I&apos;m a Homemaker</span>
                <span className="text-[9px] text-charcoal/50 font-normal">My Shop &amp; Listings</span>
              </button>

            </div>

            {/* Hidden admin trigger for simulation */}
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setRole("Admin");
                  setEmail("admin@herhomenest.lk");
                }}
                className="text-[9px] font-mono text-charcoal/30 hover:text-clay hover:underline bg-transparent"
              >
                🛠️ Admin Simulator Entrance
              </button>
            </div>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            
            <div className="space-y-1">
              <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono">Email / Phone</label>
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={role === "Customer" ? "customer@homenest.lk" : "fatheema@homenest.lk"}
                className="w-full bg-paper/50 rounded-lg py-2.5 px-3 text-sm text-charcoal border border-charcoal/15 focus:outline-none focus:border-ink transition-colors font-mono"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono">Password</label>
                <a href="#" className="text-[10px] text-clay hover:underline font-mono">Forgot?</a>
              </div>
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
              Enter My Dashboard
            </button>
          </form>

          <p className="text-center text-xs text-charcoal/60 pt-2 font-sans">
            Don&apos;t have a business listing yet?{" "}
            <Link href="/register" className="text-clay font-bold hover:underline">
              Register here
            </Link>
          </p>
        </div>

      </main>

      <Footer />
    </div>
  );
}
