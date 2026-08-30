"use client";

import { useState, useEffect, useRef } from "react";
import {
  Rocket, Clock, CheckCircle2, ArrowRight, ShieldCheck,
  Zap, Globe2, Database, Bot, ChevronDown, Send,
  MapPin, Mail, Phone, Quote, Star, Cpu, ExternalLink, Filter, HelpCircle
} from "lucide-react";
import { ConsultationButton } from "@/components/ConsultationButton";
import { CanalDiagram } from "@/components/CanalDiagram";
import { CaseStudyModal, CaseStudyData } from "@/components/CaseStudyModal";
import { TeamSection } from "@/components/TeamSection";
import { PricingSection } from "@/components/PricingSection";
import { TechStackSection } from "@/components/TechStackSection";
import { TrustBar } from "@/components/TrustBar";
import { InteractiveCrmWidget } from "@/components/InteractiveCrmWidget";
import { LocationSection } from "@/components/LocationSection";
import { useLanguage } from "@/app/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";

/* ─── Animated Counter Hook ─── */
function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf: number;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return count;
}

function StatCounter({ target, suffix = "", label, visible }: { target: number; suffix?: string; label: string; visible: boolean }) {
  const count = useCountUp(target, 1800, visible);
  return (
    <div className="text-center p-3 bg-[#0A1E35]/60 border border-[#5FD8E8]/15 rounded-sm">
      <div className="font-display text-4xl lg:text-5xl font-black text-[#5FD8E8] tabular-nums">{count}{suffix}</div>
      <div className="font-mono text-[10px] text-[#8FA6BC] uppercase tracking-widest mt-1.5 font-bold">{label}</div>
    </div>
  );
}

function FaqItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item border border-[#5FD8E8]/15 rounded-sm bg-[#0F2A4A]/60 overflow-hidden">
      <button
        id={`faq-btn-${i}`}
        className="w-full flex items-center justify-between p-5 text-left gap-4 cursor-pointer hover:bg-[#5FD8E8]/5 transition-colors"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#FF6B35] font-bold w-6 shrink-0">[0{i + 1}]</span>
          <span className="font-display font-bold text-[#EDF3F5] text-base lg:text-lg">{q}</span>
        </span>
        <ChevronDown className={`w-5 h-5 text-[#5FD8E8] shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-60 p-5 pt-0 border-t border-[#5FD8E8]/10" : "max-h-0"}`}>
        <p className="font-sans text-sm text-[#8FA6BC] leading-relaxed pt-3">{a}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const { t } = useLanguage();
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [calcSector, setCalcSector] = useState("ecommerce");
  const [calcScale, setCalcScale] = useState("small");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyData | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  // Dynamic ROI Calculator calculations
  const calcResult = (() => {
    const baseHours: Record<string, number> = { ecommerce: 45, restaurant: 35, service: 30, warehouse: 60 };
    const baseRevenue: Record<string, number> = { ecommerce: 25, restaurant: 20, service: 15, warehouse: 35 };
    const baseCostCut: Record<string, number> = { ecommerce: 30, restaurant: 25, service: 20, warehouse: 40 };

    const mult: Record<string, number> = { small: 1, medium: 2.5, large: 4.5 };
    const m = mult[calcScale] ?? 1;

    return {
      hours: Math.round((baseHours[calcSector] ?? 35) * m),
      revenue: Math.round((baseRevenue[calcSector] ?? 20) * (m * 0.8)),
      costCut: Math.round((baseCostCut[calcSector] ?? 25) * (m * 0.7)),
    };
  })();

  const caseStudies: CaseStudyData[] = [
    {
      id: "CS-001",
      title: "SilkRoad ERP & Savdo Boshqaruv Tizimi",
      category: "CRM & ERP",
      client: "SilkRoad Logistics LLC",
      period: "2026-yil Fevral",
      heroImage: "/portfolio-crm.png",
      liveUrl: "https://raqamly.uz",
      problem: "Omborxona va yuk tashish hisob-kitoblari Excel jadvalida yuritilar va insoniy omillar tufayli oyiga 15% xatolik va ortiqcha xarajat paydo bo'lar edi.",
      solution: "NestJS, Next.js 15 va Prisma ORM arxitekturasida real vaqtli ombor boshqaruvi va moliya analitikasi platformasi qurildi.",
      results: [
        { label: "Ombor Xatoliklari", value: "0.1%", desc: "Dasturiy nazorat orqali insoniy omillar tugatildi." },
        { label: "Tejalgan Vaqt", value: "90 Soat/oy", desc: "Avtomatik hisobot yaratish hisobiga." },
        { label: "Savdo O'sishi", value: "+42%", desc: "Mijozlar buyurtmasi 3x tezroq bajarilishi hisobiga." },
      ],
      techStack: ["Next.js 15", "NestJS", "Prisma ORM", "PostgreSQL", "TailwindCSS"],
      blueprintSteps: [
        "Texnik topshiriq va ombor tizimi arxitekturasini loyihalash",
        "NestJS backend API va Prisma DB sxemasini yaratish",
        "Next.js Dashboard interfeysi va Telegram bot bildirishnomalarini integratsiya qilish",
        "Sinov va xodimlarni o'qitish",
      ],
    },
    {
      id: "CS-002",
      title: "FastEats AI-Powered Telegram Bot Ekotizimi",
      category: "Telegram Bot & AI",
      client: "Guliston FastFood Tarmoqlari",
      period: "2026-yil Yanvar",
      heroImage: "/portfolio-bot.png",
      liveUrl: "https://t.me/raqamli_uzbot",
      problem: "Operatorlar telefon qo'ng'iroqlarini o'z vaqtida qabul qilolmasdi va tig'iz vaqtda 30% mijozlar yo'qotilardi.",
      solution: "Telegraf va Click/Payme to'lovlarga ulangan 24/7 ishlovchi interaktiv Telegram Bot ishlab chiqildi.",
      results: [
        { label: "Buyurtma Qamrovi", value: "3x", desc: "Tig'iz vaqtda ham barcha buyurtmalar soniyada qabul qilinadi." },
        { label: "Konversiya", value: "99.2%", desc: "Click va Payme orqali bir zumda to'lov qilinadi." },
        { label: "Mijoz Mamnunligi", value: "4.9 / 5.0", desc: "Tezkor va xatosiz yetkazib berish." },
      ],
      techStack: ["Telegraf", "Node.js", "Click API", "Payme API", "SQLite"],
      blueprintSteps: [
        "Bot menyusi va navigatsiyasini loyihalash",
        "Click va Payme to'lov merchant integratsiyasi",
        "Ospaz va kurerlar uchun admin bildirishnomalari",
      ],
    },
    {
      id: "CS-003",
      title: "Raqamly IT Studio Veb-Platformasi",
      category: "Veb-sayt",
      client: "Raqamly IT Kompaniyasi",
      period: "2026-yil Avgust",
      heroImage: "/portfolio-web.png",
      liveUrl: "https://raqamly.uz",
      problem: "Eski statik veb-sayt mobil qurilmalarda sekin yuklanar va mijoz arizalari Telegram botga kelmas edi.",
      solution: "Futuristic Blueprint va Glassmorphism stolidagi Next.js 15 App Router platformasi barpo etildi.",
      results: [
        { label: "Google PageSpeed", value: "98/100", desc: "Ultra-tezkor yuklanish va SEO optimizatsiyasi." },
        { label: "Ariza O'sishi", value: "+180%", desc: "Konsultatsiya modali va Telegram API sababli." },
        { label: "Uptime", value: "99.9%", desc: "Vercel va Cloudflare xavfsizlik tarmog'i." },
      ],
      techStack: ["Next.js 15", "TypeScript", "TailwindCSS", "Framer Motion", "NestJS"],
      blueprintSteps: [
        "Blueprint muhandislik dizayni va kursor/animatsiya arxitekturasi",
        "NestJS API va Telegram Bot xabarnomalari",
        "i18n ko'p tillilik va SEO schemasi",
      ],
    },
  ];

  const faqList = [
    { q: "Loyiha qancha vaqt davom etadi?", a: "Murakkablikka qarab: oddiy landing page 5–10 kun, Telegram bot 1–3 hafta, to'liq CRM/ERP tizim 1–3 oy. Aniq muddat texnik topshiriq (blueprint) asosida belgilanadi." },
    { q: "Narxlar va to'lov tartibi qanday?", a: "Narxlar shaffof va bosqichma-bosqich: 50% boshlang'ich bo'nak, 50% loyiha to'liq topshirilgandan va sinovdan o'tgandan keyin. Yashirin to'lovlar yo'q." },
    { q: "Jamoangiz mutaxassislari haqida ma'lumot bera olasizmi?", a: "Jamoamiz Sirdaryo viloyati, Guliston shahridagi 'IT Live' binosida joylashgan. Tajribali full-stack dasturchilar, AI bot muhandislari va UI/UX arxitektorlaridan iborat." },
    { q: "Loyiha topshirilgandan keyin texnik qo'llab-quvvatlash bormi?", a: "Ha, biz barcha loyihalarimizga 6 oydan 1 yilgacha kafolatlangan texnik va xavfsizlik qo'llab-quvvatlashini shartnoma bilan taqdim etamiz." },
    { q: "Ko'p tilli (UZ / RU) platforma yaratsa bo'ladimi?", a: "Albatta! Biz barcha veb-saytlar va botlarni 100% o'zbek va rus tillarida moslashgan arxitekturada topshiramiz." },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-[#0F2A4A] text-[#EDF3F5] font-sans selection:bg-[#E85A24] selection:text-white">

      {/* ═══ HERO SECTION ═══ */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden cyber-grid">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-[#5FD8E8]/8 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] bg-[#FF6B35]/6 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="flex flex-col items-start">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xs bg-[#5FD8E8]/10 border border-[#5FD8E8]/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#5FD8E8] animate-pulse" />
                <span className="font-mono text-xs text-[#5FD8E8] tracking-widest uppercase font-bold">
                  {t("hero.badge")}
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#EDF3F5] leading-[1.05] tracking-tight mb-6">
                {t("hero.title1")}<br />
                <span className="gradient-text-blueprint">{t("hero.title2")}</span><br />
                {t("hero.title3")}
              </h1>

              <p className="font-sans text-base text-[#8FA6BC] max-w-xl mb-10 leading-relaxed">
                {t("hero.desc")}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12 w-full sm:w-auto">
                <ConsultationButton
                  text={t("hero.ctaPrimary")}
                  className="h-13 px-8 rounded-sm bg-[#FF6B35] hover:bg-[#E85A24] text-white font-display font-bold text-base shadow-[0_0_30px_rgba(255,107,53,0.35)] transition-all hover:scale-105"
                />
                <Link
                  href="#calculator"
                  className="inline-flex items-center justify-center gap-2 h-13 px-8 rounded-sm border border-[#5FD8E8]/30 text-[#5FD8E8] font-mono text-xs font-bold hover:bg-[#5FD8E8]/10 transition-all uppercase tracking-wider"
                >
                  <span>{t("hero.ctaSecondary")}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Animated Counters Bar */}
              <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full border-t border-[#5FD8E8]/15 pt-8">
                <StatCounter target={50} suffix="+" label={t("stats.projects")} visible={statsVisible} />
                <StatCounter target={30} suffix="+" label={t("stats.clients")} visible={statsVisible} />
                <StatCounter target={4} suffix=" yil" label={t("stats.experience")} visible={statsVisible} />
                <StatCounter target={99.9} suffix="%" label={t("stats.uptime")} visible={statsVisible} />
              </div>

            </div>

            {/* Right Interactive Canal Diagram */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-full rounded-sm border border-[#5FD8E8]/30 bg-[#0A1E35]/80 backdrop-blur-md p-5 shadow-2xl">
                <div className="flex items-center justify-between border-b border-[#5FD8E8]/20 pb-3 mb-4">
                  <div className="font-mono text-[10px] text-[#5FD8E8] font-bold tracking-widest uppercase">
                    {t("hero.sheetTag")}
                  </div>
                  <div className="font-mono text-[10px] text-[#8FA6BC] tracking-widest">
                    {t("hero.coord")}
                  </div>
                </div>
                <CanalDiagram />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ TRUST BAR / PARTNERS ═══ */}
      <TrustBar />

      {/* ═══ SERVICES SECTION ═══ */}
      <section id="services" className="py-20 bg-[#0A1E35] border-t border-[#5FD8E8]/10 relative">
        <div className="container mx-auto px-4 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#E85A24] bg-[#E85A24]/10 border border-[#E85A24]/30 px-3.5 py-1 rounded-xs uppercase tracking-widest mb-4 font-bold">
              [SHEET 01 // PROFESSIONAL XIZMATLAR]
            </div>
            <h2 className="font-display text-3xl lg:text-5xl font-black text-[#EDF3F5] tracking-tight">
              {t("services.title")}
            </h2>
            <p className="font-sans text-base text-[#8FA6BC] mt-4">
              {t("services.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: t("services.s1Title"),
                desc: t("services.s1Desc"),
                tag: "WEB DEV",
                icon: <Globe2 className="w-6 h-6 text-[#5FD8E8]" />,
              },
              {
                title: t("services.s2Title"),
                desc: t("services.s2Desc"),
                tag: "TELEGRAM BOT",
                icon: <Bot className="w-6 h-6 text-[#FF6B35]" />,
              },
              {
                title: t("services.s3Title"),
                desc: t("services.s3Desc"),
                tag: "CRM & ERP",
                icon: <Database className="w-6 h-6 text-[#E85A24]" />,
              },
              {
                title: t("services.s4Title"),
                desc: t("services.s4Desc"),
                tag: "PROTOTYPING",
                icon: <Cpu className="w-6 h-6 text-[#5FD8E8]" />,
              },
            ].map((s, idx) => (
              <div
                key={idx}
                className="group p-6 bg-[#0F2A4A]/80 border border-[#5FD8E8]/20 rounded-sm hover:border-[#5FD8E8] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-[#0A1E35] border border-[#5FD8E8]/20 rounded-xs">
                      {s.icon}
                    </div>
                    <span className="font-mono text-[10px] text-[#5FD8E8] bg-[#5FD8E8]/10 border border-[#5FD8E8]/20 px-2 py-0.5 rounded-xs font-bold">
                      {s.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-xl text-[#EDF3F5] group-hover:text-[#5FD8E8] transition-colors mb-3">
                    {s.title}
                  </h3>

                  <p className="font-sans text-xs text-[#8FA6BC] leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#5FD8E8]/10">
                  <ConsultationButton
                    text="Konsultatsiya →"
                    className="font-mono text-xs text-[#5FD8E8] hover:text-[#EDF3F5] font-bold"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══ INTERACTIVE CALCULATOR SECTION ═══ */}
      <section id="calculator" className="py-20 bg-[#0F2A4A] border-t border-[#5FD8E8]/10 relative">
        <div className="container mx-auto px-4 lg:px-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#5FD8E8] bg-[#5FD8E8]/10 border border-[#5FD8E8]/30 px-3.5 py-1 rounded-xs uppercase tracking-widest mb-4 font-bold">
              [SHEET 02 // DASTURLASH VA EFEKTIVLIK KALKULYATORI]
            </div>
            <h2 className="font-display text-3xl lg:text-5xl font-black text-[#EDF3F5] tracking-tight">
              {t("calc.title")}
            </h2>
            <p className="font-sans text-base text-[#8FA6BC] mt-4">
              {t("calc.subtitle")}
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-[#0A1E35] border border-[#5FD8E8]/30 rounded-sm p-6 lg:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Options */}
            <div className="space-y-6">
              
              {/* Sector Selection */}
              <div>
                <label className="block font-mono text-xs font-bold text-[#5FD8E8] uppercase tracking-wider mb-3">
                  {t("calc.sectorLabel")}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { id: "ecommerce", label: t("calc.secEcommerce") },
                    { id: "restaurant", label: t("calc.secRestaurant") },
                    { id: "service", label: t("calc.secService") },
                    { id: "warehouse", label: t("calc.secWarehouse") },
                  ].map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => setCalcSector(sec.id)}
                      className={`p-3 text-left font-mono text-xs rounded-xs border transition-all ${
                        calcSector === sec.id
                          ? "bg-[#5FD8E8] text-[#0F2A4A] border-[#5FD8E8] font-bold shadow-md"
                          : "bg-[#0F2A4A] text-[#8FA6BC] border-[#5FD8E8]/20 hover:text-[#EDF3F5]"
                      }`}
                    >
                      {sec.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scale Selection */}
              <div>
                <label className="block font-mono text-xs font-bold text-[#5FD8E8] uppercase tracking-wider mb-3">
                  {t("calc.scaleLabel")}
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: "small", label: t("calc.scaleSmall") },
                    { id: "medium", label: t("calc.scaleMedium") },
                    { id: "large", label: t("calc.scaleLarge") },
                  ].map((sc) => (
                    <button
                      key={sc.id}
                      onClick={() => setCalcScale(sc.id)}
                      className={`p-3 text-center font-mono text-xs rounded-xs border transition-all ${
                        calcScale === sc.id
                          ? "bg-[#FF6B35] text-white border-[#FF6B35] font-bold shadow-md"
                          : "bg-[#0F2A4A] text-[#8FA6BC] border-[#5FD8E8]/20 hover:text-[#EDF3F5]"
                      }`}
                    >
                      {sc.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Live Result Display */}
            <div className="bg-[#0F2A4A] border border-[#5FD8E8]/20 rounded-sm p-6 flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs text-[#8FA6BC] uppercase tracking-widest mb-4 font-bold border-b border-[#5FD8E8]/10 pb-3">
                  [HISOBLANGAN EFFEKTIVLIK METRIKALARI]
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="font-mono text-xs text-[#8FA6BC]">{t("calc.resultHours")}</div>
                    <div className="font-display text-4xl font-black text-[#5FD8E8]">
                      {calcResult.hours} soat
                    </div>
                  </div>

                  <div>
                    <div className="font-mono text-xs text-[#8FA6BC]">{t("calc.resultRevenue")}</div>
                    <div className="font-display text-3xl font-black text-[#FF6B35]">
                      +{calcResult.revenue}%
                    </div>
                  </div>

                  <div>
                    <div className="font-mono text-xs text-[#8FA6BC]">{t("calc.resultCost")}</div>
                    <div className="font-display text-3xl font-black text-[#E85A24]">
                      -{calcResult.costCut}%
                    </div>
                  </div>
                </div>
              </div>

              <ConsultationButton
                text={t("calc.cta")}
                className="w-full mt-6 py-3.5 bg-[#FF6B35] hover:bg-[#E85A24] text-white font-display font-bold text-xs rounded-sm shadow-md"
              />
            </div>

          </div>

        </div>
      </section>

      {/* ═══ PORTFOLIO & CASE STUDIES SECTION ═══ */}
      <section id="portfolio" className="py-20 bg-[#0A1E35] border-t border-[#5FD8E8]/10 relative">
        <div className="container mx-auto px-4 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#E85A24] bg-[#E85A24]/10 border border-[#E85A24]/30 px-3.5 py-1 rounded-xs uppercase tracking-widest mb-4 font-bold">
              [SHEET 03 // CASE STUDIES VA AMALIY LOYIHALAR]
            </div>
            <h2 className="font-display text-3xl lg:text-5xl font-black text-[#EDF3F5] tracking-tight">
              {t("portfolio.title")}
            </h2>
            <p className="font-sans text-base text-[#8FA6BC] mt-4">
              {t("portfolio.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <div
                key={cs.id}
                className="group bg-[#0F2A4A] border border-[#5FD8E8]/20 rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#5FD8E8] transition-all duration-300"
              >
                <div>
                  <div className="relative w-full h-52 bg-[#0A1E35] overflow-hidden">
                    <Image
                      src={cs.heroImage}
                      alt={cs.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A4A] via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 font-mono text-[10px] bg-[#0A1E35]/90 border border-[#5FD8E8]/40 px-2.5 py-1 text-[#5FD8E8] rounded-xs font-bold">
                      {cs.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display font-black text-xl text-[#EDF3F5] group-hover:text-[#5FD8E8] transition-colors mb-2">
                      {cs.title}
                    </h3>
                    <p className="font-sans text-xs text-[#8FA6BC] line-clamp-2 mb-4">
                      {cs.problem}
                    </p>

                    <div className="space-y-2 border-t border-[#5FD8E8]/10 pt-3">
                      {cs.results.map((r, rIdx) => (
                        <div key={rIdx} className="flex items-center justify-between font-mono text-xs">
                          <span className="text-[#8FA6BC]">{r.label}:</span>
                          <span className="text-[#5FD8E8] font-bold">{r.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedCaseStudy(cs)}
                    className="w-full py-2.5 bg-[#5FD8E8]/10 hover:bg-[#5FD8E8]/20 border border-[#5FD8E8]/30 text-[#5FD8E8] font-mono text-xs font-bold rounded-xs transition-all flex items-center justify-center gap-2"
                  >
                    <span>{t("portfolio.btnDetails")}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Case Study Detail Modal */}
      <CaseStudyModal
        data={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* ═══ TEAM SECTION ═══ */}
      <TeamSection />

      {/* ═══ PRICING SECTION ═══ */}
      <PricingSection />

      {/* ═══ TECH STACK SECTION ═══ */}
      <TechStackSection />

      {/* ═══ LIVE CRM SIMULATION WIDGET ═══ */}
      <InteractiveCrmWidget />

      {/* ═══ LOCATION SECTION ═══ */}
      <LocationSection />

      {/* ═══ FAQ SECTION ═══ */}
      <section id="faq" className="py-20 bg-[#0F2A4A] border-t border-[#5FD8E8]/10 relative">
        <div className="container mx-auto px-4 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#5FD8E8] bg-[#5FD8E8]/10 border border-[#5FD8E8]/30 px-3.5 py-1 rounded-xs uppercase tracking-widest mb-4 font-bold">
              [SHEET 09 // K'OP SO'RALADIGAN SAVOLLAR]
            </div>
            <h2 className="font-display text-3xl lg:text-5xl font-black text-[#EDF3F5] tracking-tight">
              Tez-Tez Beriladigan Savollar
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqList.map((item, idx) => (
              <FaqItem key={idx} q={item.q} a={item.a} i={idx} />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
