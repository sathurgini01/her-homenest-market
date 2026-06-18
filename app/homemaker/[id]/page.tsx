"use client";

import React, { use, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getActiveSession, getStoredHomemakers, saveHomemakers } from "@/lib/mock-data";
import { Homemaker, Review } from "@/lib/types";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RatingStars } from "@/components/RatingStars";
import { VerifiedBadge } from "@/components/VerifiedBadge";
import { StitchDivider } from "@/components/StitchDivider";

interface HomemakerProfileProps {
  params: Promise<{
    id: string;
  }>;
}

export default function HomemakerProfilePage({ params }: HomemakerProfileProps) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const [sellers, setSellers] = useState<Homemaker[]>([]);
  const [homemaker, setHomemaker] = useState<Homemaker | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shareMessage, setShareMessage] = useState("");

  // Review Form States
  const [reviewName, setReviewName] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState("");
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const handleSync = () => {
      const list = getStoredHomemakers();
      setSellers(list);
      const found = list.find((h) => h.id === id);
      const session = getActiveSession();
      const canPreview =
        session.role === "Admin" ||
        (session.role === "Homemaker" && session.homemakerId === found?.id);
      if (found?.verified || (found && canPreview)) {
        setHomemaker(found);
      }
      setIsLoaded(true);
    };
    setTimeout(handleSync, 0);
  }, [id]);

  if (!isLoaded || !homemaker) {
    return (
      <div className="min-h-screen bg-paper flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center py-24 text-center">
          <span className="text-4xl">{isLoaded ? "🏜️" : "⏳"}</span>
          <h2 className="font-display text-2xl font-bold text-charcoal mt-2">
            {isLoaded ? "Homemaker Shop Not Available" : "Loading shop…"}
          </h2>
          {isLoaded && (
            <p className="text-xs text-charcoal/50 mt-1 mb-4">
              This profile may be awaiting verification, suspended, or no longer available.
            </p>
          )}
          <Link href="/explore" className="bg-ink text-paper px-4 py-2 rounded-lg text-xs font-bold uppercase font-mono tracking-wider">
            Explore All Shops
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Pre-filled WhatsApp and Call Actions
  const whatsappMessage = `Hello ${homemaker.ownerFirstName}, I saw your shop "${homemaker.businessName}" on Her HomeNest Market and would like to inquire about your offerings.`;
  const whatsappUrl = `https://wa.me/${homemaker.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const callUrl = `tel:${homemaker.whatsappNumber}`;
  const approvedReviews = homemaker.reviews.filter((review) => review.status !== "pending");
  const ratingCounts = [5, 4, 3, 2, 1].map((rating) => ({
    rating,
    count: approvedReviews.filter((review) => Math.round(review.rating) === rating).length,
  }));

  // Interactive review submit handler
  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewName.trim() || !reviewComment.trim()) {
      setErrorMessage("Please fill out your name and write a sincere comment.");
      return;
    }

    const newReview: Review = {
      id: `r_${Date.now()}`,
      customerName: reviewName.trim(),
      rating: reviewRating,
      comment: reviewComment.trim(),
      date: new Date().toISOString().split("T")[0],
      status: "pending",
    };

    const updatedReviews = [newReview, ...homemaker.reviews];

    const updatedHomemaker: Homemaker = {
      ...homemaker,
      reviews: updatedReviews,
    };

    // Save in master list
    const updatedList = sellers.map((s) => (s.id === homemaker.id ? updatedHomemaker : s));
    saveHomemakers(updatedList);
    
    // Update local state views
    setSellers(updatedList);
    setHomemaker(updatedHomemaker);
    setReviewName("");
    setReviewComment("");
    setReviewRating(5);
    setReviewSubmitted(true);
    setErrorMessage("");

    setTimeout(() => {
      setReviewSubmitted(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-paper flex flex-col font-sans text-charcoal">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        
        {/* Navigation Breadcrumbs */}
        <div className="mb-6 flex items-center gap-1.5 text-xs font-mono text-charcoal/50">
          <Link href="/" className="hover:text-ink">Home</Link>
          <span>/</span>
          <Link href="/explore" className="hover:text-ink">Explore</Link>
          <span>/</span>
          <span className="text-charcoal/80 font-bold">{homemaker.businessName}</span>
        </div>

        {/* PROFILE COVER BANNER */}
        <div className="bg-white rounded-3xl border-2 border-charcoal/5 overflow-hidden shadow-sm p-6 sm:p-10 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Gallery Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-charcoal/10 border border-charcoal/5 shadow-md">
                <Image
                  src={homemaker.photos[0] || "https://picsum.photos/seed/shop/600/450"}
                  alt={homemaker.businessName}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>

              {/* Overlapping secondary thumbnail if exists */}
              {homemaker.photos[1] && (
                <div className="absolute right-[-20px] bottom-[-20px] w-36 h-28 hidden sm:block rounded-xl overflow-hidden border-4 border-white shadow-xl rotate-3">
                  <Image
                    src={homemaker.photos[1]}
                    alt="Secondary view"
                    fill
                    sizes="144px"
                    className="object-cover"
                  />
                </div>
              )}
            </div>

            {/* Profile Header copy */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-ink text-paper text-[10px] uppercase font-mono tracking-widest font-semibold px-2.5 py-1 rounded">
                  {homemaker.category}
                </span>
                {homemaker.verified && <VerifiedBadge showText={true} />}
                
                {homemaker.availableToday ? (
                  <span className="bg-betel/15 text-betel text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-betel animate-ping"></span>
                    Available Today
                  </span>
                ) : (
                  <span className="bg-charcoal/10 text-charcoal/60 text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded">
                    Taking Orders for Later
                  </span>
                )}
              </div>

              {/* Large newsreader header matching Image 3 style */}
              <h1 className="font-display text-3xl sm:text-4.5xl font-bold tracking-tight text-ink leading-tight">
                {homemaker.businessName}
              </h1>

              {/* Owner details */}
              <div className="flex items-center gap-6 pb-2 border-b border-dashed border-charcoal/10 font-mono text-xs text-charcoal/60">
                <p>📍 Shop Area: <span className="text-charcoal font-bold font-sans">{homemaker.area}</span></p>
                <p>👩 Owner: <span className="text-charcoal font-bold font-sans">{homemaker.ownerFirstName}</span></p>
                <div className="flex items-center gap-1" title={`${homemaker.rating} out of 5 stars`}>
                  <span className="text-[10px] text-turmeric">★</span>
                  <span className="text-charcoal font-bold">{homemaker.rating}</span>
                  <span>({homemaker.reviewCount} customer reviews)</span>
                </div>
              </div>

              {/* Bio in owner's voice */}
              <div className="space-y-2">
                <span className="font-mono text-[9px] uppercase tracking-wider text-clay font-bold block">Our Sincere Story</span>
                <p className="text-sm text-charcoal/80 leading-relaxed font-sans italic">
                  &quot;{homemaker.bio}&quot;
                </p>
              </div>

              {/* Interactive Contact Actions - WA.me */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                
                {/* PRIMARY CTA */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex select-none cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_7px_18px_rgba(37,211,102,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#20BD5A] hover:shadow-[0_10px_24px_rgba(37,211,102,0.36)]"
                >
                  <svg className="w-4.5 h-4.5 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.446L0 24zm6.59-4.846c1.6.95 3.1 1.4 4.8 1.4 5.4 0 9.8-4.4 9.8-9.8s-4.4-9.8-9.8-9.8-9.8 4.4-9.8 9.8c0 1.8.5 3.5 1.4 4.9l-.9 3.2 3.3-.9z" />
                  </svg>
                  <span>Chat over WhatsApp</span>
                </a>

                {/* SECONDARY CALL */}
                <a
                  href={callUrl}
                  className="bg-paper hover:bg-ink hover:text-paper text-ink border-2 border-ink/40 font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer text-center"
                >
                  📞 Direct Phone Call
                </a>

                {/* SHARE INFO */}
                <button
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(window.location.href);
                      setShareMessage("Shop link copied");
                    } catch {
                      setShareMessage("Copy failed — use your browser address bar");
                    }
                    setTimeout(() => setShareMessage(""), 2500);
                  }}
                  className="bg-paper text-charcoal/70 hover:bg-paper/80 font-semibold text-xs py-3.5 px-4 rounded-xl border border-charcoal/15 transition-all text-center"
                >
                  🔗 Share Shop
                </button>
                <span className="self-center text-[10px] text-charcoal/55" aria-live="polite">
                  {shareMessage}
                </span>

              </div>
              
            </div>

          </div>
        </div>

        {/* SEWING ACCENT LINE */}
        <StitchDivider />

        {/* LISTINGS SECTION */}
        <section className="py-10">
          <div className="mb-8">
            <span className="font-mono text-xs text-clay font-bold uppercase tracking-wider block">Our Specialties</span>
            <h2 className="font-display text-2.5xl font-bold text-ink">
              Products, Menus &amp; Services Listings
            </h2>
            <p className="text-xs text-charcoal/50 mt-0.5">
              Select any item. When you chat with us, let us know what quantities or fittings you are sizing up!
            </p>
          </div>

          {homemaker.listings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {homemaker.listings.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-charcoal/10 overflow-hidden shadow-sm flex flex-col hover:border-turmeric/60 transition-colors"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-charcoal/5">
                    <Image
                      src={item.photo || "https://picsum.photos/seed/serving/400/250"}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-display text-lg font-bold text-charcoal line-clamp-1 leading-tight">
                          {item.name}
                        </h3>
                        <span className="font-mono text-xs font-bold text-ink bg-paper px-2 py-0.5 rounded whitespace-nowrap">
                          LKR {item.price.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-xs text-charcoal/70 leading-relaxed font-sans line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-dashed border-charcoal/10">
                      <a
                        href={`https://wa.me/${homemaker.whatsappNumber}?text=Hello%20${homemaker.ownerFirstName},%20I%20saw%20your%20listing%20"${encodeURIComponent(item.name)}"%20(LKR%20${item.price})%20on%20Her%20HomeNest%20Market%20and%20would%20love%20to%20order/inquire%20about%20it!`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full select-none cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-[#25D366]/40 bg-[#25D366]/10 py-2 text-center font-mono text-xs font-bold uppercase tracking-wider text-[#128C4A] transition-all hover:bg-[#25D366] hover:text-white"
                      >
                        🛍️ Order this Item
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 text-center border border-dashed border-charcoal/15 max-w-sm mx-auto">
              <p className="text-xs text-charcoal/50">No itemized listings cataloged yet.</p>
            </div>
          )}
        </section>

        {/* RUNNING STITCH */}
        <StitchDivider />

        {/* REVIEWS SECTION */}
        <section className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Star Breakdowns & Add Form */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-mono text-xs text-clay font-bold uppercase tracking-wider block">Customer Trust</span>
              <h2 className="font-display text-2xl font-bold text-ink">
                Ratings Breakdown
              </h2>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-charcoal/5 shadow-sm flex items-center gap-6">
              <div className="text-center space-y-1">
                <span className="font-mono text-4xl sm:text-5xl font-extrabold text-ink block">{homemaker.rating}</span>
                <RatingStars rating={homemaker.rating} size={4} />
                <span className="font-mono text-[9px] uppercase tracking-wider text-charcoal/40 block">Based on {approvedReviews.length} approved reviews</span>
              </div>
              <div className="flex-1 space-y-1">
                {ratingCounts.map(({ rating, count }) => (
                  <div key={rating} className="flex items-center justify-between text-[10px] text-charcoal/65">
                    <span>{rating} star</span>
                    <span>{count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Leave a review Form */}
            <form onSubmit={handleReviewSubmit} className="bg-white p-6 rounded-2xl border border-charcoal/10 shadow-sm space-y-4">
              <h3 className="font-display text-lg font-bold text-charcoal">
                Leave a Review
              </h3>
              <p className="text-[11px] text-charcoal/50 leading-relaxed font-sans">
                Reviews are held for admin moderation before appearing publicly. Please share only a genuine customer experience.
              </p>

              {errorMessage && (
                <div className="bg-clay/10 border border-clay/20 text-clay text-xs p-2 rounded-lg font-mono">
                  ⚠️ {errorMessage}
                </div>
              )}

              {reviewSubmitted && (
                <div className="bg-betel/10 border border-betel/20 text-betel text-xs p-3 rounded-lg font-mono">
                  Review submitted for moderation. Thank you.
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono">Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. Priyantha Cooray"
                  value={reviewName}
                  onChange={(e) => setReviewName(e.target.value)}
                  className="w-full bg-paper/50 rounded-lg py-2 px-3 text-sm text-charcoal border border-charcoal/15 focus:outline-none focus:border-ink transition-colors"
                />
              </div>

              {/* Star Rating selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono block">Product Rating</label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setReviewRating(star)}
                      className="text-xl focus:outline-none transition-transform hover:scale-110"
                    >
                      {star <= reviewRating ? "★" : "☆"}
                    </button>
                  ))}
                  <span className="text-xs font-mono text-charcoal/50 ml-2">({reviewRating} / 5 stars)</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono">Review comment</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about the hygiene, taste speed, alterations quality, or lessons..."
                  value={reviewComment}
                  onChange={(e) => setReviewComment(e.target.value)}
                  className="w-full bg-paper/50 rounded-lg py-2 px-3 text-xs text-charcoal border border-charcoal/15 focus:outline-none focus:border-ink transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-ink hover:bg-ink/90 text-paper font-bold text-xs uppercase tracking-wider py-3 rounded-lg transition-colors cursor-pointer"
              >
                Submit My Review
              </button>
            </form>
          </div>

          {/* Right: Listed Reviews Stream */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-display text-xl font-bold text-charcoal">
              Homemaker Guestbook &amp; Feedback
            </h3>

            {approvedReviews.length > 0 ? (
              <div className="space-y-4 max-h-[640px] overflow-y-auto pr-2">
                {approvedReviews.map((rev) => (
                  <div key={rev.id} className="bg-white p-5 rounded-2xl border border-charcoal/5 shadow-sm space-y-2.5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h4 className="font-display font-bold text-sm text-charcoal">{rev.customerName}</h4>
                        <span className="font-mono text-[9px] text-charcoal/40 uppercase block">Reviewed: {rev.date}</span>
                      </div>
                      <RatingStars rating={rev.rating} size={3.5} />
                    </div>
                    <p className="text-xs text-charcoal/75 italic leading-relaxed font-sans">
                      &quot;{rev.comment}&quot;
                    </p>
                    <span className="text-[8px] font-mono text-charcoal/45 uppercase font-bold tracking-wider">
                      Moderated customer review
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-2xl text-center border border-dashed border-charcoal/10">
                <span className="text-2xl block mb-2">🎁</span>
                <p className="text-xs text-charcoal/50">Be the first to share a genuine experience with this homemaker.</p>
              </div>
            )}
          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}
