"use client";

import React from "react";
import Link from "next/link";
import { StitchDivider } from "./StitchDivider";

export function Footer() {
  return (
    <footer className="bg-ink text-paper mt-16 border-t-4 border-turmeric">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Intro Column */}
          <div className="md:col-span-2 space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-white">
              Her HomeNest Market
            </h2>
            <p className="text-paper/80 text-sm max-w-sm font-sans tracking-wide leading-relaxed">
              Empowering Colombo&apos;s talented homemakers, bakers, dressmakers, and tutors to showcase their home skills and build financial independence. Connecting Colombo neighbors with trusted, women-led local businesses.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-betel inline-block"></span>
              <span className="font-mono text-xs text-turmeric uppercase tracking-wider">Colombo Division, Sri Lanka</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-turmeric font-bold mb-4">
              Market Pathways
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/explore" className="text-paper/80 hover:text-turmeric transition-colors">
                  Explore Homemakers
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-paper/80 hover:text-turmeric transition-colors">
                  Our Mission &amp; Trust
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-paper/80 hover:text-turmeric transition-colors">
                  Contact Platform Admins
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-paper/80 hover:text-turmeric transition-colors">
                  Seller Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Colombo Neighhoods Info */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-turmeric font-bold mb-4">
              Our Hub Neighborhoods
            </h3>
            <ul className="space-y-1.5 text-xs text-paper/70 font-sans">
              <li>📍 Wellawatte (Colombo 06)</li>
              <li>📍 Bambalapitiya (Colombo 04)</li>
              <li>📍 Kollupitiya (Colombo 03)</li>
              <li>📍 Nugegoda &amp; Dehiwala</li>
              <li>📍 Maharagama &amp; Rajagiriya</li>
            </ul>
          </div>

        </div>

        {/* Handstitch divider inline */}
        <StitchDivider className="my-8 opacity-40" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-paper/60 gap-4 font-mono">
          <p>© 2026 Her HomeNest Market. Supporting local Colombo homemakers.</p>
          <div className="flex items-center gap-4">
            <span>Stitched with care in Sri Lanka 🇱🇰</span>
            <span>✨ Empowher Initiative • MVP V1.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
