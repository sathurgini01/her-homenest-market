import React from "react";

export function StitchDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full py-2 flex items-center justify-center overflow-hidden select-none ${className}`}>
      <svg className="w-full h-3 text-clay/70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line
          x1="0"
          y1="6"
          x2="2500"
          y2="6"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-stitch-draw"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
