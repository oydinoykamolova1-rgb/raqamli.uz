"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export function LocationSection() {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-20 bg-[#0A1E35] border-t border-[#5FD8E8]/10 relative">
      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#E85A24] bg-[#E85A24]/10 border border-[#E85A24]/30 px-3.5 py-1 rounded-xs uppercase tracking-widest mb-4 font-bold">
            [SHEET 08 // GULISTON BOSH QARARGOX KOORDINATALARI]
          </div>
          <h2 className="font-display text-3xl lg:text-5xl font-black text-[#EDF3F5] tracking-tight">
            {t("location.title")}
          </h2>
          <p className="font-sans text-base text-[#8FA6BC] mt-4">
            {t("location.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Contact Details Card */}
          <div className="bg-[#0F2A4A] border border-[#5FD8E8]/20 rounded-sm p-8 space-y-6">
            <div className="font-mono text-xs text-[#5FD8E8] font-bold uppercase tracking-widest border-b border-[#5FD8E8]/15 pb-4">
              [BLUEPRINT CONTACT SHEET]
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#0A1E35] border border-[#5FD8E8]/30 rounded-xs text-[#5FD8E8]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono text-xs text-[#8FA6BC] uppercase">Manzil / Location</div>
                <div className="font-sans font-bold text-sm text-[#EDF3F5] mt-1">{t("location.address")}</div>
                <div className="font-mono text-[11px] text-[#5FD8E8] mt-1">40.489444° N, 68.783333° E</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#0A1E35] border border-[#5FD8E8]/30 rounded-xs text-[#E85A24]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono text-xs text-[#8FA6BC] uppercase">Telefon / Call</div>
                <div className="font-sans font-bold text-sm text-[#EDF3F5] mt-1">+998 90 123 45 67</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#0A1E35] border border-[#5FD8E8]/30 rounded-xs text-[#FF6B35]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono text-xs text-[#8FA6BC] uppercase">Email</div>
                <div className="font-sans font-bold text-sm text-[#EDF3F5] mt-1">info@raqamly.uz</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#0A1E35] border border-[#5FD8E8]/30 rounded-xs text-[#5FD8E8]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono text-xs text-[#8FA6BC] uppercase">Ish Vaqti / Hours</div>
                <div className="font-sans font-bold text-sm text-[#EDF3F5] mt-1">{t("location.workHours")}</div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=40.489444,68.783333"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#5FD8E8]/10 hover:bg-[#5FD8E8]/20 border border-[#5FD8E8]/30 text-[#5FD8E8] font-mono text-xs font-bold rounded-sm transition-all"
            >
              <Navigation className="w-4 h-4" /> Google Maps'da Ochish
            </a>
          </div>

          {/* Styled Blueprint Map Frame */}
          <div className="lg:col-span-2 bg-[#0F2A4A] border border-[#5FD8E8]/30 rounded-sm overflow-hidden h-96 relative shadow-2xl">
            <iframe
              title="Guliston IT Live Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.7845689123!2d68.783333!3d40.489444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI5JzIyLjAiTiA2OMKwNDcn00LjAiRQ!5e0!3m2!1sen!2suz!4v1700000000000!5m2!1sen!2suz"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(1.2)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Blueprint Crosshair Overlay */}
            <div className="absolute top-4 left-4 font-mono text-[10px] bg-[#0A1E35]/90 border border-[#5FD8E8]/40 px-3 py-1 text-[#5FD8E8] rounded-xs pointer-events-none">
              [BLUEPRINT MAP // LAT: 40.4894 | LNG: 68.7833]
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
