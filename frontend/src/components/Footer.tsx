import Link from "next/link";
import { Bot, Mail, MapPin, Phone, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#09090b] border-t border-white/8 pt-20 pb-10 mt-auto">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(at 50% 100%, rgba(124,58,237,0.08) 0px, transparent 60%)`
      }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center text-white font-black text-xl">
                R
              </div>
              <span className="font-black text-2xl tracking-tight text-white">
                Raqam<span className="gradient-text">ly</span>
              </span>
            </div>
            <p className="text-zinc-500 mb-8 max-w-sm leading-relaxed">
              Sirdaryo viloyatining raqamli kelajagini birgalikda quramiz. Zamonaviy IT yechimlar va sifatli servis.
            </p>
            <Link
              href="https://t.me/raqamli_uzbot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-cyan-400 font-semibold border border-white/8 hover:border-cyan-500/30 transition-all text-sm group"
            >
              <Bot className="w-4 h-4" />
              @raqamli_uzbot
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Bo&apos;limlar</h4>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Bosh sahifa" },
                { href: "/services", label: "Xizmatlar" },
                { href: "/#portfolio", label: "Portfolio" },
                { href: "/#about", label: "Biz haqimizda" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-zinc-500 hover:text-white transition-colors text-sm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Aloqa</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-500 text-sm">
                <MapPin className="w-4 h-4 text-zinc-600 mt-0.5 flex-shrink-0" />
                Sirdaryo viloyati, Guliston sh.
              </li>
              <li>
                <a href="tel:+998901234567" className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors text-sm">
                  <Phone className="w-4 h-4 text-zinc-600 flex-shrink-0" />
                  +998 90 123 45 67
                </a>
              </li>
              <li>
                <a href="mailto:info@raqamly.uz" className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors text-sm">
                  <Mail className="w-4 h-4 text-zinc-600 flex-shrink-0" />
                  info@raqamly.uz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-600 text-sm">
          <span>&copy; {new Date().getFullYear()} Raqamly. Barcha huquqlar himoyalangan.</span>
          <span className="flex items-center gap-1">
            Made with <span className="text-pink-500">♥</span> in Sirdaryo
          </span>
        </div>
      </div>
    </footer>
  );
}
