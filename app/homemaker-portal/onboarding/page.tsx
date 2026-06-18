"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CATEGORIES, COLOMBO_AREAS, getActiveSession, getStoredHomemakers, saveHomemakers, setActiveSession } from "@/lib/mock-data";
import { Category, Homemaker } from "@/lib/types";

export default function OnboardingPage() {
  const router = useRouter();
  const [businessName, setBusinessName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [selectedArea, setSelectedArea] = useState(COLOMBO_AREAS[0]);
  const [bio, setBio] = useState("");
  const [whatsapp, setWhatsapp] = useState("9477");
  const [startingPrice, setStartingPrice] = useState(1000);
  const [onboardingSuccess, setOnboardingSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (getActiveSession().role !== "Homemaker") {
      router.replace("/register");
    }
  }, [router]);

  const handleSubmitOnboarding = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanWhatsapp = whatsapp.replace(/[^0-9]/g, "");
    if (!businessName.trim() || !ownerName.trim() || bio.trim().length < 60) {
      setErrorMessage("Complete the business details and add a useful description of at least 60 characters.");
      return;
    }
    if (!/^94\d{9}$/.test(cleanWhatsapp)) {
      setErrorMessage("Enter a valid Sri Lankan WhatsApp number using country code 94.");
      return;
    }

    // Set up a structured new homemaker store
    const newHomemaker: Homemaker = {
      id: `hm_${Date.now()}`,
      businessName: businessName.trim(),
      ownerFirstName: ownerName.trim(),
      ownerEmail: getActiveSession().email || undefined,
      category: selectedCategory,
      area: selectedArea,
      bio: bio.trim(),
      photos: [
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80"
      ],
      rating: 0,
      reviewCount: 0,
      priceFrom: Number(startingPrice),
      verified: false, // Hidden until admin approval (FR-3)
      featured: false,
      availableToday: true,
      whatsappNumber: cleanWhatsapp,
      listings: [],
      reviews: []
    };

    const currentList = getStoredHomemakers();
    const updatedList = [newHomemaker, ...currentList];
    saveHomemakers(updatedList);

    // Update active session homemaker reference ID
    const currentSession = getActiveSession();
    setActiveSession({
      role: "Homemaker",
      email: currentSession.email,
      homemakerId: newHomemaker.id,
    });
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("storage"));
    }

    setErrorMessage("");
    setOnboardingSuccess(true);
    setTimeout(() => {
      router.push("/homemaker-portal/dashboard");
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-paper flex flex-col font-sans text-charcoal">
      <Navbar />

      <main className="max-w-xl mx-auto w-full px-4 py-12 flex-1">
        <div className="bg-white p-8 rounded-3xl border-2 border-charcoal/5 shadow-md space-y-6">
          
          <div className="text-center space-y-1">
            <span className="text-2xl">🌱</span>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink">
              Onboard Your Home Business
            </h1>
            <p className="text-xs text-charcoal/50 font-mono uppercase tracking-wider">
              Step 2: Submit Profile for Admin Verification
            </p>
          </div>

          {onboardingSuccess ? (
            <div className="bg-betel/15 border border-betel/20 text-betel text-xs p-4 rounded-xl text-center space-y-2">
              <span className="text-3xl block">🎉</span>
              <p className="font-bold">Registration Submitted Successfully!</p>
              <p className="font-sans text-charcoal/70">
                LKR catalog saved. Your business is pending verification and is hidden from public search until an admin reviews your details.
              </p>
              <p className="font-mono text-[9px] text-charcoal/40 animate-pulse">
                Redirecting you to seller cabinet...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmitOnboarding} className="space-y-4 font-sans text-xs">
              {errorMessage && (
                <div className="rounded-xl border border-clay/25 bg-clay/10 p-3 text-xs text-clay" role="alert">
                  {errorMessage}
                </div>
              )}
              
              <div className="space-y-1">
                <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono">Business Brand Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kumari's Spiced Lunch Feasts"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full bg-paper/50 rounded-lg py-2.5 px-3 text-sm text-charcoal border border-charcoal/15 focus:outline-none focus:border-ink"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono">Owner First Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kumari"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    className="w-full bg-paper/50 rounded-lg py-2.5 px-3 text-sm text-charcoal border border-charcoal/15 focus:outline-none focus:border-ink"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono">WhatsApp Number (Colombo)</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 94771234567"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full bg-paper/50 rounded-lg py-2.5 px-3 text-sm text-charcoal border border-charcoal/15 focus:outline-none focus:border-ink font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono">Core Specialization</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value as Category)}
                    className="w-full bg-paper/50 rounded-lg py-2.5 px-3 text-sm text-charcoal border border-charcoal/15 focus:outline-none focus:border-ink cursor-pointer"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono">Colombo Hub Locality</label>
                  <select
                    value={selectedArea}
                    onChange={(e) => setSelectedArea(e.target.value)}
                    className="w-full bg-paper/50 rounded-lg py-2.5 px-3 text-sm text-charcoal border border-charcoal/15 focus:outline-none focus:border-ink cursor-pointer"
                  >
                    {COLOMBO_AREAS.map((area) => (
                      <option key={area} value={area}>
                        📍 {area}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono">Starting/Base Item Price (LKR)</label>
                <input
                  type="number"
                  required
                  min={100}
                  value={startingPrice}
                  onChange={(e) => setStartingPrice(Number(e.target.value))}
                  className="w-full bg-paper/50 rounded-lg py-2.5 px-3 text-sm text-charcoal border border-charcoal/15 focus:outline-none focus:border-ink font-mono"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono">Sincere Bio Pitch (In Your Own Voice)</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell Colombo neighbors about your years of experience, spices used, delivery options, or alteration fittings detail..."
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full bg-paper/50 rounded-lg py-2 px-3 text-xs text-charcoal border border-charcoal/15 focus:outline-none focus:border-ink leading-relaxed"
                />
              </div>

              <div className="bg-paper p-4 rounded-xl border border-charcoal/10">
                <h4 className="text-xs font-bold text-ink mb-0.5">🔒 Colombo Trust Pledge</h4>
                <p className="text-[10px] text-charcoal/60 leading-normal font-sans">
                  The NIC identification or passport verification requested by team admins separately ensures secure transaction accountability. We never show your private credentials to general customers.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-ink hover:bg-ink/90 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-colors cursor-pointer text-center"
              >
                Submit Profile for Admin Verification ➔
              </button>
            </form>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
