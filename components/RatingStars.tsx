import React from "react";

export function RatingStars({ rating, max = 5, size = 4 }: { rating: number; max?: number; size?: number }) {
  const stars: React.ReactNode[] = [];
  const floor = Math.floor(rating);
  const diff = rating - floor;
  const dimensions = { width: `${size * 0.25}rem`, height: `${size * 0.25}rem` };

  for (let i = 1; i <= max; i++) {
    if (i <= floor) {
      // Full star
      stars.push(
        <svg key={i} style={dimensions} className="text-turmeric" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.98c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.98a1 1 0 00-.364-1.118L2.05 9.407c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.97z" />
        </svg>
      );
    } else if (i === floor + 1 && diff >= 0.3) {
      // Half star
      stars.push(
        <div key={i} className="relative inline-block">
          <svg style={dimensions} className="text-charcoal/20" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.98c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.98a1 1 0 00-.364-1.118L2.05 9.407c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.97z" />
          </svg>
          <div className="absolute top-0 left-0 overflow-hidden w-1/2">
            <svg style={dimensions} className="text-turmeric" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.98c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.98a1 1 0 00-.364-1.118L2.05 9.407c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.97z" />
            </svg>
          </div>
        </div>
      );
    } else {
      // Empty star
      stars.push(
        <svg key={i} style={dimensions} className="text-charcoal/20" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.98c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.98a1 1 0 00-.364-1.118L2.05 9.407c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.97z" />
        </svg>
      );
    }
  }

  return <div className="flex items-center gap-0.5" aria-label={`${rating} out of ${max} stars`}>{stars}</div>;
}
