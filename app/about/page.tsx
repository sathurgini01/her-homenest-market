"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StitchDivider } from "@/components/StitchDivider";
import { VerifiedBadge } from "@/components/VerifiedBadge";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-paper flex flex-col selection:bg-turmeric/30 selection:text-ink">
      <Navbar />

      <main id="main-content" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 space-y-12">
        
        {/* Core Header */}
        <div className="text-center space-y-4">
          <span className="font-mono text-xs text-clay font-bold uppercase tracking-widest bg-white py-1 px-3.5 rounded-full border border-charcoal/10 shadow-sm">
            Our Story &amp; Pledge
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-ink leading-tight">
            We Back the Women Stitching <br />Colombo&apos;s Families Together
          </h1>
          <p className="text-xs sm:text-sm text-charcoal/60 max-w-xl mx-auto font-sans">
            Her HomeNest Market is a community-owned portal designed strictly to help women operating home catering, tailoring, and tutoring sustain their families independently.
          </p>
        </div>

        {/* IMAGE/CORKBOARD MOSAIC SECTION LIKE IMAGE 3 */}
        <div className="bg-white p-6 rounded-3xl border-2 border-charcoal/5 shadow-sm space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="font-display text-2.5xl font-bold text-ink leading-snug">
                Why Support Women in their Home Nests?
              </h2>
              <p className="text-xs text-charcoal/70 leading-relaxed font-sans">
                Many homemakers in Sri Lanka make outstanding culinary dishes, stitch school uniforms with premium accuracy, or provide customized tuition. Yet, they remain unseen to digital search engines because of high online commission thresholds or lack of modern technical setup.
              </p>
              <p className="text-xs text-charcoal/70 leading-relaxed font-sans">
                Our platform provides a zero-fee listing space. Customers browse nearby homemakers and contact them directly on WhatsApp. This keeps 100% of profit inside the homemaker&apos;s pockets, with zero commission cuts taken by third-party delivery aggregators.
              </p>
            </div>
            
            <div className="relative h-64 bg-paper rounded-2xl overflow-hidden border border-charcoal/10 flex items-center justify-center select-none pointer-events-none">
              <div className="absolute top-6 left-6 rotate-[-4deg] w-48 bg-white p-2 rounded-lg shadow-md border border-charcoal/5 pointer-events-auto">
                <Image
                  src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=200&auto=format&fit=crop&q=80"
                  alt="Tailoring"
                  width={200}
                  height={96}
                  className="rounded object-cover h-24 w-full"
                />
                <p className="text-[9px] font-mono text-charcoal/40 text-center mt-1">Stitching Hope • Nugegoda</p>
              </div>
              <div className="absolute bottom-6 right-6 rotate-[3deg] w-44 bg-white p-2 rounded-lg shadow-lg border border-charcoal/5 pointer-events-auto">
                <Image
                  src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=200&auto=format&fit=crop&q=80"
                  alt="Healthy food"
                  width={200}
                  height={80}
                  className="rounded object-cover h-20 w-full"
                />
                <p className="text-[9px] font-mono text-charcoal/40 text-center mt-1">Sri Lankan Spices • Wellawatte</p>
              </div>
            </div>
          </div>
        </div>

        {/* CLOTHESLINE RUNNING STITCH */}
        <StitchDivider />

        {/* PLATFORM MANDATES & HOW WE VERIFY */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="font-display text-2.5xl font-bold text-ink">
              The Security &amp; Trust Manifesto
            </h2>
            <p className="text-xs text-charcoal/50 mt-1 max-w-md mx-auto">
              How we protect both homemakers and neighbors from misinformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-xs">
            
            {/* Box 1 */}
            <div className="bg-white p-6 rounded-2xl border border-charcoal/10 shadow-sm space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-paper flex items-center justify-center font-bold text-charcoal text-[11px] font-mono border border-charcoal/15">01</span>
                <h3 className="font-display font-bold text-sm text-charcoal">Pre-Onboarding Background Vet</h3>
              </div>
              <p className="text-charcoal/70 leading-relaxed font-sans pl-8">
                Before a profile is visible, our admin committee requests utility bills, photos of the work environment, and reviews previous sample products to verify strict hygiene standards.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-white p-6 rounded-2xl border border-charcoal/10 shadow-sm space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-paper flex items-center justify-center font-bold text-charcoal text-[11px] font-mono border border-charcoal/15">02</span>
                <h3 className="font-display font-bold text-sm text-charcoal">Public Reviews Verification</h3>
              </div>
              <p className="text-charcoal/70 leading-relaxed font-sans pl-8">
                All customer reviews submitted on homemaker logs require verification and must accompany valid transaction details to eliminate malicious or competitor-inflated comments.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-white p-6 rounded-2xl border border-charcoal/10 shadow-sm space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-paper flex items-center justify-center font-bold text-charcoal text-[11px] font-mono border border-charcoal/15">03</span>
                <h3 className="font-display font-bold text-sm text-charcoal">Direct WhatsApp Commerce</h3>
              </div>
              <p className="text-charcoal/70 leading-relaxed font-sans pl-8">
                By bypassing credit card fees or payment aggregators, we establish honest peer-to-peer trust. Pay sellers directly using bank transfers or cash on delivery upon receiving orders.
              </p>
            </div>

            {/* Box 4 */}
            <div className="bg-white p-6 rounded-2xl border border-charcoal/10 shadow-sm space-y-2.5 flex flex-col justify-center items-center text-center">
              <VerifiedBadge showText={true} className="mb-2" />
              <p className="text-charcoal/50 leading-relaxed font-mono text-[10px]">
                LOOK FOR THE SCALLOPED EMBROIDERED PATCH <br />TO CONFIRM TRUST SIGNALS.
              </p>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="bg-ink text-paper p-8 rounded-3xl border border-dashed border-turmeric/30 text-center space-y-4">
          <h3 className="font-display text-2xl text-white">Join our nesting community of women chefs &amp; tailors</h3>
          <p className="text-xs text-paper/80 leading-relaxed max-w-sm mx-auto font-sans">
            Ready to list your homemade delicacies or math classes? Setting up your business profile takes less than 5 minutes.
          </p>
          <div className="pt-2">
            <Link
              href="/register"
              className="bg-turmeric text-ink font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-xl hover:bg-turmeric/95 transition-colors inline-block"
            >
              Onboard My Brand Now
            </Link>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
