"use client";

import Link from "next/link";
import { Bot, Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/app/context/LanguageContext";

export function Footer() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (pathname?.startsWith("/admin")) return null;

  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A1E35] border-t border-[#5FD8E8]/10 pt-16 pb-10 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group" id="footer-logo">
              <div className="w-10 h-10 rounded-sm border border-[#5FD8E8]/35 flex items-center justify-center bg-[#0F2A4A] group-hover:border-[#5FD8E8] transition-colors">
                <span className="font-display font-black text-xl text-[#5FD8E8] leading-none">R</span>
              </div>
              <div>
                <span className="font-display font-black text-xl text-[#EDF3F5] tracking-tight leading-none block">
                  Raqam<span className="text-[#5FD8E8]">ly</span>
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8FA6BC] block -mt-0.5">
                  STUDIO & AI
                </span>
              </div>
            </Link>

            <p className="font-sans text-sm text-[#8FA6BC] leading-relaxed max-w-sm">
              Sirdaryo viloyati va O'zbekiston miqyosida biznes jarayonlarini to'liq raqamlashtirish — veb-saytlar, AI Telegram botlar va CRM/ERP tizimlar.
            </p>

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

            <div className="font-mono text-[10px] text-[#8FA6BC]/40 uppercase tracking-widest">
              N40°29' E68°47' · GULISTON IT LIVE
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="font-mono text-[10px] text-[#5FD8E8] uppercase tracking-[0.2em] mb-5 flex items-center gap-2 font-bold">
              <span className="w-3 h-px bg-[#5FD8E8]/50 inline-block" />
              Sahifalar
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/#services", label: t("nav.services") },
                { href: "/#portfolio", label: t("nav.portfolio") },
                { href: "/#calculator", label: t("nav.calculator") },
                { href: "/#pricing", label: t("nav.pricing") },
                { href: "/#team", label: t("nav.team") },
                { href: "/#tech", label: t("nav.tech") },
                { href: "/#location", label: t("nav.location") },
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
            <h4 className="font-mono text-[10px] text-[#FF6B35] uppercase tracking-[0.2em] mb-5 flex items-center gap-2 font-bold">
              <span className="w-3 h-px bg-[#FF6B35]/50 inline-block" />
              Bog'lanish
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-[#8FA6BC]">
                <MapPin className="w-3.5 h-3.5 text-[#5FD8E8] mt-0.5 shrink-0" />
                <span className="font-sans text-xs leading-relaxed">
                  {t("footer.address")}
                </span>
              </li>
              <li>
                <a
                  href="tel:+998901234567"
                  className="flex items-center gap-3 text-[#8FA6BC] hover:text-[#5FD8E8] transition-colors font-mono text-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-[#5FD8E8] shrink-0" />
                  +998 90 123 45 67
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@raqamly.uz"
                  className="flex items-center gap-3 text-[#8FA6BC] hover:text-[#FF6B35] transition-colors font-mono text-xs"
                >
                  <Mail className="w-3.5 h-3.5 text-[#FF6B35] shrink-0" />
                  info@raqamly.uz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#5FD8E8]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[10px] text-[#8FA6BC]/50 uppercase tracking-wider">
            © {year} Raqamly IT Studio. {t("footer.rights")}
          </span>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] text-[#8FA6BC]/40 uppercase tracking-wider">
              Blueprint Architecture System v2.6
            </span>
            <button
              id="footer-scroll-top"
              onClick={scrollToTop}
              className="w-8 h-8 rounded-sm border border-[#5FD8E8]/20 flex items-center justify-center text-[#5FD8E8]/50 hover:text-[#5FD8E8] hover:border-[#5FD8E8] transition-all cursor-pointer"
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
