import React from "react";

export function VerifiedBadge({ className = "", showText = true }: { className?: string; showText?: boolean }) {
  return (
    <span 
      className={`inline-flex items-center gap-1 bg-ink text-paper text-xs px-2 py-0.5 rounded-md border-x-2 border-y border-dashed border-turmeric shadow-md font-medium tracking-tight skew-x-1 ${className}`}
      title="Platform Verified Homemaker by Her HomeNest Market"
    >
      <svg className="w-3.5 h-3.5 text-turmeric" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 15a5 5 0 110-10 5 5 0 010 10zm-1.7-4.3l-1.4-1.4-1.4 1.4 2.8 2.8 4.3-4.3-1.4-1.4-2.9 2.9" />
      </svg>
      {showText && (
        <span className="font-mono text-[9px] uppercase tracking-wider text-turmeric font-semibold">
          Verified Homemaker
        </span>
      )}
    </span>
  );
}
