"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getStoredHomemakers, saveHomemakers, CATEGORIES, COLOMBO_AREAS } from "@/lib/mock-data";
import { Homemaker, Category, Review } from "@/lib/types";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StitchDivider } from "@/components/StitchDivider";
import { VerifiedBadge } from "@/components/VerifiedBadge";

export default function AdminDashboard() {
  const router = useRouter();

  // Master local storage references
  const [allSellers, setAllSellers] = useState<Homemaker[]>([]);
  const [categoriesList, setCategoriesList] = useState<string[]>([]);
  
  // Tab controller
  const [adminTab, setAdminTab] = useState<"snapshot" | "approvals" | "featured" | "categories" | "reviews">("snapshot");
  
  // Category management input state
  const [newCategoryName, setNewCategoryName] = useState("");

  useEffect(() => {
    // Sync state
    const handleSync = () => {
      setAllSellers(getStoredHomemakers());
      setCategoriesList(CATEGORIES);
    };
    setTimeout(handleSync, 0);
  }, []);

  // Recount statistics
  const totalVerifiedCount = allSellers.filter((h) => h.verified).length;
  const totalPendingCount = allSellers.filter((h) => !h.verified).length;
  const totalFeaturedCount = allSellers.filter((h) => h.featured).length;
  
  // Flatten reviews for moderation table
  const allReviewsFlattened: Array<{ homemakerName: string; homemakerId: string; review: Review }> = [];
  allSellers.forEach((s) => {
    s.reviews.forEach((r) => {
      allReviewsFlattened.push({
        homemakerName: s.businessName,
        homemakerId: s.id,
        review: r
      });
    });
  });

  // Action: Approve Profile (FR-9)
  const handleApproveProfile = (id: string) => {
    const updated = allSellers.map((s) => {
      if (s.id === id) {
        return { ...s, verified: true };
      }
      return s;
    });
    saveHomemakers(updated);
    setAllSellers(updated);
  };

  // Action: Suspend/Reject Profile (FR-9)
  const handleSuspendProfile = (id: string) => {
    const updated = allSellers.map((s) => {
      if (s.id === id) {
        return { ...s, verified: false, featured: false }; // Also unfeature if suspended
      }
      return s;
    });
    saveHomemakers(updated);
    setAllSellers(updated);
  };

  // Action: Toggle Featured status (FR-11)
  const handleToggleFeatured = (id: string) => {
    const updated = allSellers.map((s) => {
      if (s.id === id) {
        return { ...s, featured: !s.featured };
      }
      return s;
    });
    saveHomemakers(updated);
    setAllSellers(updated);
  };

  // Action: Moderating reviews - deleting (FR-12)
  const handleDeleteReview = (homemakerId: string, reviewId: string) => {
    const updated = allSellers.map((s) => {
      if (s.id === homemakerId) {
        return {
          ...s,
          reviews: s.reviews.filter((r) => r.id !== reviewId)
        };
      }
      return s;
    });
    saveHomemakers(updated);
    setAllSellers(updated);
  };

  // Action: Add dynamic Category (FR-10)
  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCategoryName.trim()) return;
    if (categoriesList.includes(newCategoryName.trim())) {
      alert("This category structure already exists!");
      return;
    }
    const updated = [newCategoryName.trim(), ...categoriesList];
    setCategoriesList(updated);
    // Note: Since CATEGORIES is static mock import, we append to page state.
    // In actual database integration, Category is structured inside Postgres rows.
    setNewCategoryName("");
  };

  // Action: Delete Category (FR-10)
  const handleDeleteCategory = (catName: string) => {
    setCategoriesList(categoriesList.filter((c) => c !== catName));
  };

  return (
    <div className="min-h-screen bg-paper flex flex-col font-sans text-charcoal selection:bg-turmeric/30 selection:text-ink">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 space-y-8">
        
        {/* Hub Header */}
        <div className="bg-white p-6 rounded-3xl border-2 border-charcoal/5 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-0.5">
            <span className="font-mono text-xs text-clay font-bold uppercase tracking-wider block">Admin Panel Gateway</span>
            <h1 className="font-display text-2xl sm:text-3.5xl font-bold text-ink flex items-center gap-2">
              Platform Vetting Office 🛡️
            </h1>
            <p className="text-xs text-charcoal/50">Manage approvals, home seller features, custom categories, and check reviews.</p>
          </div>
          <span className="bg-clay text-white text-[10px] font-mono px-3 py-1 rounded font-bold uppercase">
            SIMULATED Platform Boss Mode
          </span>
        </div>

        {/* WORKSPACE SECTIONS MENU TABS */}
        <div className="flex items-center gap-1 overflow-x-auto pb-2 border-b border-dashed border-charcoal/20 select-none">
          <button
            onClick={() => setAdminTab("snapshot")}
            className={`whitespace-nowrap px-4 py-2.5 rounded-lg text-xs font-bold uppercase transition-all flex items-center gap-2 cursor-pointer ${
              adminTab === "snapshot" ? "bg-ink text-paper font-bold shadow" : "text-charcoal/70 hover:bg-paper/80"
            }`}
          >
            📊 Snapshot
          </button>
          <button
            onClick={() => setAdminTab("approvals")}
            className={`whitespace-nowrap px-4 py-2.5 rounded-lg text-xs font-bold uppercase transition-all flex items-center gap-2 cursor-pointer ${
              adminTab === "approvals" ? "bg-ink text-paper font-bold shadow" : "text-charcoal/70 hover:bg-paper/80"
            }`}
          >
            ⏳ Homemaker Verification Center ({totalPendingCount} Pending)
          </button>
          <button
            onClick={() => setAdminTab("featured")}
            className={`whitespace-nowrap px-4 py-2.5 rounded-lg text-xs font-bold uppercase transition-all flex items-center gap-2 cursor-pointer ${
              adminTab === "featured" ? "bg-ink text-paper font-bold shadow" : "text-charcoal/70 hover:bg-paper/80"
            }`}
          >
            🎀 Homepage Featured Manager ({totalFeaturedCount} Active)
          </button>
          <button
            onClick={() => setAdminTab("categories")}
            className={`whitespace-nowrap px-4 py-2.5 rounded-lg text-xs font-bold uppercase transition-all flex items-center gap-2 cursor-pointer ${
              adminTab === "categories" ? "bg-ink text-paper font-bold shadow" : "text-charcoal/70 hover:bg-paper/80"
            }`}
          >
            📂 Manage Categories ({categoriesList.length})
          </button>
          <button
            onClick={() => setAdminTab("reviews")}
            className={`whitespace-nowrap px-4 py-2.5 rounded-lg text-xs font-bold uppercase transition-all flex items-center gap-2 cursor-pointer ${
              adminTab === "reviews" ? "bg-ink text-paper font-bold shadow" : "text-charcoal/70 hover:bg-paper/80"
            }`}
          >
            🧼 Moderate Reviews ({allReviewsFlattened.length})
          </button>
        </div>

        {/* TAB 1: SNAPSHOT */}
        {adminTab === "snapshot" && (
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-charcoal/5 shadow-sm space-y-1">
              <span className="text-3xl">⏳</span>
              <h3 className="font-mono text-xs uppercase tracking-wider text-charcoal/50">Pending Approvals</h3>
              <p className="font-mono text-3xl font-extrabold text-clay">{totalPendingCount} pending</p>
              <p className="text-[10px] text-charcoal/50">Vetting required prior to public placement.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-charcoal/5 shadow-sm space-y-1">
              <span className="text-3xl">👥</span>
              <h3 className="font-mono text-xs uppercase tracking-wider text-charcoal/50">Total Registered</h3>
              <p className="font-mono text-3xl font-extrabold text-ink">{allSellers.length} homemakers</p>
              <p className="text-[10px] text-charcoal/50">Accumulated count across Colombo.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-charcoal/5 shadow-sm space-y-1">
              <span className="text-3xl">⭐️</span>
              <h3 className="font-mono text-xs uppercase tracking-wider text-charcoal/50">Featured Roster</h3>
              <p className="font-mono text-3xl font-extrabold text-turmeric">{totalFeaturedCount} featured</p>
              <p className="text-[10px] text-charcoal/50">Showcased under Homepage Carousel.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-charcoal/5 shadow-sm space-y-1">
              <span className="text-3xl">💬</span>
              <h3 className="font-mono text-xs uppercase tracking-wider text-charcoal/50">Vetted Reviews</h3>
              <p className="font-mono text-3xl font-extrabold text-betel">{allReviewsFlattened.length} comments</p>
              <p className="text-[10px] text-charcoal/50">Moderated and checked for spam triggers.</p>
            </div>

            {/* Simulated instructions */}
            <div className="sm:col-span-4 bg-ink text-paper p-6 rounded-3xl border border-dashed border-turmeric/30">
              <h3 className="font-display text-lg text-white font-medium mb-1.5">🛡️ Admin Simulation Sandbox Info</h3>
              <p className="text-xs text-paper/85 leading-relaxed font-sans">
                This screen fully tests administrator workflows! For example, when you onboard a new seller and click <strong className="text-turmeric">Approve &amp; Publish</strong> under the approvals table, the brand&apos;s verified flag becomes active in local storage. You can instantly open the public <Link href="/explore" className="underline font-bold text-white hover:text-turmeric">Explore page</Link> to check how local filters update.
              </p>
            </div>
          </div>
        )}

        {/* TAB 2: HOMEMAKER APROVALS (FR-9) */}
        {adminTab === "approvals" && (
          <div className="bg-white rounded-3xl border border-charcoal/15 overflow-hidden shadow-sm">
            <div className="p-6 border-b border-charcoal/5">
              <h3 className="font-display text-xl font-bold text-ink">Colombo Vetting Queue</h3>
              <p className="text-xs text-charcoal/50 mt-0.5">Approve newly submitted homemaker sellers or suspend existing ones to pull them from search (FR-9).</p>
            </div>

            {allSellers.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-paper/50 font-mono tracking-wider upper text-charcoal/50 border-b border-charcoal/10">
                      <th className="p-4 font-bold">Business / Owner</th>
                      <th className="p-4 font-bold">Core Category</th>
                      <th className="p-4 font-bold">Locality</th>
                      <th className="p-4 font-bold">Verified Status</th>
                      <th className="p-4 font-bold text-right">Verification Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-charcoal/10 font-sans">
                    {allSellers.map((seller) => (
                      <tr key={seller.id} className="hover:bg-paper/20">
                        <td className="p-4">
                          <div className="font-bold text-charcoal text-sm">{seller.businessName}</div>
                          <div className="text-[10px] text-charcoal/40 font-mono">Owner: {seller.ownerFirstName} • Code {seller.id}</div>
                        </td>
                        <td className="p-4 font-mono font-semibold">{seller.category}</td>
                        <td className="p-4 font-semibold">📍 {seller.area}</td>
                        <td className="p-4">
                          {seller.verified ? (
                            <span className="inline-flex items-center gap-1 bg-betel/15 text-betel px-2 py-0.5 rounded font-mono text-[9px] uppercase font-bold">
                              ✓ Vetted &amp; Published
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 bg-clay/10 text-clay px-2 py-0.5 rounded font-mono text-[9px] uppercase font-bold">
                              ⌛ Pending Review
                            </span>
                          )}
                        </td>
                        <td className="p-4 text-right">
                          {seller.verified ? (
                            <button
                              onClick={() => handleSuspendProfile(seller.id)}
                              className="bg-clay bg-opacity-10 text-clay hover:bg-clay hover:text-white border border-clay/10 py-1.5 px-3 rounded font-mono text-[10px] uppercase font-bold transition-colors cursor-pointer"
                            >
                              🛑 Suspend Visibility
                            </button>
                          ) : (
                            <button
                              onClick={() => handleApproveProfile(seller.id)}
                              className="bg-betel text-white hover:bg-betel/90 py-1.5 px-3.5 rounded font-mono text-[10px] uppercase font-bold transition-all cursor-pointer shadow-sm"
                            >
                              ✅ Approve &amp; Publish
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-12 text-center text-charcoal/40 font-sans">No homemakers listed in temporary storage.</div>
            )}
          </div>
        )}

        {/* TAB 3: FEATURED MANAGEMENT (FR-11) */}
        {adminTab === "featured" && (
          <div className="bg-white rounded-3xl border border-charcoal/15 overflow-hidden shadow-sm">
            <div className="p-6 border-b border-charcoal/5">
              <h3 className="font-display text-xl font-bold text-ink">Manage Featured Sellers</h3>
              <p className="text-xs text-charcoal/50 mt-0.5">Toggle homepage showcase flags for vetted shop owners (FR-11).</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-paper/50 font-mono tracking-wider text-charcoal/50 border-b border-charcoal/10">
                    <th className="p-4 font-bold">Shop Brand</th>
                    <th className="p-4 font-bold">Rating Stats</th>
                    <th className="p-4 font-bold">Featured Status</th>
                    <th className="p-4 font-bold text-right">Homepage Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal/10">
                  {allSellers.map((seller) => (
                    <tr key={seller.id} className="hover:bg-paper/20">
                      <td className="p-4">
                        <div className="font-bold text-charcoal text-sm">{seller.businessName}</div>
                        <div className="text-[10px] text-charcoal/40 font-mono">📍 {seller.area} • Category: {seller.category}</div>
                      </td>
                      <td className="p-4 font-mono">
                        ⭐ {seller.rating} ({seller.reviewCount} customer reviews)
                      </td>
                      <td className="p-4">
                        {seller.featured ? (
                          <span className="bg-turmeric text-ink font-mono text-[9px] uppercase font-bold px-2.5 py-0.5 rounded shadow">
                            ★ Featured Banner Active
                          </span>
                        ) : (
                          <span className="text-charcoal/40 font-mono text-[9px]">Standard listing pool</span>
                        )}
                      </td>
                      <td className="p-4 text-right">
                        {seller.featured ? (
                          <button
                            onClick={() => handleToggleFeatured(seller.id)}
                            className="bg-charcoal/15 text-charcoal hover:bg-charcoal/30 py-1 px-2.5 rounded font-mono text-[9px] uppercase font-bold transition-all cursor-pointer"
                          >
                            Remove Feature
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              if (!seller.verified) {
                                alert("You must approve a shop profile's verification status before making it featured!");
                                return;
                              }
                              handleToggleFeatured(seller.id);
                            }}
                            className={`py-1 px-2.5 rounded font-mono text-[9px] uppercase font-bold transition-all cursor-pointer ${
                              seller.verified 
                                ? "bg-turmeric text-ink hover:bg-turmeric/90 shadow-sm" 
                                : "bg-charcoal/10 text-charcoal/30 cursor-not-allowed"
                            }`}
                          >
                            ★ Feature on Carousel
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 4: MANAGE CATEGORIES (FR-10) */}
        {adminTab === "categories" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Add form */}
            <form onSubmit={handleAddCategory} className="lg:col-span-5 bg-white p-6 rounded-3xl border border-charcoal/15 shadow-sm space-y-4 font-sans text-xs">
              <h3 className="font-display text-lg font-bold text-charcoal">Insert New Service Category</h3>
              <p className="text-[11px] text-charcoal/50 leading-relaxed">Expand the catalog groups shown across Colombo filters (FR-10).</p>
              
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono">Category Label</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Organic Produce &amp; Honey"
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  className="w-full bg-paper/50 rounded-lg py-2 px-3 text-sm text-charcoal border border-charcoal/15 focus:outline-none focus:border-ink"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-ink hover:bg-ink/90 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-lg transition-colors cursor-pointer text-center"
              >
                Insert Category
              </button>
            </form>

            {/* List and deletes */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-charcoal/15 overflow-hidden shadow-sm">
              <div className="p-6 border-b border-charcoal/5">
                <h3 className="font-display text-xl font-bold text-ink">Platform Core Categories</h3>
                <p className="text-xs text-charcoal/50 mt-0.5">Vetted list displayed under navigation bars and filter sheets (FR-10).</p>
              </div>

              <div className="p-4 space-y-2">
                {categoriesList.map((catName) => (
                  <div key={catName} className="flex items-center justify-between p-3 bg-paper/40 border rounded-xl hover:bg-paper/60 transition-colors">
                    <span className="text-xs font-bold text-charcoal leading-none">📂 {catName}</span>
                    <button
                      type="button"
                      onClick={() => handleDeleteCategory(catName)}
                      className="text-clay hover:underline font-mono text-[10px] font-bold uppercase transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 5: MODERATE REVIEWS (FR-12) */}
        {adminTab === "reviews" && (
          <div className="bg-white rounded-3xl border border-charcoal/15 overflow-hidden shadow-sm">
            <div className="p-6 border-b border-charcoal/5">
              <h3 className="font-display text-xl font-bold text-ink">Moderate Platform Guestbook</h3>
              <p className="text-xs text-charcoal/50 mt-0.5">Delete spam, competitive insults, or inappropriate comments (FR-12).</p>
            </div>

            {allReviewsFlattened.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-paper/50 font-mono tracking-wider text-charcoal/50 border-b border-charcoal/10">
                      <th className="p-4 font-bold">Review Description / Author</th>
                      <th className="p-4 font-bold">Target Homemaker Shop</th>
                      <th className="p-4 font-bold">Stars</th>
                      <th className="p-4 font-bold text-right">Vetting Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-charcoal/10">
                    {allReviewsFlattened.map(({ homemakerId, homemakerName, review }) => (
                      <tr key={review.id} className="hover:bg-paper/20">
                        <td className="p-4 max-w-sm">
                          <p className="font-sans text-charcoal/85 italic leading-relaxed">&quot;{review.comment}&quot;</p>
                          <span className="font-mono text-[9px] text-charcoal/40 uppercase block mt-1.5">
                            By {review.customerName} on {review.date}
                          </span>
                        </td>
                        <td className="p-4 text-sm font-semibold text-charcoal">{homemakerName}</td>
                        <td className="p-4 font-mono font-bold text-turmeric">⭐ {review.rating}</td>
                        <td className="p-4 text-right">
                          <button
                            onClick={() => {
                              if (confirm(`Irreversibly delete review by "${review.customerName}"?`)) {
                                handleDeleteReview(homemakerId, review.id);
                              }
                            }}
                            className="bg-clay/10 text-clay hover:bg-clay hover:text-white border border-clay/20 font-bold font-mono text-[10px] uppercase tracking-wider py-1 px-2.5 rounded-lg transition-colors cursor-pointer"
                          >
                            Delete Review
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-12 text-center text-charcoal/40 font-sans">No client reviews submitted in temporary local storage.</div>
            )}
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
