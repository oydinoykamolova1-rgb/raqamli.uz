"use client";

import React, { useState } from "react";
import { Code2, Database, Globe, Bot, Shield, Cpu, Terminal, Layers } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

interface TechItem {
  name: string;
  category: "frontend" | "backend" | "ai" | "db";
  desc: string;
  version: string;
  badge: string;
  icon: React.ReactNode;
}

export function TechStackSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"all" | "frontend" | "backend" | "ai" | "db">("all");

  const stack: TechItem[] = [
    {
      name: "Next.js 15",
      category: "frontend",
      version: "v15.1 (App Router)",
      desc: "Ultra-tezkor SSR/SSG veb-saytlar va SEO mukammalligi uchun.",
      badge: "Frontend Core",
      icon: <Globe className="w-6 h-6 text-[#5FD8E8]" />,
    },
    {
      name: "React 19",
      category: "frontend",
      version: "v19.0",
      desc: "Reaktiv va interaktiv foydalanuvchi interfeyslari.",
      badge: "UI Library",
      icon: <Code2 className="w-6 h-6 text-[#5FD8E8]" />,
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      version: "v4.0",
      desc: "Moslashuvchan, zamonaviy va yengil dizayn tizimi.",
      badge: "Styling",
      icon: <Layers className="w-6 h-6 text-[#5FD8E8]" />,
    },
    {
      name: "NestJS 11",
      category: "backend",
      version: "v11.0",
      desc: "Korporativ darajadagi modul va mikro-servis arxitekturasi.",
      badge: "Backend Core",
      icon: <Terminal className="w-6 h-6 text-[#E85A24]" />,
    },
    {
      name: "Prisma ORM",
      category: "db",
      version: "v6.0",
      desc: "Type-safe va xavfsiz ma'lumotlar bazasi so'rovlari.",
      badge: "ORM",
      icon: <Database className="w-6 h-6 text-[#5FD8E8]" />,
    },
    {
      name: "Telegraf & Bot API",
      category: "ai",
      version: "v4.16",
      desc: "Real vaqtli avtomatlashtirilgan Telegram botlar va kanallar.",
      badge: "Telegram API",
      icon: <Bot className="w-6 h-6 text-[#FF6B35]" />,
    },
    {
      name: "Python AI & FastAPI",
      category: "ai",
      version: "Python 3.12",
      desc: "Sun'iy intellekt, NLP va ma'lumotlarni qayta ishlash modellari.",
      badge: "AI Engine",
      icon: <Cpu className="w-6 h-6 text-[#E85A24]" />,
    },
    {
      name: "PostgreSQL & SQLite",
      category: "db",
      version: "v16.0",
      desc: "Ishonchli va yuqori yuklamalarga chidamli ma'lumotlar ombori.",
      badge: "RDBMS",
      icon: <Database className="w-6 h-6 text-[#5FD8E8]" />,
    },
  ];

  const filtered = activeTab === "all" ? stack : stack.filter((s) => s.category === activeTab);

  return (
    <section id="tech" className="py-20 bg-[#0A1E35] border-t border-[#5FD8E8]/10 relative">
      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#E85A24] bg-[#E85A24]/10 border border-[#E85A24]/30 px-3.5 py-1 rounded-xs uppercase tracking-widest mb-4 font-bold">
            [SHEET 06 // ARXITEKTURA TEXNOLOGIYALARI]
          </div>
          <h2 className="font-display text-3xl lg:text-5xl font-black text-[#EDF3F5] tracking-tight">
            {t("tech.title")}
          </h2>
          <p className="font-sans text-base text-[#8FA6BC] mt-4">
            {t("tech.subtitle")}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: "all", label: t("tech.all") },
            { id: "frontend", label: t("tech.frontend") },
            { id: "backend", label: t("tech.backend") },
            { id: "ai", label: t("tech.ai") },
            { id: "db", label: t("tech.db") },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`font-mono text-xs px-5 py-2.5 rounded-sm border transition-all uppercase tracking-widest ${
                activeTab === tab.id
                  ? "bg-[#5FD8E8] text-[#0F2A4A] border-[#5FD8E8] font-bold shadow-[0_0_15px_rgba(95,216,232,0.3)]"
                  : "bg-[#0F2A4A]/60 text-[#8FA6BC] border-[#5FD8E8]/20 hover:text-[#EDF3F5] hover:border-[#5FD8E8]/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="group p-6 bg-[#0F2A4A]/80 border border-[#5FD8E8]/20 rounded-sm hover:border-[#5FD8E8] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[#0A1E35] border border-[#5FD8E8]/20 rounded-xs group-hover:border-[#5FD8E8]/50 transition-colors">
                    {item.icon}
                  </div>
                  <span className="font-mono text-[10px] text-[#5FD8E8] bg-[#5FD8E8]/10 border border-[#5FD8E8]/20 px-2 py-0.5 rounded-xs font-bold">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-display font-black text-lg text-[#EDF3F5] group-hover:text-[#5FD8E8] transition-colors">
                  {item.name}
                </h3>
                <div className="font-mono text-[11px] text-[#E85A24] font-bold mt-1">
                  {item.version}
                </div>

                <p className="font-sans text-xs text-[#8FA6BC] mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
