"use client";

import React from "react";
import { Check, Zap, Rocket, Shield, Crown } from "lucide-react";
import { ConsultationButton } from "./ConsultationButton";
import { useLanguage } from "@/app/context/LanguageContext";

interface Tier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  popular?: boolean;
  features: string[];
  icon: React.ReactNode;
}

export function PricingSection() {
  const { t } = useLanguage();

  const tiers: Tier[] = [
    {
      id: "start",
      name: t("pricing.t1Name"),
      price: "$290",
      period: "dan boshlab",
      description: t("pricing.t1Desc"),
      icon: <Rocket className="w-5 h-5 text-[#5FD8E8]" />,
      features: [
        "Zamonaviy Landing Page yoki Veb-sayt",
        "Mobil va Planshet uchun 100% Responsive",
        "SEO va Boshlang'ich Optimizatsiya",
        "Telegram Bot Forma Integratsiyasi",
        "Bepul Domen va SSL Sertifikati",
        "1 Oy Bepul Texnik Qo'llab-quvvatlash",
      ],
    },
    {
      id: "business",
      name: t("pricing.t2Name"),
      price: "$650",
      period: "dan boshlab",
      description: t("pricing.t2Desc"),
      popular: true,
      icon: <Zap className="w-5 h-5 text-[#FF6B35]" />,
      features: [
        "Boshlang'ich tarifidagi barcha xizmatlar",
        "Ko'p sahifali Korporativ Veb-sayt yoki Do'kon",
        "Avtomatlashtirilgan AI Telegram Bot API",
        "Mini CRM / Admin Panel (Arizalar bazasi)",
        "Tolov Tizimlari (Click, Payme) Integratsiyasi",
        "Yuqori Tezlikli Hosting va CDN",
        "3 Oy Bepul Texnik Qo'llab-quvvatlash",
      ],
    },
    {
      id: "enterprise",
      name: t("pricing.t3Name"),
      price: "Shartnoma",
      period: "asosida",
      description: t("pricing.t3Desc"),
      icon: <Crown className="w-5 h-5 text-[#E85A24]" />,
      features: [
        "Biznes jarayonlarini 100% Avtomatlashtirish",
        "Individual NestJS API & Microservices",
        "To'liq ERP / CRM Tizim (Ombor, Moliya, HR)",
        "Omborxona va Telegram Bot Ekotizimi",
        "Ko'p tillilik (i18n UZ / RU / EN)",
        "Maxsus Server Sozlamalari (VPS Security)",
        "1 Yil Kafolatlangan Qo'llab-quvvatlash va Audit",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-[#0F2A4A] border-t border-[#5FD8E8]/10 relative">
      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#5FD8E8] bg-[#5FD8E8]/10 border border-[#5FD8E8]/30 px-3.5 py-1 rounded-xs uppercase tracking-widest mb-4 font-bold">
            [SHEET 05 // SHAFFOF SHARTNOMA VA TARIFLAR]
          </div>
          <h2 className="font-display text-3xl lg:text-5xl font-black text-[#EDF3F5] tracking-tight">
            {t("pricing.title")}
          </h2>
          <p className="font-sans text-base text-[#8FA6BC] mt-4">
            {t("pricing.subtitle")}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative bg-[#0A1E35] border rounded-sm p-8 flex flex-col justify-between transition-all duration-300 ${
                tier.popular
                  ? "border-[#FF6B35] shadow-[0_0_40px_rgba(255,107,53,0.15)] scale-105 z-10"
                  : "border-[#5FD8E8]/20 hover:border-[#5FD8E8]/50"
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 font-mono text-[10px] font-bold uppercase tracking-widest bg-[#FF6B35] text-white px-4 py-1 rounded-xs shadow-md">
                  ★ {t("pricing.popular")} ★
                </div>
              )}

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-black text-xl text-[#EDF3F5]">
                    {tier.name}
                  </span>
                  <div className="p-2 rounded-xs bg-[#0F2A4A] border border-[#5FD8E8]/20">
                    {tier.icon}
                  </div>
                </div>

                <p className="font-sans text-xs text-[#8FA6BC] min-h-[36px]">
                  {tier.description}
                </p>

                {/* Price Display */}
                <div className="my-6 pb-6 border-b border-[#5FD8E8]/10 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-black text-[#5FD8E8]">
                    {tier.price}
                  </span>
                  <span className="font-mono text-xs text-[#8FA6BC]">
                    / {tier.period}
                  </span>
                </div>

                {/* Checklist */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-xs font-sans text-[#EDF3F5]/90">
                      <Check className="w-4 h-4 text-[#5FD8E8] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <ConsultationButton
                text={t("pricing.orderBtn")}
                className={`w-full py-3 font-display font-bold text-xs rounded-sm transition-all ${
                  tier.popular
                    ? "bg-[#FF6B35] hover:bg-[#E85A24] text-white shadow-lg"
                    : "bg-[#5FD8E8]/10 hover:bg-[#5FD8E8]/20 text-[#5FD8E8] border border-[#5FD8E8]/30"
                }`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
