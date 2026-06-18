"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CATEGORIES, getStoredHomemakers } from "@/lib/mock-data";
import { Homemaker } from "@/lib/types";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StitchDivider } from "@/components/StitchDivider";
import { VerifiedBadge } from "@/components/VerifiedBadge";
import { HomemakerCard } from "@/components/HomemakerCard";
import { CheckCircle, MessageCircle, MapPin } from "lucide-react";

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [featuredSellers, setFeaturedSellers] = useState<Homemaker[]>([]);

  useEffect(() => {
    // Keep local storage synced on mount
    const handleSync = () => {
      const all = getStoredHomemakers();
      setFeaturedSellers(all.filter((h) => h.featured));
    };
    setTimeout(handleSync, 0);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/explore?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/explore");
    }
  };

  const handleCategoryClick = (category: string) => {
    router.push(`/explore?category=${encodeURIComponent(category)}`);
  };

  return (
    <div className="min-h-screen bg-paper flex flex-col selection:bg-turmeric/30 selection:text-ink">
      {/* NAVBAR — STICKY HEADER WITH NAVIGATION & AUTH */}
      <Navbar />

      {/* SPECIAL CURATED HERO — EXCLUSIVE MOSAIC OVERLAPS WITH STITCH CORE */}
      <section
        className="text-ink relative pt-16 pb-24 overflow-hidden border-b border-charcoal/10"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay to keep text readable over the screenshot */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-white/10 to-paper/20 pointer-events-none" />
        
        {/* Soft elegant ambient background glowing shadows */}
        <div className="absolute top-10 -left-16 w-96 h-96 rounded-full bg-turmeric/10 blur-[100px] select-none pointer-events-none z-0" />
        <div className="absolute -bottom-20 right-10 w-[500px] h-[500px] rounded-full bg-clay/5 blur-[120px] select-none pointer-events-none z-0" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-betel/5 blur-[90px] select-none pointer-events-none z-0" />
        
        {/* Editorial fine grid or dots pattern for background design */}
        <div className="absolute inset-0 bg-[radial-gradient(#2b2622_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] select-none pointer-events-none z-0" />
        
        {/* Background clothesline stitch thread */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 select-none opacity-20 pointer-events-none translate-y-[-50px] z-0">
          <svg className="w-full h-4 text-ink" viewBox="0 0 1200 16" fill="none">
            <path
              d="M0 8 C 300 16, 600 0, 900 12 C 1050 16, 1150 8, 1200 8"
              stroke="currentColor"
              strokeWidth="2.5"
              className="animate-stitch-draw"
              strokeDasharray="6 6"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side text column */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-paper border border-charcoal/15 rounded-full px-4 py-1.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-clay animate-pulse"></span>
                <span className="font-mono text-[10px] tracking-widest text-ink uppercase font-semibold">
                  Colombo Homemaker Marketplace
                </span>
              </div>

              {/* Spectacular Newsreader title */}
              <h1 className="font-display text-5xl sm:text-6xl font-medium tracking-tight text-ink leading-[1.05]">
                Where Colombo&apos;s <br />
                <span className="italic text-clay font-normal">Home Skill</span> Meets <br />
                Your Comfort.
              </h1>

              <p className="text-charcoal/80 text-sm sm:text-base max-w-lg leading-relaxed font-sans">
                A warm digital market empowering local homemakers — specializing in pristine catering, custom tailoring, artisan baking, handmade accessories &amp; bags, and small-group tutoring — directly from their nests to your doorstep. Contact sellers directly on WhatsApp.
              </p>

              {/* Anchor Search Bar over this section */}
              <form onSubmit={handleSearchSubmit} className="mt-8 max-w-md relative z-20">
                <div className="bg-white rounded-xl p-2 shadow-[0_20px_40px_-5px_rgba(43,38,34,0.12)] border border-charcoal/10 flex items-center hover:border-turmeric/40 transition-all duration-300">
                  <div className="pl-3 text-ink/75">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for biryani, crochet bags, custom bakes..."
                    className="w-full pl-3 pr-2 py-3 bg-transparent text-charcoal placeholder-charcoal/40 text-sm focus:outline-none focus:ring-0"
                  />
                  <button
                    type="submit"
                    className="bg-ink hover:bg-ink/90 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-sm transition-all duration-150"
                  >
                    Search
                  </button>
                </div>
                <p className="text-[10px] font-mono text-charcoal/50 mt-2 pl-2">
                  Try &quot;biryani&quot;, &quot;frock stitching&quot;, or &quot;CBP&quot;
                </p>
              </form>

            </div>

            {/* Right side Curated Mosaic Card Stack (like photos pinned to line in Image 3) */}
            <div className="lg:col-span-6 relative h-[420px] sm:h-[480px] hidden sm:flex items-center justify-center select-none pointer-events-none">
              
              {/* Photo 1: Home-cooked feast, rotated left */}
              <div className="absolute top-12 left-8 w-56 bg-white p-3 shadow-[0_22px_45px_-8px_rgba(43,38,34,0.15)] rounded-xl border border-charcoal/10 card-tilt-1 pointer-events-auto z-10 hover:shadow-[0_25px_50px_0_rgba(43,38,34,0.22)]">
                <div className="aspect-[4/3] w-full relative overflow-hidden rounded-lg bg-charcoal/10">
                  <img
                    src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&auto=format&fit=crop&q=80"
                    alt="Wood-fired Chicken Biryani"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="mt-3 text-center">
                  <h4 className="font-display text-sm font-semibold text-charcoal">Fatheema&apos;s Biryani</h4>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-turmeric mt-0.5">Wellawatte • 5.0 ⭐</p>
                </div>
              </div>

              {/* Photo 2: Tailoring, rotated right, overlapping */}
              <div className="absolute top-28 right-8 w-52 bg-white p-3 shadow-[0_30px_60px_-12px_rgba(43,38,34,0.22)] rounded-xl border border-charcoal/10 card-tilt-2 pointer-events-auto z-20 hover:shadow-[0_35px_70px_0_rgba(43,38,34,0.3)]">
                <div className="aspect-[4/3] w-full relative overflow-hidden rounded-lg bg-charcoal/10">
                  <img
                    src="https://images.unsplash.com/photo-1549439602-43ebcb2327af?w=300&auto=format&fit=crop&q=80"
                    alt="Custom dress fitting"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="mt-3 text-center">
                  <h4 className="font-display text-sm font-semibold text-charcoal">Kumari&apos;s Tailoring</h4>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-clay mt-0.5">Nugegoda • Verified</p>
                </div>
              </div>

              {/* Photo 3: Chocolate desserts, rotated slightly, centered overlap lower */}
              <div className="absolute bottom-6 left-28 w-48 bg-white p-3 shadow-[0_22px_45px_-8px_rgba(43,38,34,0.15)] rounded-xl border border-charcoal/10 card-tilt-3 pointer-events-auto z-30 hover:shadow-[0_25px_50px_0_rgba(43,38,34,0.22)]">
                <div className="aspect-[4/3] w-full relative overflow-hidden rounded-lg bg-charcoal/10">
                  <img
                    src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&auto=format&fit=crop&q=80"
                    alt="Marie Biscuit pudding"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="mt-2 text-center">
                  <h4 className="font-display text-xs font-semibold text-charcoal">Cocoa Hype Bakes</h4>
                  <p className="font-mono text-[8px] uppercase tracking-wider text-betel mt-0.5 text-center">Colombo 03 • Approved</p>
                </div>
              </div>

              {/* Little floral element circle */}
              <div className="absolute top-4 right-1/3 w-12 h-12 rounded-full border-2 border-dashed border-turmeric/50 flex items-center justify-center text-turmeric font-mono text-[9px] uppercase tracking-widest text-center leading-none rotate-12 bg-white shadow-sm opacity-90">
                100% Homemade
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* POPULAR CATEGORIES HORIZONTAL CHIPS ROW */}
      <section className="bg-paper py-8 border-b border-charcoal/5 relative z-10 mt-[-20px] max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-charcoal/5">
          <p className="font-mono text-[10px] text-charcoal/50 uppercase tracking-widest font-bold mb-3 text-center">
            Discover categories across Colombo
          </p>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start md:justify-center">
            
            {/* Let's define the nice category buttons */}
            {CATEGORIES.map((cat, idx) => {
              const icons = [
                "🍛", // Home-cooked Meals
                "🧁", // Baking & Desserts
                "🪡", // Tailoring & Alterations
                "🧺", // Handicrafts
                "💅", // Beauty at Home
                "📚", // Tuition & Classes
                "👜"  // Accessories & Bags
              ];
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className="whitespace-nowrap flex items-center gap-2 bg-paper/60 hover:bg-ink hover:text-paper text-charcoal text-xs font-semibold px-4.5 py-2.5 rounded-full border border-charcoal/10 transition-all cursor-pointer"
                >
                  <span className="text-sm">{icons[idx] || "⭐"}</span>
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* VERIFIED TRUST STRIP WITH THE EMBROIDERED VERIFIED BADGE */}
      <section className="bg-white py-6 border-b border-charcoal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-paper flex items-center justify-center border-2 border-dashed border-turmeric text-2xl">
              🤝
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-charcoal leading-snug">
                Colombo&apos;s Strict Safety &amp; Trust Blueprint
              </h3>
              <p className="text-xs text-charcoal/60 leading-normal max-w-xl font-sans">
                Each homemaker undergoes a meticulous virtual vetting by the platform operators to confirm culinary hygiene, tailoring catalogs, and location authenticity.
              </p>
            </div>
          </div>
          <div className="bg-paper p-3 rounded-xl border border-charcoal/5 flex items-center gap-3">
            <span className="text-xs text-charcoal/50 font-mono">Our Trust Signal:</span>
            <VerifiedBadge showText={true} />
          </div>
        </div>
      </section>

      {/* FEATURED SELLER GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="font-mono text-xs text-clay uppercase tracking-widest font-bold">Featured Talents</span>
            <h2 className="font-display text-3xl sm:text-4.5xl font-bold tracking-tight text-ink mt-1">
              Colombo&apos;s Highly Appreciated Kitchens &amp; Outlets
            </h2>
          </div>
          <Link
            href="/explore"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-ink hover:text-turmeric group transition-colors"
          >
            <span>Browse All Listed Shops</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Card Grid */}
        {featuredSellers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSellers.map((seller) => (
              <HomemakerCard key={seller.id} homemaker={seller} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 text-center rounded-2xl border border-dashed border-charcoal/10">
            <p className="text-charcoal/50 text-sm">Populating featured Sri Lankan shops...</p>
          </div>
        )}
      </section>

      {/* SEWING STITCH DIVIDER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StitchDivider />
      </div>

      {/* HOW IT WORKS SECTION */}
      <section className="bg-white py-16 border-y border-charcoal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs text-clay uppercase tracking-widest font-bold">Simple Interaction</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink mt-1">
              The Pure, Frictionless Pathway
            </h2>
            <p className="text-xs sm:text-sm text-charcoal/60 mt-2">
              No online commissions. No complicated checkouts. Pure local support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Box 1 */}
            <div className="bg-paper/40 p-6 rounded-2xl border border-charcoal/5 flex flex-col relative group hover:bg-paper/70 transition-all">
              <span className="font-mono text-xs text-turmeric font-bold mb-2">01 / STEP ONE</span>
              <h3 className="font-display text-xl font-bold text-charcoal mb-2">Discovery</h3>
              <p className="text-xs text-charcoal/70 leading-relaxed font-sans">
                Browse our curated Colombo roster. Search by product keywords like &quot;rice packets&quot;, or filter down by specific neighborhoods like Wellawatte or Mount Lavinia.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-paper/40 p-6 rounded-2xl border border-charcoal/5 flex flex-col relative group hover:bg-paper/70 transition-all">
              <span className="font-mono text-xs text-turmeric font-bold mb-2">02 / STEP TWO</span>
              <h3 className="font-display text-xl font-bold text-charcoal mb-2">Contact via WhatsApp</h3>
              <p className="text-xs text-charcoal/70 leading-relaxed font-sans">
                One-click to open WhatsApp directly with the homemaker using pre-filled messages. Arrange customizable sizing, portion spices, coordinate pickups, or scheduling.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-paper/40 p-6 rounded-2xl border border-charcoal/5 flex flex-col relative group hover:bg-paper/70 transition-all">
              <span className="font-mono text-xs text-turmeric font-bold mb-2">03 / STEP THREE</span>
              <h3 className="font-display text-xl font-bold text-charcoal mb-2">Exchange &amp; Savor</h3>
              <p className="text-xs text-charcoal/70 leading-relaxed font-sans">
                Complete payments directly using Sri Lankan bank transfers or cash on delivery. Relish the unmatched, sincere texture of home-crafted products made with pure devotion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SUPPORT WOMEN HOMEMAKERS — MISSION SECTION */}
      <section className="bg-paper py-16 border-b border-charcoal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-charcoal/5">
            <div className="max-w-3xl mx-auto">
              <span className="font-mono text-xs text-turmeric uppercase tracking-widest font-bold">Our Mission</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink mt-2 mb-4">
                Supporting Economic Empowerment of Colombo&apos;s Women
              </h2>
              <p className="text-sm text-charcoal/75 leading-relaxed font-sans mb-4">
                Her HomeNest Market exists to unlock the untapped potential of Sri Lanka&apos;s talented women entrepreneurs. Many skilled homemakers possess culinary mastery, sewing expertise, baking talent, and educational abilities—yet lack a formal platform to reach customers and build sustainable income.
              </p>
              <p className="text-sm text-charcoal/75 leading-relaxed font-sans mb-4">
                By shopping on this marketplace, you directly support women&apos;s economic independence, allow families to reinvest in their neighborhoods, and celebrate the true value of home-based artisanal skill. Every transaction strengthens Colombo&apos;s local economy and honors the quiet, transformative work happening inside homes across the city.
              </p>
              <p className="text-sm font-semibold text-charcoal">
                When you buy from a homemaker, you&apos;re not just purchasing a product—you&apos;re building community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER TESTIMONIALS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-mono text-xs text-clay uppercase tracking-widest font-bold">Real Voices</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink mt-1">
            What Colombo Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-2xl border border-charcoal/5 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-1 mb-3">
              <span className="text-turmeric text-lg">⭐⭐⭐⭐⭐</span>
            </div>
            <p className="text-xs text-charcoal/80 leading-relaxed font-sans mb-4">
              &quot;Fatheema&apos;s biryani changed my Friday nights. The quality is unreal—it tastes like it was cooked in someone&apos;s actual kitchen because it was. Way better than restaurant biryani.&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-turmeric/20 flex items-center justify-center text-turmeric font-bold text-xs">
                AM
              </div>
              <div>
                <p className="text-xs font-semibold text-charcoal">Asha M.</p>
                <p className="text-[10px] text-charcoal/50">Colombo 04</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-2xl border border-charcoal/5 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-1 mb-3">
              <span className="text-turmeric text-lg">⭐⭐⭐⭐⭐</span>
            </div>
            <p className="text-xs text-charcoal/80 leading-relaxed font-sans mb-4">
              &quot;Kumari did my daughter&apos;s school frock alterations in 2 days, and it fits perfectly. She&apos;s honest about prices and super responsive on WhatsApp. Trusted her with 3 pieces now.&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-clay/20 flex items-center justify-center text-clay font-bold text-xs">
                SR
              </div>
              <div>
                <p className="text-xs font-semibold text-charcoal">Sophia R.</p>
                <p className="text-[10px] text-charcoal/50">Nugegoda</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-2xl border border-charcoal/5 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-1 mb-3">
              <span className="text-turmeric text-lg">⭐⭐⭐⭐⭐</span>
            </div>
            <p className="text-xs text-charcoal/80 leading-relaxed font-sans mb-4">
              &quot;Cocoa Hype Bakes sent chocolate brownies to my office for a colleague&apos;s birthday. Everyone asked where they came from. Supporting local talent has never tasted this good.&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-betel/20 flex items-center justify-center text-betel font-bold text-xs">
                NP
              </div>
              <div>
                <p className="text-xs font-semibold text-charcoal">Nisha P.</p>
                <p className="text-[10px] text-charcoal/50">Colombo 03</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA REGISTER BANNER WITH INK BACKING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-ink text-paper rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border-2 border-dashed border-turmeric/40">
          
          {/* Subtle stitch outline accent */}
          <div className="absolute inset-2 border border-dashed border-paper/10 rounded-2xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="font-mono text-xs text-turmeric uppercase tracking-widest font-bold block">
              Calling Sri Lankan Women Entrepreneurs
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-white leading-none">
              Are you a talented homemaker <br />based in Colombo?
            </h2>
            <p className="text-sm text-paper/85 font-sans leading-relaxed">
              Join 50+ Colombo women who trust Her HomeNest Market to promote their customized bakes, school lunch packets, tailoring workshops, or primary tutoring classes. Setup your listing with no fees.
            </p>
            
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Link
                href="/register"
                className="bg-turmeric hover:bg-turmeric/95 text-ink font-bold text-xs uppercase tracking-wider py-3.5 px-8 rounded-xl shadow-lg transition-all text-center"
              >
                Create My Seller Account
              </Link>
              <Link
                href="/about"
                className="bg-white/10 hover:bg-white/20 text-paper border border-paper/20 font-bold text-xs uppercase tracking-wider py-3.5 px-8 rounded-xl transition-all text-center"
              >
                Learn How We Vouch For You
              </Link>
            </div>
          </div>

          {/* Abstract aesthetic circle representation */}
          <div className="absolute right-[-40px] bottom-[-40px] w-80 h-80 rounded-full border border-dashed border-turmeric/25 pointer-events-none select-none"></div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
