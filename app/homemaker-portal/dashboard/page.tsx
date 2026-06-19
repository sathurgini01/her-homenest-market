"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getStoredHomemakers, saveHomemakers, getStoredInquiries, saveInquiries, getActiveSession, CATEGORIES, COLOMBO_AREAS } from "@/lib/mock-data";
import { Homemaker, Listing, Inquiry, Category } from "@/lib/types";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RatingStars } from "@/components/RatingStars";
import { VerifiedBadge } from "@/components/VerifiedBadge";
import { StitchDivider } from "@/components/StitchDivider";

export default function HomemakerDashboard() {
  const router = useRouter();
  
  // States
  const [allSellers, setAllSellers] = useState<Homemaker[]>([]);
  const [homemaker, setHomemaker] = useState<Homemaker | null>(null);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  
  // Navigation tabs
  const [activeTab, setActiveTab] = useState<"snapshot" | "profile" | "listings" | "inquiries" | "reviews">("snapshot");
  
  // Listing form input states
  const [newItemName, setNewItemName] = useState("");
  const [newItemDesc, setNewItemDesc] = useState("");
  const [newItemPrice, setNewItemPrice] = useState("");
  const [newItemPhoto, setNewItemPhoto] = useState("https://images.unsplash.com/photo-1546272907-05578ffa3be0?w=600&auto=format&fit=crop&q=80");
  const [listingSuccess, setListingSuccess] = useState(false);

  // Profile forms state
  const [editingBusinessName, setEditingBusinessName] = useState("");
  const [editingOwnerFirstName, setEditingOwnerFirstName] = useState("");
  const [editingBio, setEditingBio] = useState("");
  const [editingWhatsapp, setEditingWhatsapp] = useState("");
  const [editingArea, setEditingArea] = useState("");
  const [editingCategory, setEditingCategory] = useState("");
  const [profileSaveSuccess, setProfileSaveSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    const handleSync = () => {
      // Resolve Session
      const activeSes = getActiveSession();
      if (activeSes.role !== "Homemaker" || !activeSes.homemakerId) {
        router.replace("/login?next=/homemaker-portal/dashboard");
        return;
      }

      // Resolve master lists
      const sellersList = getStoredHomemakers();
      setAllSellers(sellersList);

      // Filter inquiries
      const inquiriesList = getStoredInquiries();
      
      const activeId = activeSes.homemakerId;
      
      const bindedHomemaker = sellersList.find((h) => h.id === activeId);
      if (bindedHomemaker) {
        setHomemaker(bindedHomemaker);
        setInquiries(inquiriesList.filter((i) => i.homemakerId === bindedHomemaker.id));

        // Prep forms
        setEditingBusinessName(bindedHomemaker.businessName);
        setEditingOwnerFirstName(bindedHomemaker.ownerFirstName);
        setEditingBio(bindedHomemaker.bio);
        setEditingWhatsapp(bindedHomemaker.whatsappNumber);
        setEditingArea(bindedHomemaker.area);
        setEditingCategory(bindedHomemaker.category);
      } else {
        router.replace("/homemaker-portal/onboarding");
      }
    };
    setTimeout(handleSync, 0);
  }, [router]);

  if (!homemaker) {
    return (
      <div className="min-h-screen bg-paper flex flex-col font-sans">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center py-20 text-center">
          <p className="text-sm text-charcoal/50">Resolving shop credentials...</p>
        </div>
        <Footer />
      </div>
    );
  }

  // Handle profile save
  const handleProfileSaveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanWhatsapp = editingWhatsapp.replace(/[^0-9]/g, "");
    if (!editingBusinessName.trim() || !editingOwnerFirstName.trim() || editingBio.trim().length < 40) {
      setFormError("Add a business name, owner name and a useful description of at least 40 characters.");
      return;
    }
    if (!/^94\d{9}$/.test(cleanWhatsapp)) {
      setFormError("Enter a valid Sri Lankan WhatsApp number using country code 94.");
      return;
    }

    const updatedHomemaker: Homemaker = {
      ...homemaker,
      businessName: editingBusinessName.trim(),
      ownerFirstName: editingOwnerFirstName.trim(),
      bio: editingBio.trim(),
      whatsappNumber: cleanWhatsapp,
      area: editingArea,
      category: editingCategory as Category
    };

    const updatedList = allSellers.map((s) => (s.id === homemaker.id ? updatedHomemaker : s));
    saveHomemakers(updatedList);
    setAllSellers(updatedList);
    setHomemaker(updatedHomemaker);
    setFormError("");
    setProfileSaveSuccess(true);
    setTimeout(() => setProfileSaveSuccess(false), 3000);
  };

  // Handle Add listing (FR-2)
  const handleAddListingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const price = Number(newItemPrice);
    if (!newItemName.trim() || newItemDesc.trim().length < 20 || !Number.isFinite(price) || price < 100) {
      setFormError("Add a listing name, a description of at least 20 characters, and a valid price of LKR 100 or more.");
      return;
    }
    try {
      const photoUrl = new URL(newItemPhoto);
      if (photoUrl.protocol !== "https:") throw new Error();
    } catch {
      setFormError("Use a valid HTTPS image URL.");
      return;
    }

    const newListing: Listing = {
      id: `l_${Date.now()}`,
      name: newItemName.trim(),
      description: newItemDesc.trim(),
      price,
      photo: newItemPhoto
    };

    const updatedListings = [newListing, ...homemaker.listings];
    const updatedHomemaker: Homemaker = {
      ...homemaker,
      listings: updatedListings
    };

    const updatedList = allSellers.map((s) => (s.id === homemaker.id ? updatedHomemaker : s));
    saveHomemakers(updatedList);
    setAllSellers(updatedList);
    setHomemaker(updatedHomemaker);

    // Reset Form
    setNewItemName("");
    setNewItemDesc("");
    setNewItemPrice("");
    setFormError("");
    setListingSuccess(true);
    setTimeout(() => setListingSuccess(false), 3000);
  };

  // Handle Delete listing (FR-2)
  const handleDeleteListing = (idToDelete: string) => {
    const updatedListings = homemaker.listings.filter((l) => l.id !== idToDelete);
    const updatedHomemaker: Homemaker = {
      ...homemaker,
      listings: updatedListings
    };

    const updatedList = allSellers.map((s) => (s.id === homemaker.id ? updatedHomemaker : s));
    saveHomemakers(updatedList);
    setAllSellers(updatedList);
    setHomemaker(updatedHomemaker);
  };

  return (
    <div className="min-h-screen bg-paper flex flex-col font-sans text-charcoal selection:bg-turmeric/30 selection:text-ink">
      <Navbar />

      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 space-y-8">
        
        {/* Hub Header banner */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-charcoal/5 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-clay font-bold uppercase tracking-wider block">Seller Workspace</span>
              <span className="bg-turmeric/15 text-turmeric text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase">Local preview</span>
            </div>
            <h1 className="font-display text-3xl font-bold text-ink flex items-center gap-2">
              Ayubowan, {homemaker.ownerFirstName}! 👋
            </h1>
            <p className="text-xs text-charcoal/60">
              Cabinet for <span className="font-semibold text-charcoal">{homemaker.businessName}</span> • Area {homemaker.area}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={homemaker.verified ? `/homemaker/${homemaker.id}` : `/homemaker/${homemaker.id}`}
              className="bg-paper hover:bg-ink hover:text-paper text-ink border border-ink/20 font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl transition-all font-mono"
            >
              👁️ View Live Shop Page
            </Link>
          </div>
        </div>

        {/* FR-3 PUBLIC ACCESS ALERT (Pending vs approved check) */}
        {!homemaker.verified ? (
          <div className="bg-clay/10 border-2 border-dashed border-clay/30 text-charcoal p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⏳</span>
              <div>
                <h4 className="font-display font-bold text-sm text-clay">Shop Profile Pending Approval Vetting</h4>
                <p className="text-xs text-charcoal/70 leading-normal font-sans">
                  Your shop remains hidden from general customer search pools across Colombo until the platform operators complete verification audits.
                </p>
              </div>
            </div>
            <span className="bg-clay text-white font-mono text-[9px] uppercase tracking-wider font-bold px-3 py-1 rounded">
              PENDING ADMIN CHECK
            </span>
          </div>
        ) : (
          <div className="bg-betel/15 border-2 border-dashed border-betel/30 text-charcoal p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎉</span>
              <div>
                <h4 className="font-display font-bold text-sm text-betel">Approved and Visible in Colombo Hub!</h4>
                <p className="text-xs text-charcoal/70 leading-normal font-sans">
                  Your shop profile, listings, and photos are public. Customers browsing local Colombo tags can locate you and contact you on WhatsApp!
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <VerifiedBadge showText={true} />
            </div>
          </div>
        )}

        {/* WORKSPACE SECTIONS MENU TABS */}
        {formError && (
          <div className="rounded-xl border border-clay/25 bg-clay/10 p-3 text-xs text-clay" role="alert">
            {formError}
          </div>
        )}
        <div className="flex items-center gap-1 overflow-x-auto pb-2 border-b border-dashed border-charcoal/20 select-none">
          <button
            onClick={() => setActiveTab("snapshot")}
            className={`whitespace-nowrap px-4 py-2.5 rounded-lg text-xs font-bold uppercase transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === "snapshot" ? "bg-ink text-paper font-bold shadow" : "text-charcoal/70 hover:bg-paper/80"
            }`}
          >
            📊 Snapshot
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`whitespace-nowrap px-4 py-2.5 rounded-lg text-xs font-bold uppercase transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === "profile" ? "bg-ink text-paper font-bold shadow" : "text-charcoal/70 hover:bg-paper/80"
            }`}
          >
            ✍ Edit Profile
          </button>
          <button
            onClick={() => setActiveTab("listings")}
            className={`whitespace-nowrap px-4 py-2.5 rounded-lg text-xs font-bold uppercase transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === "listings" ? "bg-ink text-paper font-bold shadow" : "text-charcoal/70 hover:bg-paper/80"
            }`}
          >
            🍢 Listings Catalog ({homemaker.listings.length})
          </button>
          <button
            onClick={() => setActiveTab("inquiries")}
            className={`whitespace-nowrap px-4 py-2.5 rounded-lg text-xs font-bold uppercase transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === "inquiries" ? "bg-ink text-paper font-bold shadow" : "text-charcoal/70 hover:bg-paper/80"
            }`}
          >
            📥 WhatsApp Inquiries ({inquiries.length})
          </button>
          <button
            onClick={() => {
              setActiveTab("reviews");
            }}
            className={`whitespace-nowrap px-4 py-2.5 rounded-lg text-xs font-bold uppercase transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === "reviews" ? "bg-ink text-paper font-bold shadow" : "text-charcoal/70 hover:bg-paper/80"
            }`}
          >
            💬 My Reviews ({homemaker.reviews.length})
          </button>
        </div>

        {/* TAB CONTENTS */}

        {/* 1. SNAPSHOT TAB */}
        {activeTab === "snapshot" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-charcoal/5 shadow-sm space-y-2">
              <span className="text-3xl">👥</span>
              <h3 className="font-mono text-xs uppercase tracking-wider text-charcoal/50">Overall Rating Stars</h3>
              <div className="flex items-center gap-2 pt-1">
                <span className="font-mono text-3xl font-extrabold text-ink">{homemaker.rating}</span>
                <RatingStars rating={homemaker.rating} size={4} />
              </div>
              <p className="text-[10px] text-charcoal/50 font-sans">Accumulated on {homemaker.reviews.length} custom customer reviews.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-charcoal/5 shadow-sm space-y-2">
              <span className="text-3xl">📥</span>
              <h3 className="font-mono text-xs uppercase tracking-wider text-charcoal/50">WhatsApp Inquiries</h3>
              <div className="flex items-center gap-2 pt-1">
                <span className="font-mono text-3xl font-extrabold text-ink">{inquiries.length}</span>
                <span className="text-xs text-betel font-bold">Inquiries Received</span>
              </div>
              <p className="text-[10px] text-charcoal/50 font-sans">Click on the inquiries tab to view visitor names &amp; phone contacts.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-charcoal/5 shadow-sm space-y-2">
              <span className="text-3xl">🍢</span>
              <h3 className="font-mono text-xs uppercase tracking-wider text-charcoal/50">Active Catalog Listings</h3>
              <div className="flex items-center gap-2 pt-1">
                <span className="font-mono text-3xl font-extrabold text-ink">{homemaker.listings.length}</span>
                <span className="text-xs text-clay font-bold">Items Listed</span>
              </div>
              <p className="text-[10px] text-charcoal/50 font-sans">Bespoke catalog, recipes, alterations or classes available for customers.</p>
            </div>

            {/* Quick tips alert column */}
            <div className="md:col-span-3 bg-ink text-paper p-6 rounded-2xl border border-dashed border-turmeric/35 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-1.5">
                <h3 className="font-display text-lg text-white font-bold">💡 Sri Lankan Homemaker Tip of the Week!</h3>
                <p className="text-xs text-paper/80 leading-relaxed font-sans max-w-xl">
                  Bakers who upload clear photos using clean direct sunlight see 40% more WhatsApp messages. When offering custom tailoring or primary lessons, spell out exact sizing parameters or sample past-papers to reassure parents and neighbors!
                </p>
              </div>
              <div className="md:col-span-4 flex justify-end">
                <button
                  onClick={() => setActiveTab("profile")}
                  className="bg-turmeric text-ink font-bold text-[10px] uppercase tracking-wider font-mono px-4 py-2 rounded-lg hover:bg-turmeric/95 shadow-sm transition-all text-center"
                >
                  Enhance My Bio Narrative ➔
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2. PROFILE EDIT TAB */}
        {activeTab === "profile" && (
          <div className="max-w-2xl bg-white p-6 rounded-3xl border border-charcoal/10 shadow-sm space-y-6">
            <div>
              <h3 className="font-display text-xl font-bold text-ink">Edit Shop &amp; Contact Details</h3>
              <p className="text-xs text-charcoal/50 font-sans mt-0.5">Update your public name, location, category and WhatsApp contact.</p>
            </div>

            {profileSaveSuccess && (
              <div className="bg-betel/15 border border-betel/20 text-betel text-xs p-3 rounded-xl font-mono">
                🎉 Shop configurations updated successfully in our Colombo master file!
              </div>
            )}

            <form onSubmit={handleProfileSaveSubmit} className="space-y-4 font-sans text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono">Business Shop Title</label>
                  <input
                    type="text"
                    required
                    value={editingBusinessName}
                    onChange={(e) => setEditingBusinessName(e.target.value)}
                    className="w-full bg-paper/50 rounded-lg py-2 px-3 text-sm text-charcoal border border-charcoal/15 focus:outline-none focus:border-ink"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono">Owner First Name</label>
                  <input
                    type="text"
                    required
                    value={editingOwnerFirstName}
                    onChange={(e) => setEditingOwnerFirstName(e.target.value)}
                    className="w-full bg-paper/50 rounded-lg py-2 px-3 text-sm text-charcoal border border-charcoal/15 focus:outline-none focus:border-ink"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono">Category Hub Tag</label>
                  <select
                    value={editingCategory}
                    onChange={(e) => setEditingCategory(e.target.value)}
                    className="w-full bg-paper/50 rounded-lg py-2 px-3 text-sm text-charcoal border border-charcoal/15 focus:outline-none focus:border-ink cursor-pointer"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono">My Colombo Area Locality</label>
                  <select
                    value={editingArea}
                    onChange={(e) => setEditingArea(e.target.value)}
                    className="w-full bg-paper/50 rounded-lg py-2 px-3 text-sm text-charcoal border border-charcoal/15 focus:outline-none focus:border-ink cursor-pointer"
                  >
                    {COLOMBO_AREAS.map((area) => (
                      <option key={area} value={area}>
                        📍 {area}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono">My Whatsapp Business Line</label>
                <input
                  type="text"
                  required
                  value={editingWhatsapp}
                  onChange={(e) => setEditingWhatsapp(e.target.value)}
                  className="w-full bg-paper/50 rounded-lg py-2.5 px-3 text-sm text-charcoal border border-charcoal/15 focus:outline-none focus:border-ink font-mono"
                />
                <span className="text-[10px] text-charcoal/40 block">Include country code: e.g. 94771234567 (no spaces or hyphens)</span>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono">Sincere Bio Pitch</label>
                <textarea
                  rows={4}
                  required
                  value={editingBio}
                  onChange={(e) => setEditingBio(e.target.value)}
                  className="w-full bg-paper/50 rounded-lg py-2 px-3 text-xs text-charcoal border border-charcoal/15 focus:outline-none focus:border-ink leading-relaxed"
                />
              </div>

              <button
                type="submit"
                className="bg-ink hover:bg-ink/90 text-white font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-lg transition-colors cursor-pointer"
              >
                Save My Configurations
              </button>
            </form>
          </div>
        )}

        {/* 3. LISTINGS CATALOG TAB */}
        {activeTab === "listings" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Form to append new listing (FR-2 add) */}
              <form onSubmit={handleAddListingSubmit} className="lg:col-span-5 bg-white p-6 rounded-3xl border border-charcoal/10 shadow-sm space-y-4 font-sans text-xs">
                <div>
                  <h3 className="font-display text-lg font-bold text-charcoal">Add New Listing Offer</h3>
                  <p className="text-[11px] text-charcoal/50 font-sans mt-0.5">List a specialized product or service pricing to display publicly.</p>
                </div>

                {listingSuccess && (
                  <div className="bg-betel/15 border border-betel/20 text-betel text-xs p-2 rounded-lg font-mono">
                    Listing added to your catalog.
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono">Listing Item Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. CBP Biscuit Pudding sawawan (Small)"
                    value={newItemName}
                    onChange={(e) => setNewItemName(e.target.value)}
                    className="w-full bg-paper/50 rounded-lg py-2 px-3 text-sm text-charcoal border border-charcoal/15 focus:outline-none focus:border-ink"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono">Item Price (LKR)</label>
                  <input
                    type="number"
                    required
                    min={100}
                    placeholder="e.g. 1500"
                    value={newItemPrice}
                    onChange={(e) => setNewItemPrice(e.target.value)}
                    className="w-full bg-paper/50 rounded-lg py-2 px-3 text-sm text-charcoal border border-charcoal/15 focus:outline-none focus:border-ink font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono">Item Illustration URL</label>
                  <input
                    type="text"
                    required
                    value={newItemPhoto}
                    onChange={(e) => setNewItemPhoto(e.target.value)}
                    className="w-full bg-paper/50 rounded-lg py-2 px-3 text-xs text-charcoal border border-charcoal/15 focus:outline-none focus:border-ink font-mono"
                  />
                  <span className="text-[10px] text-charcoal/40 block">Use a public HTTPS image URL. Production should use authenticated uploads.</span>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-charcoal/70 uppercase font-mono">Item Description</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Provide details on serving size, materials used, fitting speeds, or terms..."
                    value={newItemDesc}
                    onChange={(e) => setNewItemDesc(e.target.value)}
                    className="w-full bg-paper/50 rounded-lg py-2 px-3 text-xs text-charcoal border border-charcoal/15 focus:outline-none focus:border-ink leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-ink hover:bg-ink/90 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-lg transition-colors cursor-pointer text-center"
                >
                  Append to Catalog
                </button>
              </form>

              {/* View/Delete Active listings (FR-2 list/delete) */}
              <div className="lg:col-span-7 space-y-4">
                <h3 className="font-display text-xl font-bold text-charcoal">My Live Catalog Listings</h3>
                
                {homemaker.listings.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[520px] overflow-y-auto pr-2">
                    {homemaker.listings.map((item) => (
                      <div key={item.id} className="bg-white border rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between">
                        <div className="aspect-video w-full bg-charcoal/5 relative">
                          <Image
                            src={item.photo}
                            alt={item.name}
                            fill
                            sizes="(max-width: 640px) 100vw, 50vw"
                            className="object-cover"
                          />
                          <span className="absolute top-2 right-2 bg-paper text-ink text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow">
                            LKR {item.price.toLocaleString()}
                          </span>
                        </div>
                        <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                          <div className="space-y-1">
                            <h4 className="font-display font-bold text-sm text-charcoal line-clamp-1">{item.name}</h4>
                            <p className="text-[11px] text-charcoal/60 line-clamp-3 leading-relaxed font-sans">{item.description}</p>
                          </div>

                          {/* Delete Action Button (FR-2 delete) */}
                          <button
                            type="button"
                            onClick={() => {
                              if (confirm(`Remove listing "${item.name}" from your public catalog?`)) {
                                handleDeleteListing(item.id);
                              }
                            }}
                            className="bg-clay/10 text-clay hover:bg-clay hover:text-white border border-clay/20 font-bold text-[10px] uppercase tracking-wider py-1.5 px-3 rounded-lg w-full transition-all cursor-pointer mt-3"
                          >
                            🗑️ Delete Listing
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white p-12 text-center rounded-3xl border border-dashed border-charcoal/15">
                    <p className="text-xs text-charcoal/50">Your catalog is currently empty. Use the formulation on the left to stack items.</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

        {/* 4. WHATSAPP INQUIRIES DISPATCH (FR-4 view inquiries) */}
        {activeTab === "inquiries" && (
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-xl font-bold text-ink">Inquiries Inbox</h3>
              <p className="text-xs text-charcoal/50">These are customer notifications logged by visitors browsing your listings on this platform.</p>
            </div>

            {inquiries.length > 0 ? (
              <div className="space-y-4 max-w-3xl">
                {inquiries.map((inq) => {
                  return (
                    <div key={inq.id} className="bg-white p-5 rounded-2xl border border-charcoal/5 shadow-sm space-y-3">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-dashed border-charcoal/15 pb-2.5">
                        <div>
                          <h4 className="font-display font-medium text-sm text-charcoal flex items-center gap-1.5">
                            <span>👤 {inq.customerName}</span>
                            <span className="font-sans text-[10px] text-charcoal/40 font-normal">Contact info: {inq.customerPhone}</span>
                          </h4>
                          <span className="font-mono text-[9px] text-charcoal/40 uppercase block mt-0.5">Alert Received: {inq.date}</span>
                        </div>
                        
                        {/* WhatsApp Reply Link */}
                        <a
                          href={`https://wa.me/${inq.customerPhone.replace(/[^0-9]/g, "")}?text=Hello%20${inq.customerName},%20I%20am%20${homemaker.ownerFirstName}%20from%20"${encodeURIComponent(homemaker.businessName)}".%20I%20received%20your%20notice%20on%20Her%20HomeNest%20Market%20regarding:%20"${encodeURIComponent(inq.message.substring(0, 40))}..."`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex select-none items-center gap-1.5 rounded-lg bg-[#25D366] px-3.5 py-1.5 text-center font-mono text-[10px] font-bold uppercase tracking-wider text-white shadow-[0_4px_12px_rgba(37,211,102,0.22)] transition-all hover:bg-[#20BD5A]"
                        >
                          💬 Send WhatsApp Reply
                        </a>
                      </div>
                      <p className="text-xs text-charcoal/85 italic leading-relaxed font-sans font-medium pl-6">
                        &quot;{inq.message}&quot;
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-3xl text-center border border-dashed border-charcoal/15 max-w-md mx-auto">
                <span className="text-2xl block mb-1">📬</span>
                <p className="text-xs text-charcoal/50 font-sans">
                  No platform enquiries are available. Direct WhatsApp conversations remain private and are not imported into this dashboard.
                </p>
              </div>
            )}
          </div>
        )}

        {/* 5. SELLER REVIEWS LOGS (FR-4 view reviews) */}
        {activeTab === "reviews" && (
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-xl font-bold text-ink">Reviews left by Neighbors</h3>
              <p className="text-xs text-charcoal/50 font-sans">Ratings and sincere comments left by Colombo account buyers.</p>
            </div>

            {homemaker.reviews.length > 0 ? (
              <div className="space-y-4 max-w-3xl">
                {homemaker.reviews.map((rev) => (
                  <div key={rev.id} className="bg-white p-5 rounded-2xl border border-charcoal/5 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-display font-bold text-sm text-charcoal">{rev.customerName}</h4>
                        <span className="font-mono text-[9px] text-charcoal/40 uppercase block">Posted: {rev.date}</span>
                      </div>
                      <RatingStars rating={rev.rating} size={3.5} />
                    </div>
                    <p className="text-xs text-charcoal/75 italic leading-relaxed font-sans">&quot;{rev.comment}&quot;</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-3xl text-center border border-dashed border-charcoal/15 max-w-md mx-auto">
                <p className="text-xs text-charcoal/50">Your shop guestbook is currently blank.</p>
              </div>
            )}
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
