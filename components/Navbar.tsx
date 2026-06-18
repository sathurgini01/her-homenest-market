"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { getActiveSession, setActiveSession, UserSession } from "@/lib/mock-data";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [session, setSession] = useState<UserSession>({ role: "Customer", email: "customer@homenest.lk" });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showRoleSelector, setShowRoleSelector] = useState(false);

  useEffect(() => {
    const handleSync = () => {
      setSession(getActiveSession());
    };
    // Defer execution to avoid synchronous cascading renders
    setTimeout(handleSync, 0);
  }, []);

  const handleRoleChange = (role: "Customer" | "Homemaker" | "Admin") => {
    let newSession: UserSession;
    if (role === "Customer") {
      newSession = { role: "Customer", email: "customer@homenest.lk" };
    } else if (role === "Homemaker") {
      newSession = {
        role: "Homemaker",
        email: "fatheema@homenest.lk",
        homemakerId: "hm_1"
      };
    } else {
      newSession = { role: "Admin", email: "admin@herhomenest.lk" };
    }
    setActiveSession(newSession);
    setSession(newSession);
    setShowRoleSelector(false);
    
    // Refresh page or redirect to appropriate dashboard
    if (role === "Admin") {
      router.push("/admin/dashboard");
    } else if (role === "Homemaker") {
      router.push("/homemaker-portal/dashboard");
    } else {
      router.push("/");
    }
    
    // Trigger storage event so other components update if listening
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("storage"));
      window.location.reload();
    }
  };

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname?.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white text-ink shadow-sm border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Brand with Newsreader Serif Typo */}
          <div className="flex-shrink-0 flex flex-col justify-center">
            <Link href="/" className="group flex flex-col">
              <span className="font-display text-2xl font-semibold tracking-tight text-ink group-hover:text-turmeric transition-colors leading-none">
                Her HomeNest
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-clay leading-normal block pl-0.5">
                Market • Colombo
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-all ${
                isActive("/") 
                  ? "text-ink bg-paper/50 border-b-2 border-ink rounded-b-none font-semibold" 
                  : "text-charcoal/70 hover:text-ink hover:bg-paper/30"
              }`}
            >
              Home
            </Link>
            <Link
              href="/explore"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-all ${
                isActive("/explore")
                  ? "text-ink bg-paper/50 border-b-2 border-ink rounded-b-none font-semibold"
                  : "text-charcoal/70 hover:text-ink hover:bg-paper/30"
              }`}
            >
              Explore Homemakers
            </Link>
            <Link
              href="/about"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-all ${
                isActive("/about")
                  ? "text-ink bg-paper/50 border-b-2 border-ink rounded-b-none font-semibold"
                  : "text-charcoal/70 hover:text-ink hover:bg-paper/30"
              }`}
            >
              Our Mission
            </Link>
            <Link
              href="/contact"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-all ${
                isActive("/contact")
                  ? "text-ink bg-paper/50 border-b-2 border-ink rounded-b-none font-semibold"
                  : "text-charcoal/70 hover:text-ink hover:bg-paper/30"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* User / Dashboard Portals Control Panel */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Simulation Persona Switcher */}
            <div className="relative">
              <button
                onClick={() => setShowRoleSelector(!showRoleSelector)}
                className="flex items-center gap-1.5 bg-paper/60 border border-charcoal/10 rounded-lg px-3 py-1.5 text-xs text-ink hover:bg-paper transition-all font-mono"
              >
                <span className="w-2 h-2 rounded-full bg-betel animate-pulse"></span>
                SIMULATOR: {session.role || "Visitor"}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showRoleSelector && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white text-charcoal shadow-xl border border-charcoal/10 overflow-hidden divide-y divide-charcoal/5 py-1 z-50">
                  <div className="px-3 py-2 text-[10px] font-mono uppercase tracking-wider text-charcoal/50">
                    Switch Test Personas
                  </div>
                  <button
                    onClick={() => handleRoleChange("Customer")}
                    className={`w-full text-left px-4 py-2.5 text-sm flex flex-col hover:bg-paper/40 ${
                      session.role === "Customer" ? "bg-paper text-ink font-semibold" : ""
                    }`}
                  >
                    <span>👥 I am a Customer</span>
                    <span className="text-[10px] text-charcoal/50 font-normal font-sans">Browse listings, write reviews, inquire</span>
                  </button>
                  <button
                    onClick={() => handleRoleChange("Homemaker")}
                    className={`w-full text-left px-4 py-2.5 text-sm flex flex-col hover:bg-paper/40 ${
                      session.role === "Homemaker" ? "bg-paper text-ink font-semibold" : ""
                    }`}
                  >
                    <span>👩🌾 Homemaker (Fatheema)</span>
                    <span className="text-[10px] text-charcoal/50 font-normal font-sans">Edit profile, listings, read reviews & inquiries</span>
                  </button>
                  <button
                    onClick={() => handleRoleChange("Admin")}
                    className={`w-full text-left px-4 py-2.5 text-sm flex flex-col hover:bg-paper/40 ${
                      session.role === "Admin" ? "bg-paper text-ink font-semibold" : ""
                    }`}
                  >
                    <span>🛡️ Platform Organizer / Admin</span>
                    <span className="text-[10px] text-charcoal/50 font-normal font-sans">Manage approvals, feature settings, moderations</span>
                  </button>
                </div>
              )}
            </div>

            {/* Quick Portal Shortcuts based on Session */}
            {session.role === "Homemaker" && (
              <Link
                href="/homemaker-portal/dashboard"
                className="bg-turmeric text-ink hover:bg-turmeric/90 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider shadow-sm transition-all font-mono"
              >
                Dashboard
              </Link>
            )}

            {session.role === "Admin" && (
              <Link
                href="/admin/dashboard"
                className="bg-clay text-paper hover:bg-clay/90 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider shadow-sm transition-all font-mono"
              >
                Admin Panel
              </Link>
            )}

            {session.role === "Customer" && (
              <Link
                href="/login"
                className="bg-turmeric text-ink hover:bg-turmeric/90 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider shadow-sm transition-all font-mono"
              >
                Enter Portal
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Quick Mini Simulator for smaller screens */}
            <button
              onClick={() => {
                const nextRole: Record<string, "Customer" | "Homemaker" | "Admin"> = {
                  Customer: "Homemaker",
                  Homemaker: "Admin",
                  Admin: "Customer"
                };
                handleRoleChange(nextRole[session.role || "Customer"]);
              }}
              className="px-2 py-1 bg-paper/50 border border-charcoal/10 rounded text-[10px] font-mono text-ink"
              title="Click to alternate roles"
            >
              🎭 {session.role}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-ink hover:text-turmeric p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-dashed border-charcoal/15 px-4 py-4 space-y-3 shadow-inner">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-ink hover:bg-paper/30 hover:text-turmeric"
          >
            Home
          </Link>
          <Link
            href="/explore"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-ink hover:bg-paper/30 hover:text-turmeric"
          >
            Explore Homemakers
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-ink hover:bg-paper/30 hover:text-turmeric"
          >
            Our Mission
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-ink hover:bg-paper/30 hover:text-turmeric"
          >
            Contact Colombo Team
          </Link>

          <div className="pt-4 border-t border-dashed border-charcoal/15 space-y-2">
            <p className="text-xs font-mono text-clay/80 uppercase">Switch Active Role:</p>
            <div className="flex flex-col gap-1.5">
              <button
                onClick={() => {
                  handleRoleChange("Customer");
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-1.5 rounded text-xs ${
                  session.role === "Customer" ? "bg-paper text-ink font-semibold" : "text-charcoal/70 hover:bg-paper/30"
                }`}
              >
                👥 Customer View
              </button>
              <button
                onClick={() => {
                  handleRoleChange("Homemaker");
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-1.5 rounded text-xs ${
                  session.role === "Homemaker" ? "bg-paper text-ink font-semibold" : "text-charcoal/70 hover:bg-paper/30"
                }`}
              >
                👩🌾 Homemaker (Fatheema)
              </button>
              <button
                onClick={() => {
                  handleRoleChange("Admin");
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-1.5 rounded text-xs ${
                  session.role === "Admin" ? "bg-paper text-ink font-semibold" : "text-charcoal/70 hover:bg-paper/30"
                }`}
              >
                🛡️ Platform Operator Admin
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
