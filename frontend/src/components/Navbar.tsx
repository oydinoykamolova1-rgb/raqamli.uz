"use client";

import { ConsultationButton } from "./ConsultationButton";
import Link from "next/link";
import { Bot, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Hide main site navbar on Admin routes
  if (pathname?.startsWith("/admin")) return null;

  const navItems = [
    { href: "/#services",  label: "Xizmatlar" },
    { href: "/#portfolio", label: "Portfolio" },
    { href: "/#about",     label: "Nega Biz?" },
    { href: "/#calculator",label: "Kalkulyator" },
    { href: "/#faq",       label: "FAQ" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#0A1E35]/95 backdrop-blur-2xl border-b border-[#5FD8E8]/15 shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
          : "py-5 bg-[#0F2A4A]/80 backdrop-blur-lg border-b border-[#5FD8E8]/8"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-12 flex items-center justify-between">

        {/* Brand Logo — "R" doirada */}
        <Link href="/" id="navbar-logo" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full border border-[#5FD8E8]/40 flex items-center justify-center bg-[#0F2A4A] group-hover:border-[#5FD8E8] transition-colors">
            <span className="font-display font-black text-xl text-[#5FD8E8] leading-none">
              R
            </span>
            {/* Outer ring glow */}
            <div className="absolute inset-0 rounded-full bg-[#5FD8E8]/0 group-hover:bg-[#5FD8E8]/8 transition-colors" />
          </div>
          <div>
            <span className="font-display font-black text-xl text-[#EDF3F5] tracking-tight leading-none block">
              Raqam<span className="text-[#5FD8E8]">ly</span>
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8FA6BC] -mt-0.5 block">
              SIRDARYO IT
            </span>
          </div>
        </Link>

        {/* Desktop Nav — monospace links */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-xs text-[#8FA6BC] hover:text-[#5FD8E8] px-4 py-2.5 rounded-sm hover:bg-[#5FD8E8]/5 border border-transparent hover:border-[#5FD8E8]/15 transition-all duration-200 tracking-wide uppercase"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Telegram Bot link */}
          <Link
            href="https://t.me/raqamli_uzbot"
            id="navbar-telegram-link"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-mono px-4 py-2.5 rounded-sm bg-[#5FD8E8]/8 text-[#5FD8E8] border border-[#5FD8E8]/25 hover:border-[#5FD8E8]/50 hover:bg-[#5FD8E8]/15 transition-all"
          >
            <Bot className="w-3.5 h-3.5" />
            <span>@raqamli_uzbot</span>
          </Link>

          <ConsultationButton
            text="Konsultatsiya"
            id="navbar-cta"
            className="hidden md:flex h-10 px-6 bg-[#FF6B35] hover:bg-[#E85A24] text-white font-display font-bold rounded-sm shadow-[0_0_20px_rgba(255,107,53,0.3)] transition-all hover:scale-105 text-sm"
          />

          {/* Mobile Menu Trigger */}
          <button
            id="navbar-mobile-toggle"
            className="md:hidden w-10 h-10 rounded-sm bg-[#0A1E35] border border-[#5FD8E8]/20 flex items-center justify-center text-[#EDF3F5] focus:outline-none hover:border-[#5FD8E8]/50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-4 h-4 text-[#5FD8E8]" /> : <Menu className="w-4 h-4 text-[#8FA6BC]" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden mx-4 mt-2 p-6 bg-[#0A1E35]/95 backdrop-blur-xl rounded-sm flex flex-col gap-3 border border-[#5FD8E8]/15 shadow-2xl animate-in slide-in-from-top-4 fade-in duration-300">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="font-mono text-xs text-[#8FA6BC] hover:text-[#5FD8E8] py-3 px-3 rounded-sm hover:bg-[#5FD8E8]/5 border border-transparent hover:border-[#5FD8E8]/15 transition-all flex items-center justify-between uppercase tracking-widest"
            >
              <span>{item.label}</span>
              <span className="text-[#5FD8E8]/40">→</span>
            </Link>
          ))}
          <div className="pt-3 border-t border-[#5FD8E8]/10 flex flex-col gap-3">
            <Link
              href="https://t.me/raqamli_uzbot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-xs font-mono py-3 rounded-sm bg-[#5FD8E8]/8 text-[#5FD8E8] border border-[#5FD8E8]/20"
            >
              <Bot className="w-3.5 h-3.5" /> Telegram Bot
            </Link>
            <ConsultationButton
              text="Bepul Konsultatsiya"
              className="h-12 w-full bg-[#FF6B35] hover:bg-[#E85A24] text-white font-display font-bold rounded-sm shadow-lg transition-all"
            />
          </div>
        </div>
      )}
    </header>
  );
}
