"use client";

import Link from "next/link";
import { Bot, Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Hide public site footer on admin pages
  if (pathname?.startsWith("/admin")) return null;

  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A1E35] border-t border-[#5FD8E8]/10 pt-16 pb-10 overflow-hidden">

      {/* Blueprint grid */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#5FD8E8]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-5">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 group" id="footer-logo">
              <div className="w-10 h-10 rounded-full border border-[#5FD8E8]/35 flex items-center justify-center bg-[#0F2A4A] group-hover:border-[#5FD8E8] transition-colors">
                <span className="font-display font-black text-xl text-[#5FD8E8] leading-none">R</span>
              </div>
              <div>
                <span className="font-display font-black text-xl text-[#EDF3F5] tracking-tight leading-none block">
                  Raqam<span className="text-[#5FD8E8]">ly</span>
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8FA6BC] block -mt-0.5">
                  SIRDARYO IT
                </span>
              </div>
            </Link>

            <p className="font-sans text-sm text-[#8FA6BC] leading-relaxed max-w-sm">
              Sirdaryo viloyati va O&apos;zbekiston miqyosida biznes jarayonlarini
              to&apos;liq raqamlashtirish — veb-saytlar, AI Telegram botlar va CRM/ERP tizimlar.
            </p>

            {/* Telegram Bot */}
            <Link
              href="https://t.me/raqamli_uzbot"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-telegram-bot"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-sm bg-[#5FD8E8]/8 text-[#5FD8E8] font-mono text-xs border border-[#5FD8E8]/20 hover:border-[#5FD8E8]/50 hover:bg-[#5FD8E8]/15 transition-all"
            >
              <Bot className="w-3.5 h-3.5" />
              <span>@raqamli_uzbot</span>
              <span className="text-[#5FD8E8]/40">→</span>
            </Link>

            {/* Coordinate stamp */}
            <div className="font-mono text-[10px] text-[#8FA6BC]/40 uppercase tracking-widest">
              N40°29&apos; E68°47&apos; · SIRDARYO VILOYATI
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-[10px] text-[#5FD8E8] uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
              <span className="w-3 h-px bg-[#5FD8E8]/50 inline-block" />
              Sahifalar
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/",          label: "Bosh sahifa" },
                { href: "/#services",  label: "Xizmatlar" },
                { href: "/#portfolio", label: "Portfolio" },
                { href: "/#about",     label: "Nega Biz?" },
                { href: "/#calculator",label: "Kalkulyator" },
                { href: "/#faq",       label: "FAQ" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-mono text-xs text-[#8FA6BC] hover:text-[#5FD8E8] transition-colors flex items-center gap-2 uppercase tracking-wide"
                  >
                    <span className="text-[#5FD8E8]/30">›</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-mono text-[10px] text-[#FF6B35] uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
              <span className="w-3 h-px bg-[#FF6B35]/50 inline-block" />
              Bog&apos;lanish
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-[#8FA6BC]">
                <MapPin className="w-3.5 h-3.5 text-[#5FD8E8] mt-0.5 flex-shrink-0" />
                <span className="font-sans text-xs leading-relaxed">
                  Sirdaryo viloyati, Guliston shahri, IT Live binosi
                </span>
              </li>
              <li>
                <a
                  href="tel:+998901234567"
                  className="flex items-center gap-3 text-[#8FA6BC] hover:text-[#5FD8E8] transition-colors font-mono text-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-[#5FD8E8] flex-shrink-0" />
                  +998 90 123 45 67
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@raqamly.uz"
                  className="flex items-center gap-3 text-[#8FA6BC] hover:text-[#FF6B35] transition-colors font-mono text-xs"
                >
                  <Mail className="w-3.5 h-3.5 text-[#FF6B35] flex-shrink-0" />
                  info@raqamly.uz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#5FD8E8]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] text-[#8FA6BC]/50 uppercase tracking-wider">
              © {year} Raqamly. Barcha huquqlar himoyalangan.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] text-[#8FA6BC]/40 uppercase tracking-wider">
              Made with ♥ in Sirdaryo
            </span>
            {/* Scroll to top */}
            <button
              id="footer-scroll-top"
              onClick={scrollToTop}
              className="w-8 h-8 rounded-sm border border-[#5FD8E8]/20 flex items-center justify-center text-[#5FD8E8]/50 hover:text-[#5FD8E8] hover:border-[#5FD8E8]/50 transition-all cursor-pointer"
              title="Yuqoriga"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
