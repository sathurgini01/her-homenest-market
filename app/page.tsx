"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MessageCircle, Search, ShieldCheck, MapPin } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HomemakerCard } from "@/components/HomemakerCard";
import { VerifiedBadge } from "@/components/VerifiedBadge";
import { getPublicHomemakers } from "@/lib/mock-data";
import { Homemaker } from "@/lib/types";
import {
  MORE_CATEGORIES,
  POPULAR_CATEGORIES,
  categoryToSlug,
} from "@/lib/category-data";

const testimonials = [
  {
    quote:
      "Fatheema answered on WhatsApp quickly and the biryani arrived exactly when promised. Seeing the verified badge made me comfortable ordering for my family.",
    name: "Asha M.",
    area: "Colombo 04",
  },
  {
    quote:
      "Kumari altered three school uniforms in two days. The price was clear, the fitting was excellent, and I have already recommended her to another parent.",
    name: "Sophia R.",
    area: "Nugegoda",
  },
  {
    quote:
      "The birthday brownies were fresh, beautifully packed and genuinely homemade. It felt good knowing my order directly supported a local woman.",
    name: "Nisha P.",
    area: "Colombo 03",
  },
];

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [featuredSellers, setFeaturedSellers] = useState<Homemaker[]>([]);

  useEffect(() => {
    const syncFeatured = () => {
      setFeaturedSellers(
        getPublicHomemakers()
          .filter((homemaker) => homemaker.featured)
          .slice(0, 6)
      );
    };
    setTimeout(syncFeatured, 0);
  }, []);

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const query = searchQuery.trim();
    router.push(query ? `/explore?search=${encodeURIComponent(query)}` : "/explore");
  };

  return (
    <div className="flex min-h-screen flex-col bg-paper selection:bg-turmeric/30 selection:text-ink">
      <Navbar />

      {/* 1. Customer-first hero */}
      <section
        className="relative overflow-hidden border-b border-white/10 bg-[#16352f] pb-16 pt-14 text-paper sm:pb-20 sm:pt-16"
        style={{
          backgroundImage:
            "linear-gradient(115deg,rgba(10,40,35,.98),rgba(18,55,48,.94) 52%,rgba(20,61,52,.88)),url('/topographic-pattern.svg')",
          backgroundSize: "cover, 720px 520px",
          backgroundPosition: "center",
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_35%,rgba(227,162,60,.15),transparent_30%),linear-gradient(to_bottom,transparent_70%,rgba(5,25,22,.3))]" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="space-y-6 lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
              <MapPin className="h-3.5 w-3.5 text-turmeric" />
              <span className="font-mono text-[10px] font-semibold uppercase tracking-widest">
                Made in homes across Colombo
              </span>
            </div>

            <div>
              <h1 className="max-w-2xl font-display text-5xl font-medium leading-[1.02] tracking-tight text-white sm:text-6xl">
                Find trusted homemakers near you in Colombo.
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-paper/80 sm:text-base">
                Discover admin-verified women offering home-cooked food, baking, tailoring,
                crafts, beauty services and classes. View their work and contact them directly
                on WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSearchSubmit} className="max-w-xl">
              <div className="flex items-center rounded-2xl border border-white/15 bg-white p-2 shadow-2xl">
                <Search className="ml-2 h-5 w-5 shrink-0 text-ink/70" />
                <input
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search food, tailoring, baking, tuition..."
                  className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-charcoal outline-none placeholder:text-charcoal/45"
                  aria-label="Search homemakers and products"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-turmeric px-5 py-3 text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:bg-turmeric/90"
                >
                  Search
                </button>
              </div>
              <p className="mt-2 pl-2 font-mono text-[10px] text-paper/55">
                Try “lunch packets”, “saree blouse”, “love cake” or “Maths tuition”
              </p>
            </form>
          </div>

          <div className="relative hidden h-[540px] select-none sm:block lg:col-span-6">
            <div className="absolute inset-x-12 bottom-4 h-24 rounded-[50%] bg-black/30 blur-2xl" />
            <div className="hero-portrait-fade absolute inset-y-0 left-1/2 z-10 w-[330px] -translate-x-1/2">
              <Image
                src="/hero-homemaker-v2.png"
                alt="Colombo home food entrepreneur presenting homemade products"
                fill
                priority
                sizes="330px"
                className="object-cover object-top"
              />
            </div>
            <div className="card-tilt-1 absolute left-0 top-12 z-20 w-40 rounded-xl border border-white/20 bg-white p-2.5 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=360&auto=format&fit=crop&q=80"
                alt="Homemade biryani"
                width={360}
                height={270}
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <p className="mt-2 font-display text-sm font-bold text-charcoal">Friday Biryani</p>
              <p className="font-mono text-[9px] text-clay">Wellawatte • Verified</p>
            </div>
            <div className="card-tilt-2 absolute right-0 top-20 z-20 w-40 rounded-xl border border-white/20 bg-white p-2.5 shadow-2xl">
              <Image
                src="/hero-tailoring.png"
                alt="Sri Lankan homemaker stitching a custom saree blouse"
                width={320}
                height={240}
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <p className="mt-2 font-display text-sm font-bold text-charcoal">Custom Stitching</p>
              <p className="font-mono text-[9px] text-clay">Nugegoda • 4.8 ★</p>
            </div>

            <div className="card-tilt-3 absolute bottom-10 left-1 z-30 w-40 rounded-xl border border-white/20 bg-white p-2.5 shadow-2xl">
              <Image
                src="/hero-jewelry.png"
                alt="Handmade beaded and brass jewelry by a Colombo woman artisan"
                width={320}
                height={240}
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <p className="mt-2 font-display text-sm font-bold text-charcoal">Handmade Jewelry</p>
              <p className="font-mono text-[9px] text-clay">Rajagiriya • Verified</p>
            </div>

            <div className="card-tilt-1 absolute bottom-4 right-0 z-30 w-40 rounded-xl border border-white/20 bg-white p-2.5 shadow-2xl">
              <Image
                src="/hero-handbag.png"
                alt="Handmade batik fabric handbag and matching pouch"
                width={320}
                height={240}
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <p className="mt-2 font-display text-sm font-bold text-charcoal">Batik Handbags</p>
              <p className="font-mono text-[9px] text-clay">Dehiwala • 4.9 ★</p>
            </div>

            <div className="absolute left-1/2 top-3 z-30 -translate-x-1/2 rounded-full border border-turmeric/40 bg-[#173d35]/95 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-turmeric">
              Women-led • Colombo-made
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust signal immediately after the hero */}
      <section className="border-b border-charcoal/5 bg-white py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row lg:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-turmeric bg-paper">
              <ShieldCheck className="h-6 w-6 text-betel" />
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-charcoal">
                Profiles are reviewed before they appear publicly
              </h2>
              <p className="max-w-2xl text-xs leading-relaxed text-charcoal/60">
                Our Colombo admin team checks identity, location and work samples. Always confirm
                order details, allergens, pricing and collection or delivery directly with the seller.
              </p>
            </div>
          </div>
          <VerifiedBadge showText />
        </div>
      </section>

      {/* 3. Popular categories and complete marketplace taxonomy */}
      <section id="categories" className="scroll-mt-24 border-b border-charcoal/5 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-clay">
                Popular categories
              </span>
              <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                What are you looking for today?
              </h2>
            </div>
            <Link href="/explore" className="text-xs font-bold uppercase tracking-wider text-ink hover:text-clay">
              Explore all homemakers →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {POPULAR_CATEGORIES.map((category) => (
              <Link
                key={category.name}
                href={`/category/${categoryToSlug(category.name)}`}
                className="group rounded-2xl border border-charcoal/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-turmeric/50 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-paper text-2xl">
                    {category.icon}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-charcoal group-hover:text-ink">
                      {category.name}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-charcoal/60">{category.summary}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {category.offerings.slice(0, 3).map((offering) => (
                    <span key={offering} className="rounded-full bg-paper px-2.5 py-1 text-[10px] text-charcoal/70">
                      {offering}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-dashed border-charcoal/15 bg-white/60 p-5">
            <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-widest text-charcoal/50">
              More handmade and wearable categories
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {MORE_CATEGORIES.map((category) => (
                <Link
                  key={category.name}
                  href={`/category/${categoryToSlug(category.name)}`}
                  className="rounded-xl border border-charcoal/10 bg-white p-4 transition-colors hover:border-turmeric/60 hover:bg-paper/40"
                >
                  <span className="text-xl">{category.icon}</span>
                  <h3 className="mt-2 text-sm font-bold text-charcoal">{category.name}</h3>
                  <p className="mt-1 text-[10px] leading-relaxed text-charcoal/55">
                    {category.offerings.slice(0, 2).join(" • ")}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Marketplace proof */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-clay">
              Admin-picked sellers
            </span>
            <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Featured Colombo homemakers
            </h2>
            <p className="mt-2 text-sm text-charcoal/60">
              Real listings with an area, category, rating and direct contact path.
            </p>
          </div>
          <Link href="/explore" className="text-xs font-bold uppercase tracking-wider text-ink hover:text-clay">
            View the full marketplace →
          </Link>
        </div>

        {featuredSellers.length ? (
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {featuredSellers.map((seller) => (
              <HomemakerCard key={seller.id} homemaker={seller} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-charcoal/15 bg-white p-12 text-center text-sm text-charcoal/50">
            Loading verified Colombo homemakers…
          </div>
        )}
      </section>

      {/* 5. How it works */}
      <section className="border-y border-charcoal/5 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-clay">How it works</span>
            <h2 className="mt-1 font-display text-3xl font-bold text-ink sm:text-4xl">
              Three simple steps
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["01", "Search", "Find a service, product or homemaker in your preferred Colombo area."],
              ["02", "Contact on WhatsApp", "Ask about availability, pricing, ingredients, sizing or collection details."],
              ["03", "Meet your homemaker", "Agree directly, receive the work, and leave an honest review afterward."],
            ].map(([number, title, copy]) => (
              <div key={number} className="rounded-2xl border border-charcoal/10 bg-paper/45 p-6">
                <span className="font-mono text-xs font-bold text-turmeric">{number}</span>
                <h3 className="mt-3 font-display text-xl font-bold text-charcoal">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-charcoal/65">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Mission */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-charcoal/5 bg-white p-8 text-center shadow-sm sm:p-12">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-turmeric">
              Why support women homemakers?
            </span>
            <h2 className="mx-auto mt-2 max-w-3xl font-display text-3xl font-bold text-ink sm:text-4xl">
              Every local order helps turn a home skill into independent income.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-charcoal/70">
              Many Colombo women already cook, stitch, teach and create at a professional level,
              but lack an affordable way to be discovered online. Her HomeNest gives them a visible,
              zero-commission storefront while customers gain access to trusted neighbourhood talent.
              Money stays with the maker, families gain resilience, and local skills keep growing.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Reviews */}
      <section className="border-y border-charcoal/5 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-clay">Customer reviews</span>
            <h2 className="mt-1 font-display text-3xl font-bold text-ink sm:text-4xl">
              Trust built one local order at a time
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="rounded-2xl border border-charcoal/10 bg-paper/35 p-6">
                <div className="text-sm tracking-wider text-turmeric">★★★★★</div>
                <blockquote className="mt-3 text-xs leading-relaxed text-charcoal/75">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-dashed border-charcoal/10 pt-4">
                  <p className="text-xs font-bold text-charcoal">{testimonial.name}</p>
                  <p className="mt-0.5 font-mono text-[10px] text-charcoal/50">{testimonial.area}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Seller recruitment CTA */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border-2 border-dashed border-turmeric/40 bg-ink p-8 text-paper shadow-xl sm:p-12">
          <div className="relative z-10 max-w-3xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-turmeric">
              For Colombo women entrepreneurs
            </span>
            <h2 className="mt-3 font-display text-3xl font-medium text-white sm:text-5xl">
              Are you a homemaker in Colombo? Join free.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-paper/80">
              Create your profile, add your products or services, submit them for admin verification,
              and receive customer enquiries directly on WhatsApp. No marketplace commission.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/register"
                className="rounded-xl bg-turmeric px-7 py-3.5 text-center text-xs font-bold uppercase tracking-wider text-ink hover:bg-turmeric/90"
              >
                Register as a homemaker
              </Link>
              <Link
                href="/about"
                className="rounded-xl border border-paper/20 bg-white/10 px-7 py-3.5 text-center text-xs font-bold uppercase tracking-wider text-paper hover:bg-white/15"
              >
                Learn about verification
              </Link>
            </div>
          </div>
          <MessageCircle className="absolute -bottom-12 -right-8 h-64 w-64 text-white/[0.04]" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
