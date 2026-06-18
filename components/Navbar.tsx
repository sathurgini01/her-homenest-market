"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { getActiveSession, setActiveSession, UserSession } from "@/lib/mock-data";

const navLinks = [
  { href: "/explore", label: "Explore" },
  { href: "/#categories", label: "Categories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

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

  const isActive = (href: string) =>
    href !== "/#categories" && pathname?.startsWith(href);

  return (
    <nav className="sticky top-0 z-50 border-b border-charcoal/10 bg-white/95 text-ink shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="group flex flex-col" aria-label="Her HomeNest Market home">
            <span className="font-display text-2xl font-semibold leading-none tracking-tight text-ink transition-colors group-hover:text-turmeric">
              Her HomeNest
            </span>
            <span className="pl-0.5 font-mono text-[9px] uppercase tracking-widest text-clay">
              Market • Colombo
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-paper text-ink"
                    : "text-charcoal/70 hover:bg-paper/60 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            {session.role ? (
              <>
                <Link
                  href={dashboardHref}
                  className="rounded-lg bg-turmeric px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-ink shadow-sm"
                >
                  {session.role === "Customer" ? "Home" : "Dashboard"}
                </Link>
                <button onClick={handleLogout} className="rounded-lg px-3 py-2 text-xs font-bold text-charcoal/65 hover:bg-paper">
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
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="rounded-lg p-2 text-ink hover:bg-paper md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
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
        <div className="border-t border-charcoal/10 bg-white px-4 py-4 shadow-inner md:hidden">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-paper"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 border-t border-dashed border-charcoal/15 pt-4">
            {session.role ? (
              <>
                <Link href={dashboardHref} onClick={() => setMobileMenuOpen(false)} className="rounded-lg bg-turmeric px-4 py-2.5 text-center text-xs font-bold uppercase text-ink">
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="rounded-lg border border-ink/15 px-4 py-2.5 text-xs font-bold uppercase text-ink">
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
