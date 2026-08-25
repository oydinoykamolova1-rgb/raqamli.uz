"use client";
import { ThemeToggle } from "./ThemeToggle";
import { ConsultationButton } from "./ConsultationButton";
import Link from "next/link";
import { Bot, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { href: "/", label: "Bosh sahifa" },
    { href: "/services", label: "Xizmatlar" },
    { href: "/#portfolio", label: "Portfolio" },
    { href: "/#about", label: "Biz haqimizda" },
  ];

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      scrolled
        ? "bg-[#09090b]/90 backdrop-blur-xl border-b border-white/8 shadow-lg shadow-black/20"
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-violet-900/40 group-hover:shadow-violet-900/60 transition-shadow">
            R
          </div>
          <span className="font-black text-2xl tracking-tight text-white">
            Raqam<span className="gradient-text">ly</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="https://t.me/raqamli_uzbot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full bg-zinc-800 text-cyan-400 hover:bg-zinc-700 border border-white/8 hover:border-cyan-500/30 transition-all group"
          >
            <Bot className="w-4 h-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
            Telegram Bot
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <ConsultationButton
            className="hidden md:flex h-11 px-6 bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white font-bold rounded-xl shadow-lg shadow-violet-900/30 transition-all hover:scale-105 text-sm"
          />
          {/* Mobile burger */}
          <button
            className="md:hidden w-10 h-10 rounded-xl bg-zinc-800 border border-white/10 flex items-center justify-center text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#09090b]/98 backdrop-blur-xl border-t border-white/8 px-4 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-zinc-300 hover:text-white py-2 border-b border-white/5"
            >
              {l.label}
            </Link>
          ))}
          <ConsultationButton
            className="mt-2 h-12 px-6 bg-gradient-to-r from-violet-600 to-pink-600 text-white font-bold rounded-xl"
          />
        </div>
      )}
    </header>
  );
}
