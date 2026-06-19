"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { getActiveSession, setActiveSession, UserSession } from "@/lib/session";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Explore" },
  { href: "/#categories", label: "Categories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function BrandLogo() {
  return (
    <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-[14px] bg-ink text-paper shadow-[0_7px_18px_rgba(59,31,50,0.22)] ring-1 ring-ink/10 transition-transform duration-300 group-hover:-rotate-2 group-hover:scale-105">
      <span className="absolute -right-2 -top-2 h-7 w-7 rounded-full bg-turmeric/90" />
      <svg
        viewBox="0 0 48 48"
        className="relative h-8 w-8"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M10.5 22.5 24 11l13.5 11.5v14a2.5 2.5 0 0 1-2.5 2.5H13a2.5 2.5 0 0 1-2.5-2.5v-14Z"
          fill="currentColor"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2.5"
        />
        <path
          d="M24 33.8s-7-4-7-8.4c0-2.2 1.7-3.9 3.9-3.9 1.4 0 2.6.7 3.1 1.8.6-1.1 1.8-1.8 3.2-1.8 2.1 0 3.8 1.7 3.8 3.9 0 4.4-7 8.4-7 8.4Z"
          fill="#C1604A"
        />
      </svg>
    </span>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [session, setSession] = useState<UserSession>({ role: null, email: null });

  useEffect(() => {
    const syncSession = () => setSession(getActiveSession());
    syncSession();
    window.addEventListener("storage", syncSession);
    return () => window.removeEventListener("storage", syncSession);
  }, []);

  const dashboardHref =
    session.role === "Admin"
      ? "/admin/dashboard"
      : session.role === "Homemaker"
        ? "/homemaker-portal/dashboard"
        : "/";
  const handleLogout = () => {
    setActiveSession({ role: null, email: null });
    setSession({ role: null, email: null });
    setMobileMenuOpen(false);
    router.push("/");
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return href !== "/#categories" && pathname?.startsWith(href);
  };

  return (
    <nav aria-label="Primary navigation" className="sticky top-0 z-50 border-b border-[#D8BED8] bg-[#FAF2FC]/95 text-ink shadow-[0_4px_18px_rgba(59,31,50,0.08)] md:backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="group flex items-center gap-3" aria-label="Her HomeNest Market home">
            <BrandLogo />
            <span className="flex flex-col">
              <span className="font-display text-[1.7rem] font-semibold leading-[0.9] tracking-[-0.035em]">
                <span className="italic text-clay">Her</span>{" "}
                <span className="text-ink transition-colors group-hover:text-betel">HomeNest</span>
              </span>
              <span className="mt-1.5 pl-0.5 font-mono text-[8px] font-semibold uppercase tracking-[0.24em] text-charcoal/55">
                Market <span className="text-turmeric">•</span> Colombo
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`rounded-xl px-3.5 py-2.5 text-[15px] font-semibold tracking-[-0.01em] transition-all ${
                  isActive(link.href)
                    ? "bg-white text-ink shadow-sm ring-1 ring-[#E7D9EA]"
                    : "text-charcoal/75 hover:bg-white/70 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            {session.role ? (
              <>
                {session.role !== "Customer" && (
                  <Link
                    href={dashboardHref}
                    className="rounded-lg bg-turmeric px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-ink shadow-sm"
                  >
                    Dashboard
                  </Link>
                )}
                <button type="button" onClick={handleLogout} className="rounded-lg px-3 py-2 text-xs font-bold text-charcoal/65 hover:bg-paper">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink hover:bg-paper">
                  Login
                </Link>
                <Link href="/register" className="rounded-lg bg-turmeric px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-ink shadow-sm hover:bg-turmeric/90">
                  Register
                </Link>
              </>
            )}
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="rounded-lg p-2 text-ink hover:bg-paper md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-navigation" className="border-t border-[#D8BED8] bg-[#FAF2FC] px-4 py-4 shadow-inner md:hidden">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`block rounded-xl px-3.5 py-3 text-[15px] font-semibold transition-colors ${
                  isActive(link.href) ? "bg-white text-ink shadow-sm" : "text-charcoal/75 hover:bg-white/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 border-t border-dashed border-charcoal/15 pt-4">
            {session.role ? (
              <>
                {session.role !== "Customer" && (
                  <Link href={dashboardHref} onClick={() => setMobileMenuOpen(false)} className="rounded-lg bg-turmeric px-4 py-2.5 text-center text-xs font-bold uppercase text-ink">
                    Dashboard
                  </Link>
                )}
                <button
                  type="button"
                  onClick={handleLogout}
                  className={`rounded-lg border border-ink/15 px-4 py-2.5 text-xs font-bold uppercase text-ink ${
                    session.role === "Customer" ? "col-span-2" : ""
                  }`}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="rounded-lg border border-ink/15 px-4 py-2.5 text-center text-xs font-bold uppercase text-ink">
                  Login
                </Link>
                <Link href="/register" onClick={() => setMobileMenuOpen(false)} className="rounded-lg bg-turmeric px-4 py-2.5 text-center text-xs font-bold uppercase text-ink">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
