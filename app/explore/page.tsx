"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CATEGORIES, COLOMBO_AREAS, getStoredHomemakers } from "@/lib/mock-data";
import { Homemaker } from "@/lib/types";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StitchDivider } from "@/components/StitchDivider";
import { HomemakerCard } from "@/components/HomemakerCard";

function ExploreContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Search/Filters State
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "All");
  const [selectedArea, setSelectedArea] = useState(searchParams.get("area") || "All");
  const [minRating, setMinRating] = useState(0);
  const [onlyAvailableToday, setOnlyAvailableToday] = useState(false);
  
  const [allSellers, setAllSellers] = useState<Homemaker[]>([]);
  const [filteredSellers, setFilteredSellers] = useState<Homemaker[]>([]);

  // Update states if query params change
  useEffect(() => {
    const handleSync = () => {
      setSearchQuery(searchParams.get("search") || "");
      setSelectedCategory(searchParams.get("category") || "All");
      setSelectedArea(searchParams.get("area") || "All");
    };
    setTimeout(handleSync, 0);
  }, [searchParams]);

  useEffect(() => {
    // Read from localStorage (dynamic reactive database)
    const handleSync = () => {
      const stored = getStoredHomemakers();
      setAllSellers(stored);
    };
    setTimeout(handleSync, 0);
  }, []);

  // Filter application logic
  useEffect(() => {
    let result = [...allSellers];

    // Search query matching (matches business name, owner name, bio, or listings)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (h) =>
          h.businessName.toLowerCase().includes(query) ||
          h.ownerFirstName.toLowerCase().includes(query) ||
          h.bio.toLowerCase().includes(query) ||
          h.listings.some(
            (l) =>
              l.name.toLowerCase().includes(query) ||
              l.description.toLowerCase().includes(query)
          )
      );
    }

    // Category filter
    if (selectedCategory && selectedCategory !== "All") {
      result = result.filter((h) => h.category === selectedCategory);
    }

    // Colombo Neighborhood filter
    if (selectedArea && selectedArea !== "All") {
      result = result.filter((h) => h.area === selectedArea);
    }

    // Minimum rating filter
    if (minRating > 0) {
      result = result.filter((h) => h.rating >= minRating);
    }

    // Available today filter
    if (onlyAvailableToday) {
      result = result.filter((h) => h.availableToday);
    }

    setTimeout(() => {
      setFilteredSellers(result);
    }, 0);
  }, [searchQuery, selectedCategory, selectedArea, minRating, onlyAvailableToday, allSellers]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedArea("All");
    setMinRating(0);
    setOnlyAvailableToday(false);
    router.push("/explore");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
      
      {/* Search Header */}
      <div className="mb-8">
        <span className="font-mono text-xs text-clay font-bold uppercase tracking-wider">Search Portal</span>
        <h1 className="font-display text-4xl font-bold text-ink mt-1">
          Explore Colombo Neighbors
        </h1>
        <p className="text-xs sm:text-sm text-charcoal/60 mt-1 max-w-2xl font-sans">
          Discover hand-selected women-led kitchens, tailoring workshops, and tutoring centers across Sri Lanka. Message directly over WhatsApp to custom-tailor your requests.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* FILTERS PANEL CORES */}
        <div className="lg:col-span-1 bg-white p-6 rounded-2xl border border-charcoal/5 h-fit shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-dashed border-charcoal/10">
            <h2 className="text-sm font-bold uppercase tracking-wider font-mono text-charcoal flex items-center gap-1.5">
              <span>🎛️ Filter Roster</span>
            </h2>
            <button
              onClick={handleResetFilters}
              className="text-[10px] font-bold uppercase tracking-wider text-clay hover:underline bg-transparent"
            >
              Reset All
            </button>
          </div>

          {/* Search Keywords Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono tracking-wider">
              Keyword
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search words..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-paper/50 rounded-lg py-2 px-3 pl-8 text-sm text-charcoal placeholder-charcoal/40 border border-charcoal/15 focus:outline-none focus:border-ink transition-colors"
              />
              <span className="absolute left-2.5 top-2.5 text-charcoal/40">
                🔍
              </span>
            </div>
          </div>

          {/* Category Dropdown */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono tracking-wider">
              Specialized Service
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-paper/50 rounded-lg py-2 px-3 text-sm text-charcoal border border-charcoal/15 focus:outline-none focus:border-ink transition-colors cursor-pointer"
            >
              <option value="All">All Categories ({CATEGORIES.length})</option>
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Area / Neighborhood Dropdown */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono tracking-wider">
              Colombo Locality
            </label>
            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="w-full bg-paper/50 rounded-lg py-2 px-3 text-sm text-charcoal border border-charcoal/15 focus:outline-none focus:border-ink transition-colors cursor-pointer"
            >
              <option value="All">All Neighborhoods ({COLOMBO_AREAS.length})</option>
              {COLOMBO_AREAS.map((area) => (
                <option key={area} value={area}>
                  📍 {area}
                </option>
              ))}
            </select>
          </div>

          {/* Minimum Rating Slider or Chips */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono tracking-wider block">
              Min Rating ({minRating === 0 ? "Any" : `${minRating}+ ⭐`})
            </label>
            <div className="flex gap-1.5">
              {[0, 4, 4.5, 4.8].map((rate) => (
                <button
                  key={rate}
                  onClick={() => setMinRating(rate)}
                  className={`flex-1 py-1 px-2 rounded-md font-mono text-[10px] border transition-all text-center cursor-pointer ${
                    minRating === rate
                      ? "bg-ink text-paper border-ink font-bold"
                      : "bg-paper/40 text-charcoal/70 border-charcoal/10 hover:bg-paper/80"
                  }`}
                >
                  {rate === 0 ? "Any" : `${rate}+`}
                </button>
              ))}
            </div>
          </div>

          {/* Available check slider toggle */}
          <div className="pt-4 border-t border-dashed border-charcoal/10">
            <label className="flex items-center gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={onlyAvailableToday}
                onChange={(e) => setOnlyAvailableToday(e.target.checked)}
                className="w-4.5 h-4.5 text-betel bg-paper border-charcoal/15 rounded focus:ring-0 cursor-pointer"
              />
              <span className="text-xs font-semibold text-charcoal/80">
                ⚡ Only Available Today / Open
              </span>
            </label>
          </div>
        </div>

        {/* RESULTS GRID OUTLET */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center justify-between text-xs font-mono text-charcoal/60">
            <span>SHOWING {filteredSellers.length} HOMEMAKER OUTLETS</span>
            <span>COLOMBO REGION, LK</span>
          </div>

          {filteredSellers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredSellers.map((seller) => (
                <HomemakerCard key={seller.id} homemaker={seller} />
              ))}
            </div>
          ) : (
            <div className="bg-white p-12 text-center rounded-2xl border-2 border-dashed border-charcoal/10 max-w-xl mx-auto space-y-4">
              <div className="text-4xl">🏜️</div>
              <h3 className="font-display text-lg font-bold text-charcoal">
                No Shops Found matching the Selected Filters
              </h3>
              <p className="text-xs text-charcoal/50 leading-relaxed max-w-sm mx-auto font-sans">
                Adjust or clear your custom filters to discover nearby Colombo home bakers, custom dressmakers, or teachers.
              </p>
              <button
                onClick={handleResetFilters}
                className="bg-turmeric text-ink font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-lg hover:bg-turmeric/95 transition-all"
              >
                Clear Filters &amp; Reload
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-paper flex flex-col">
      <Navbar />
      <Suspense fallback={
        <div className="flex-1 flex items-center justify-center py-20 font-mono text-xs text-charcoal/60">
          Loading Colombo shop filters...
        </div>
      }>
        <ExploreContent />
      </Suspense>
      <Footer />
    </div>
  );
}
