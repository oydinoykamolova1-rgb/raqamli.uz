"use client";

import { ConsultationButton } from "./ConsultationButton";
import Link from "next/link";
import { Bot, Menu, X, Sparkles } from "lucide-react";
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
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const navItems = [
    { href: "/", label: "Bosh sahifa" },
    { href: "/services", label: "Xizmatlar" },
    { href: "/#portfolio", label: "Portfolio" },
    { href: "/#about", label: "Biz haqimizda" },
    { href: "/#process", label: "Jarayon" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? "py-3 bg-[#030712]/85 backdrop-blur-2xl border-b border-violet-500/15 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
        : "py-6 bg-transparent"
    }`}>
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-600 via-pink-600 to-cyan-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-[0_0_20px_rgba(139,92,246,0.4)]">
              <div className="w-full h-full bg-[#070b16] rounded-[14px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-violet-400 group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </div>
            <div className="absolute -inset-1 rounded-2xl bg-violet-600/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
          </div>
          <div className="flex flex-col">
            <span className="font-space font-bold text-2xl tracking-tight text-white flex items-center gap-1">
              Raqam<span className="gradient-text-cyber">ly</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-violet-400/80 font-semibold -mt-1 font-space">
              Digital Next
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 px-4 py-2 rounded-full glass-panel border border-white/10 shadow-inner">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-300 hover:text-white px-4 py-2 rounded-full hover:bg-violet-500/10 transition-all duration-200 relative group"
            >
              {item.label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-pink-500 group-hover:w-1/2 transition-all duration-300 rounded-full" />
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="https://t.me/raqamli_uzbot"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-violet-950/40 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all group font-space"
          >
            <Bot className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            <span>@raqamli_uzbot</span>
          </Link>

          <ConsultationButton
            text="Konsultatsiya"
            className="hidden md:flex h-11 px-6 bg-gradient-to-r from-violet-600 via-pink-600 to-violet-700 hover:from-violet-500 hover:to-pink-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] text-sm font-space"
          />

          {/* Mobile Menu Trigger */}
          <button
            className="md:hidden w-11 h-11 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-white focus:outline-none hover:border-violet-500/50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5 text-violet-400" /> : <Menu className="w-5 h-5 text-gray-300" />}
          </button>
        </div>
      </div>

      {/* Mobile Backdrop Dropdown */}
      {mobileOpen && (
        <div className="md:hidden inset-x-0 mt-3 mx-4 p-6 glass-panel-glow rounded-3xl flex flex-col gap-4 border border-violet-500/20 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-semibold text-gray-200 hover:text-white py-2 px-3 rounded-xl hover:bg-violet-500/10 transition-colors flex items-center justify-between"
            >
              <span>{item.label}</span>
              <span className="text-violet-400">→</span>
            </Link>
          ))}
          <div className="pt-2 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="https://t.me/raqamli_uzbot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm font-semibold py-3 rounded-xl bg-cyan-950/40 text-cyan-300 border border-cyan-500/30 font-space"
            >
              <Bot className="w-4 h-4" /> Telegram Bot
            </Link>
            <ConsultationButton
              text="Konsultatsiya Olish"
              className="h-12 w-full bg-gradient-to-r from-violet-600 to-pink-600 text-white font-bold rounded-xl shadow-lg font-space"
            />
          </div>
        </div>
      )}
    </header>
  );
}
