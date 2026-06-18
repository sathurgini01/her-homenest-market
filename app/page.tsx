"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Gift, Heart, MapPin, MessageCircle, Search, ShieldCheck, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HomemakerCard } from "@/components/HomemakerCard";
import { VerifiedBadge } from "@/components/VerifiedBadge";
import { getPublicHomemakers } from "@/lib/mock-data";
import { Homemaker } from "@/lib/types";
import {
  CATEGORY_DETAILS,
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

const giftIdeas = [
  {
    title: "Personalised Keepsakes",
    copy: "Hand embroidery, custom name hoops and thoughtful details made for weddings, new homes and milestones.",
    image: "/marketplace/floral-embroidery-hoop.png",
    href: "/category/handicrafts",
    label: "Made to remember",
    price: "From LKR 1,800",
  },
  {
    title: "Little Joy Gift Sets",
    copy: "Playful mini bags and handmade accessories curated for children’s birthdays and family celebrations.",
    image: "/marketplace/animal-mini-bags.png",
    href: "/category/bags-and-pouches",
    label: "For little ones",
    price: "From LKR 1,250",
  },
  {
    title: "Wearable Handmade",
    copy: "Crochet bags and slow-made accessories for someone who loves practical craft with personality.",
    image: "/marketplace/crochet-handbags.png",
    href: "/category/home-to-wear-crossover",
    label: "Everyday craft",
    price: "From LKR 2,400",
  },
  {
    title: "Small Celebration Details",
    copy: "Fabric flower clips and colourful finishing touches for bridesmaids, parties and thoughtful add-on gifts.",
    image: "/marketplace/flower-hair-clips.png",
    href: "/category/hair-accessories",
    label: "Easy to personalise",
    price: "From LKR 650",
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
        className="relative overflow-hidden border-b border-white/10 bg-[#3b1f32] pb-16 pt-14 text-paper sm:pb-20 sm:pt-16"
        style={{
          backgroundImage:
            "linear-gradient(115deg,rgba(43,20,36,.98),rgba(67,31,55,.94) 52%,rgba(83,39,65,.88)),url('/topographic-pattern.svg')",
          backgroundSize: "cover, 720px 520px",
          backgroundPosition: "center",
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_35%,rgba(227,162,60,.18),transparent_30%),linear-gradient(to_bottom,transparent_70%,rgba(30,10,25,.38))]" />
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
                src="/hero-homemaker-artisan-v4.png"
                alt="Sri Lankan woman artisan presenting handmade gifts"
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

            <div className="absolute left-1/2 top-3 z-30 -translate-x-1/2 rounded-full border border-turmeric/40 bg-[#45243a]/95 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-turmeric">
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
            {CATEGORY_DETAILS.map((category) => (
              <Link
                key={category.name}
                href={`/category/${categoryToSlug(category.name)}`}
                className="group rounded-2xl border border-[#E7D9EA] bg-[#FAF5FC] p-5 shadow-[0_4px_16px_rgba(59,31,50,0.06)] transition-all hover:-translate-y-1 hover:border-[#B993B1] hover:bg-[#F7EFFA] hover:shadow-[0_12px_28px_rgba(59,31,50,0.12)]"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F0E5F3] text-2xl">
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
                    <span key={offering} className="rounded-full bg-[#F0E5F3] px-2.5 py-1 text-[10px] text-charcoal/70">
                      {offering}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Curated handmade gift discovery */}
      <section className="relative overflow-hidden border-b border-charcoal/5 bg-white py-16 sm:py-20">
        <div className="gift-orbit pointer-events-none absolute -left-20 top-20 h-56 w-56 rounded-full bg-[#E8D4ED]/55 blur-3xl" />
        <div className="gift-orbit-delayed pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-turmeric/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-clay">
                <Gift className="h-4 w-4" />
                Curated handmade gifting
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
                Gifts with a maker, a story and a personal touch.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-charcoal/65">
                Discover small-batch gifts made by Colombo women. Ask for colours, names, packaging
                and a message card directly from the maker.
              </p>
            </div>
            <Link
              href="/explore?search=handmade%20gift"
              className="group inline-flex w-fit items-center gap-2 rounded-xl border border-ink/15 bg-[#FAF2FC] px-5 py-3 text-xs font-bold uppercase tracking-wider text-ink transition-all hover:-translate-y-0.5 hover:border-[#B993B1] hover:shadow-lg"
            >
              Find a gift
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="gift-ticker mb-6 overflow-hidden rounded-full border border-[#E7D9EA] bg-[#FAF5FC] py-2.5">
            <div className="gift-ticker-track flex w-max items-center gap-3 whitespace-nowrap px-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-charcoal/55">
              {[0, 1].map((copyIndex) => (
                <React.Fragment key={copyIndex}>
                  {["Birthdays", "Weddings", "New homes", "Baby gifts", "Thank you", "Festivals", "Just because"].map(
                    (occasion) => (
                      <span key={`${copyIndex}-${occasion}`} className="inline-flex items-center gap-3">
                        {occasion}
                        <Sparkles className="h-3.5 w-3.5 text-turmeric" />
                      </span>
                    )
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-12">
            <Link
              href={giftIdeas[0].href}
              className="gift-card group relative min-h-[500px] overflow-hidden rounded-3xl bg-ink shadow-[0_20px_50px_rgba(59,31,50,0.18)] lg:col-span-7"
            >
              <Image
                src={giftIdeas[0].image}
                alt={giftIdeas[0].title}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#24101E] via-[#3B1F32]/35 to-transparent" />
              <span className="gift-sparkle absolute right-7 top-7 flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md">
                <Sparkles className="h-5 w-5" />
              </span>
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-widest backdrop-blur-md">
                  {giftIdeas[0].label}
                </span>
                <h3 className="mt-4 max-w-xl font-display text-3xl font-bold sm:text-4xl">{giftIdeas[0].title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/75">{giftIdeas[0].copy}</p>
                <div className="mt-5 flex items-center justify-between gap-4 border-t border-white/15 pt-4">
                  <span className="font-mono text-xs font-bold text-turmeric">{giftIdeas[0].price}</span>
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                    Explore idea <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>

            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5">
              {giftIdeas.slice(1).map((idea, index) => (
                <Link
                  key={idea.title}
                  href={idea.href}
                  className={`gift-card group overflow-hidden rounded-3xl border border-[#E7D9EA] bg-[#FAF5FC] shadow-[0_8px_24px_rgba(59,31,50,0.07)] transition-all hover:-translate-y-1 hover:border-[#B993B1] hover:shadow-[0_16px_32px_rgba(59,31,50,0.12)] ${
                    index === 0 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className={`relative overflow-hidden ${index === 0 ? "h-52" : "h-44"}`}>
                    <Image
                      src={idea.image}
                      alt={idea.title}
                      fill
                      sizes={index === 0 ? "(max-width: 1024px) 100vw, 42vw" : "(max-width: 640px) 100vw, 21vw"}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-wider text-ink shadow-sm backdrop-blur">
                      {idea.label}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl font-bold text-charcoal">{idea.title}</h3>
                      <Heart className="h-4 w-4 shrink-0 text-clay transition-transform group-hover:scale-110 group-hover:fill-clay/15" />
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-charcoal/60">{idea.copy}</p>
                    <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-wider text-clay">{idea.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-3 rounded-2xl border border-dashed border-[#D8BED8] bg-[#FAF2FC]/70 p-5 sm:grid-cols-3">
            {[
              ["01", "Choose an idea", "Browse by occasion, craft or budget."],
              ["02", "Personalise it", "Message the maker about colour, name and packaging."],
              ["03", "Plan ahead", "Confirm the lead time, price and collection date."],
            ].map(([number, title, copy]) => (
              <div key={number} className="flex gap-3 rounded-xl bg-white/70 p-4">
                <span className="font-mono text-xs font-bold text-turmeric">{number}</span>
                <div>
                  <p className="text-sm font-bold text-charcoal">{title}</p>
                  <p className="mt-1 text-[11px] leading-relaxed text-charcoal/55">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Marketplace proof */}
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

      {/* 6. How it works */}
      <section className="relative overflow-hidden border-y border-[#E7D9EA] bg-[linear-gradient(180deg,#FFFFFF_0%,#FCF8FD_100%)] py-20">
        <div className="how-glow pointer-events-none absolute left-1/2 top-12 h-64 w-64 -translate-x-1/2 rounded-full bg-[#EAD8EE]/55 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E7D9EA] bg-[#FAF2FC] px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-clay">
              <Sparkles className="h-3.5 w-3.5 text-turmeric" />
              How Her HomeNest works
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              From discovery to doorstep,
              <span className="block italic text-clay">simple and personal.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-charcoal/60">
              Find a trusted local maker, discuss exactly what you need and arrange your order directly.
            </p>
          </div>

          <div className="relative">
            <div className="how-progress absolute left-[16.5%] right-[16.5%] top-12 hidden h-px overflow-hidden bg-[#D8BED8] md:block">
              <span className="how-progress-beam block h-full w-1/3 bg-gradient-to-r from-transparent via-turmeric to-transparent" />
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Discover nearby talent",
                  copy: "Search by craft, service, product or Colombo neighbourhood and compare verified profiles.",
                  note: "Browse freely",
                  icon: Search,
                  tone: "plum",
                },
                {
                  number: "02",
                  title: "Chat on WhatsApp",
                  copy: "Confirm price, availability, custom colours, ingredients, sizing and delivery details.",
                  note: "Direct conversation",
                  icon: MessageCircle,
                  tone: "green",
                },
                {
                  number: "03",
                  title: "Receive & support",
                  copy: "Collect or receive your order, then leave an honest review that helps her business grow.",
                  note: "100% local impact",
                  icon: Heart,
                  tone: "clay",
                },
              ].map(({ number, title, copy, note, icon: Icon, tone }) => (
                <article
                  key={number}
                  className="how-step group relative rounded-3xl border border-[#E7D9EA] bg-white p-6 shadow-[0_12px_35px_rgba(59,31,50,0.07)] transition-all duration-300 hover:-translate-y-2 hover:border-[#CBA9CD] hover:shadow-[0_22px_45px_rgba(59,31,50,0.13)] sm:p-7"
                >
                  <div className="relative z-10 flex items-start justify-between">
                    <span
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl shadow-sm transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105 ${
                        tone === "green"
                          ? "bg-[#25D366] text-white shadow-[0_8px_20px_rgba(37,211,102,0.25)]"
                          : tone === "clay"
                            ? "bg-clay/12 text-clay"
                            : "bg-[#F0E5F3] text-ink"
                      }`}
                    >
                      <Icon className="h-7 w-7" strokeWidth={1.8} />
                    </span>
                    <span className="font-mono text-4xl font-bold text-[#EEE4EF] transition-colors group-hover:text-[#DEC9E1]">
                      {number}
                    </span>
                  </div>

                  <div className="mt-7">
                    <h3 className="font-display text-2xl font-bold text-charcoal">{title}</h3>
                    <p className="mt-3 min-h-14 text-sm leading-6 text-charcoal/60">{copy}</p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-dashed border-charcoal/10 pt-4">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-charcoal/45">
                      {note}
                    </span>
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        tone === "green" ? "bg-[#25D366]" : tone === "clay" ? "bg-clay" : "bg-turmeric"
                      }`}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-9 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#E7D9EA] bg-[#FAF2FC] px-6 py-5 sm:flex-row">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <ShieldCheck className="hidden h-9 w-9 shrink-0 text-betel sm:block" />
              <div>
                <p className="text-sm font-bold text-charcoal">No platform commission or complicated checkout.</p>
                <p className="mt-1 text-xs text-charcoal/55">You agree directly with the homemaker before placing an order.</p>
              </div>
            </div>
            <Link
              href="/explore"
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-ink px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-betel"
            >
              Start exploring
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Real marketplace standards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-[#D8BED8] bg-[#FAF2FC] shadow-[0_18px_50px_rgba(59,31,50,0.08)]">
            <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-clay">
                  Built for real home businesses
                </span>
                <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
                  Clear details before every local order.
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-charcoal/70">
                  Home-made products are personal and often made to order. Her HomeNest helps buyers
                  and homemakers confirm the important details early, so expectations stay clear from
                  the first message to collection or delivery.
                </p>

                <div className="mt-7 rounded-2xl border border-white/80 bg-white/70 p-5">
                  <p className="font-display text-lg font-bold text-charcoal">Before you confirm an order</p>
                  <ul className="mt-4 grid gap-3 text-xs leading-relaxed text-charcoal/70 sm:grid-cols-2 lg:grid-cols-1">
                    {[
                      "Confirm the final price and advance payment.",
                      "Ask about ingredients, allergens or materials.",
                      "Agree on size, quantity and custom changes.",
                      "Confirm pickup, delivery area and completion date.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#25D366]/15 text-[11px] font-bold text-[#128C4A]">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["✓", "Reviewed profiles", "Identity, location and sample work are checked before public approval."],
                  ["LKR", "Transparent listings", "Prices, lead times and available options help customers compare clearly."],
                  ["💬", "Direct communication", "Pre-filled WhatsApp enquiries make it easy to discuss custom requirements."],
                  ["★", "Community reviews", "Completed customers can share honest feedback that builds local trust."],
                ].map(([icon, title, copy]) => (
                  <article
                    key={title}
                    className="rounded-2xl border border-[#E7D9EA] bg-white p-5 shadow-[0_5px_18px_rgba(59,31,50,0.05)]"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F0E5F3] font-mono text-sm font-bold text-ink">
                      {icon}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-charcoal">{title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-charcoal/65">{copy}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between gap-4 border-t border-[#D8BED8] bg-white/55 px-7 py-5 sm:flex-row sm:items-center sm:px-10 lg:px-12">
              <p className="text-xs leading-relaxed text-charcoal/65">
                Are you a homemaker? Add clear photos, pricing and preparation times to receive better enquiries.
              </p>
              <Link
                href="/register"
                className="shrink-0 rounded-xl bg-ink px-5 py-3 text-center text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-betel"
              >
                Create your free shop
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Mission */}
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

      {/* 9. Reviews */}
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

      {/* 10. Seller recruitment CTA */}
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
