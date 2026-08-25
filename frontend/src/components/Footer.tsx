"use client";

import Link from "next/link";
import { Bot, Mail, MapPin, Phone, ArrowRight, ArrowUp, Sparkles, Send, Globe, Share2, MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Hide public site footer on admin pages
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="relative bg-[#030712] border-t border-violet-500/10 pt-20 pb-12 overflow-hidden mt-auto">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(at 50% 100%, rgba(139,92,246,0.12) 0px, transparent 70%)`
      }} />
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-600 to-pink-600 p-[1.5px] shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                <div className="w-full h-full bg-[#070b16] rounded-[14px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-violet-400" />
                </div>
              </div>
              <span className="font-space font-bold text-2xl tracking-tight text-white">
                Raqam<span className="gradient-text-cyber">ly</span>
              </span>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Sirdaryo viloyati va O&apos;zbekiston miqyosida biznes jarayonlarini to&apos;liq raqamlashtirish, yuqori sifatli veb-saytlar hamda AI Telegram botlarni ishlab chiqish kompaniyasi.
            </p>

            {/* Telegram Bot Button */}
            <div>
              <Link
                href="https://t.me/raqamli_uzbot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-violet-950/40 hover:bg-violet-900/50 text-cyan-300 font-semibold border border-cyan-500/30 hover:border-cyan-400 transition-all text-xs group shadow-[0_0_20px_rgba(6,182,212,0.15)] font-space"
              >
                <Bot className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
                <span>@raqamli_uzbot</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://t.me/raqamli_uz" target="_blank" rel="noopener noreferrer" title="Telegram" className="w-9 h-9 rounded-xl glass-panel flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors">
                <Send className="w-4 h-4" />
              </a>
              <a href="https://t.me/raqamli_uz" target="_blank" rel="noopener noreferrer" title="Muloqot" className="w-9 h-9 rounded-xl glass-panel flex items-center justify-center text-gray-400 hover:text-pink-400 hover:border-pink-500/40 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" title="Ulashish" className="w-9 h-9 rounded-xl glass-panel flex items-center justify-center text-gray-400 hover:text-violet-400 hover:border-violet-500/40 transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="https://raqamly.uz" title="Rasmiy Veb-Sayt" className="w-9 h-9 rounded-xl glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-space text-white font-bold mb-5 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-500" />
              Bo&apos;limlar
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Bosh sahifa" },
                { href: "/services", label: "Xizmatlarimiz" },
                { href: "/#portfolio", label: "Portfolio" },
                { href: "/#about", label: "Biz haqimizda" },
                { href: "/#process", label: "Jarayon" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1.5 group">
                    <span className="text-xs text-violet-500 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-space text-white font-bold mb-5 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-500" />
              Xizmatlar
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-gray-200 transition-colors">CRM & ERP Tizimlar</li>
              <li className="hover:text-gray-200 transition-colors">AI Telegram Botlar</li>
              <li className="hover:text-gray-200 transition-colors">Veb-sayt va Landing Page</li>
              <li className="hover:text-gray-200 transition-colors">UI/UX Interfeys Dizayn</li>
              <li className="hover:text-gray-200 transition-colors">IT Konsalting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-space text-white font-bold mb-5 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Bog&apos;lanish
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-violet-400 mt-1 flex-shrink-0" />
                <span>Sirdaryo viloyati, Guliston shahri, IT Park binosi</span>
              </li>
              <li>
                <a href="tel:+998901234567" className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  +998 90 123 45 67
                </a>
              </li>
              <li>
                <a href="mailto:info@raqamly.uz" className="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition-colors">
                  <Mail className="w-4 h-4 text-pink-400 flex-shrink-0" />
                  info@raqamly.uz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <span>&copy; {new Date().getFullYear()} Raqamly. Barcha huquqlar himoyalangan.</span>
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              Made with <span className="text-pink-500 font-bold">♥</span> in Sirdaryo
            </span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-violet-950/60 border border-violet-500/30 flex items-center justify-center text-violet-300 hover:text-white hover:bg-violet-600 transition-all cursor-pointer"
              title="Yuqoriga"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
