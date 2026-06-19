"use client";

import React, { use, useState, useEffect } from "react";
import Link from "next/link";
import { getPublicHomemakers } from "@/lib/mock-data";
import { Homemaker, Category } from "@/lib/types";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StitchDivider } from "@/components/StitchDivider";
import { HomemakerCard } from "@/components/HomemakerCard";
import { CATEGORY_BY_SLUG, CATEGORY_DETAILS } from "@/lib/category-data";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  
  const decodedSlug = decodeURIComponent(slug).toLowerCase();
  const categoryDetail =
    CATEGORY_BY_SLUG[decodedSlug] ||
    CATEGORY_DETAILS.find((category) => category.name.toLowerCase() === decodedSlug) ||
    CATEGORY_DETAILS[0];
  const categoryName: Category = categoryDetail.name;

  const [sellers, setSellers] = useState<Homemaker[]>([]);

  useEffect(() => {
    const handleSync = () => {
      const all = getPublicHomemakers();
      setSellers(all.filter((h) => h.category.toLowerCase() === categoryName.toLowerCase()));
    };
    setTimeout(handleSync, 0);
  }, [categoryName]);

  return (
    <div className="min-h-screen bg-paper flex flex-col">
      <Navbar />

      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-1.5 text-xs font-mono text-charcoal/50">
          <Link href="/" className="hover:text-ink">Home</Link>
          <span>/</span>
          <Link href="/explore" className="hover:text-ink">Explore</Link>
          <span>/</span>
          <span className="text-charcoal/80 font-bold">{categoryName}</span>
        </div>

        {/* Category Header Card */}
        <div className="bg-ink text-paper rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-md border-x-4 border-turmeric mb-12">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="font-mono text-xs text-turmeric font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">
              Category Hub
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-white leading-none">
              {categoryName}
            </h1>
            <p className="text-sm sm:text-base text-paper/85 leading-relaxed max-w-xl font-sans">
              {categoryDetail.summary}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {categoryDetail.offerings.map((offering) => (
                <span key={offering} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] text-paper/80">
                  {offering}
                </span>
              ))}
            </div>
          </div>
          <div className="absolute right-[-20px] bottom-[-20px] w-64 h-64 rounded-full border border-dashed border-turmeric/10 pointer-events-none select-none"></div>
        </div>

        {/* Results Stream */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-dashed border-charcoal/10 font-mono text-xs text-charcoal/50">
            <span>SHOWING {sellers.length} HOMEMAKER SHOPS</span>
            <span>COLOMBO DIVISION, S.L.</span>
          </div>

          {sellers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {sellers.map((seller) => (
                <HomemakerCard key={seller.id} homemaker={seller} />
              ))}
            </div>
          ) : (
            <div className="bg-white p-12 text-center rounded-2xl border border-dashed border-charcoal/10 max-w-lg mx-auto">
              <span className="text-3xl block mb-2">🎈</span>
              <h3 className="font-display text-lg font-bold text-charcoal">No Active Outlets listed in this category</h3>
              <p className="text-xs text-charcoal/50 mt-1 mb-4 font-sans max-w-xs mx-auto">
                Be the first to list your home business in this category and get customer inquiries directly over WhatsApp!
              </p>
              <Link
                href="/register"
                className="bg-turmeric text-ink font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg hover:bg-turmeric/95 transition-colors shadow-sm inline-block"
              >
                Onboard My Business
              </Link>
            </div>
          )}
        </div>

      </main>

      <Footer />
    </div>
  );
}
