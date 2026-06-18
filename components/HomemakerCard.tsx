"use client";

import React from "react";
import Link from "next/link";
import { Homemaker } from "@/lib/types";
import { VerifiedBadge } from "./VerifiedBadge";
import { RatingStars } from "./RatingStars";

export function HomemakerCard({ homemaker }: { homemaker: Homemaker }) {
  const primaryPhoto = homemaker.photos[0] || "https://picsum.photos/seed/homenest/400/300";

  // Pre-filled WhatsApp message URL
  const whatsappUrl = `https://wa.me/${homemaker.whatsappNumber}?text=Hello%20${homemaker.ownerFirstName},%20I%20found%20your%20home%20business%20"${encodeURIComponent(homemaker.businessName)}"%20on%20Her%20HomeNest%20Market%20and%20would%20love%20to%20inquire%20about%20your%20offerings!`;

  return (
    <div className="bg-white rounded-2xl border-2 border-charcoal/5 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group h-full">
      {/* Photo header with overlay badge */}
      <div className="relative aspect-video w-full overflow-hidden bg-charcoal/10">
        <img
          src={primaryPhoto}
          alt={homemaker.businessName}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Category Overlay Tag */}
        <span className="absolute top-3 left-3 bg-ink/90 text-paper text-[10px] uppercase font-mono tracking-wider font-semibold px-2.5 py-1 rounded-md border border-turmeric/30">
          {homemaker.category}
        </span>

        {/* Available Today indicator */}
        {homemaker.availableToday ? (
          <span className="absolute top-3 right-3 bg-betel text-white text-[9px] uppercase tracking-wider font-mono font-bold px-2 py-0.5 rounded flex items-center gap-1 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
            Open today
          </span>
        ) : (
          <span className="absolute top-3 right-3 bg-charcoal/60 text-white text-[9px] uppercase tracking-wider font-mono font-medium px-2 py-0.5 rounded flex items-center gap-1">
            Pre-order
          </span>
        )}
      </div>

      {/* Body Content */}
      <div className="p-5 flex-1 flex flex-col">
        {/* verified label + location */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-xs text-charcoal/60 font-mono flex items-center gap-1">
            📍 {homemaker.area}
          </span>
          {homemaker.verified && <VerifiedBadge showText={true} />}
        </div>

        {/* Business Title */}
        <Link href={`/homemaker/${homemaker.id}`} className="block group-hover:text-ink transition-colors">
          <h3 className="font-display text-xl font-bold leading-tight line-clamp-1 mb-1 text-charcoal group-hover:underline decoration-dashed decoration-turmeric">
            {homemaker.businessName}
          </h3>
        </Link>
        
        <p className="text-xs text-charcoal/50 mb-3 font-sans">
          By <span className="font-semibold text-charcoal/80">{homemaker.ownerFirstName}</span>
        </p>

        {/* Bio Snippet */}
        <p className="text-xs text-charcoal/70 line-clamp-2 leading-relaxed mb-4 flex-1">
          {homemaker.bio}
        </p>

        {/* Rating and Price row - using IBM Plex Mono */}
        <div className="flex items-center justify-between py-3 border-t border-dashed border-charcoal/10 mb-4 bg-paper/20 px-2 rounded-lg">
          <div className="flex flex-col">
            <span className="text-[10px] text-charcoal/40 font-mono uppercase">Avg Rating</span>
            <div className="flex items-center gap-1">
              <RatingStars rating={homemaker.rating} size={3.5} />
              <span className="font-mono text-xs font-semibold text-charcoal/80">
                {homemaker.rating} ({homemaker.reviewCount})
              </span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-charcoal/40 font-mono uppercase">From Price</span>
            <span className="font-mono text-xs font-bold text-ink">
              LKR {homemaker.priceFrom.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Interactive CTA Actions */}
        <div className="grid grid-cols-5 gap-2 mt-auto">
          {/* Main WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-3 bg-betel hover:bg-betel/95 text-paper font-semibold text-xs py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 shadow-sm transition-all hover:shadow-md"
          >
            {/* WhatsApp logo represented nicely with custom path */}
            <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.446L0 24zm6.59-4.846c1.6.95 3.1 1.4 4.8 1.4 5.4 0 9.8-4.4 9.8-9.8s-4.4-9.8-9.8-9.8-9.8 4.4-9.8 9.8c0 1.8.5 3.5 1.4 4.9l-.9 3.2 3.3-.9z" />
            </svg>
            <span>WhatsApp</span>
          </a>

          {/* Details Page Link Button */}
          <Link
            href={`/homemaker/${homemaker.id}`}
            className="col-span-2 bg-paper text-ink border border-ink/20 hover:bg-ink hover:text-paper font-semibold text-xs py-2.5 px-2 rounded-lg flex items-center justify-center transition-all"
          >
            View Shop
          </Link>
        </div>
      </div>
    </div>
  );
}
