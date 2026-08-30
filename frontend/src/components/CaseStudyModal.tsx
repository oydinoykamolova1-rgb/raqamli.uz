"use client";

import React from "react";
import { X, CheckCircle, ArrowRight, Zap, Target, ShieldCheck, Code, ExternalLink } from "lucide-react";
import Image from "next/image";
import { ConsultationButton } from "./ConsultationButton";

export interface CaseStudyData {
  id: string;
  title: string;
  category: string;
  client: string;
  period: string;
  heroImage: string;
  liveUrl?: string;
  problem: string;
  solution: string;
  results: { label: string; value: string; desc: string }[];
  techStack: string[];
  blueprintSteps: string[];
}

interface Props {
  data: CaseStudyData | null;
  onClose: () => void;
}

export function CaseStudyModal({ data, onClose }: Props) {
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#040D1A]/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0A1E35] border border-[#5FD8E8]/30 rounded-sm shadow-[0_20px_80px_rgba(0,0,0,0.8)] text-[#EDF3F5] p-6 lg:p-10 font-sans">
        
        {/* Technical Header / Grid Decor */}
        <div className="flex items-center justify-between border-b border-[#5FD8E8]/20 pb-4 mb-6">
          <div>
            <div className="font-mono text-xs text-[#E85A24] uppercase tracking-widest font-bold">
              [CASE-STUDY // BLUEPRINT ID: {data.id}]
            </div>
            <h2 className="font-display text-2xl lg:text-3xl font-black text-[#5FD8E8] mt-1">
              {data.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-sm bg-[#0F2A4A] border border-[#5FD8E8]/30 flex items-center justify-center text-[#8FA6BC] hover:text-[#5FD8E8] hover:border-[#5FD8E8] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Banner Image */}
        <div className="relative w-full h-56 sm:h-72 mb-8 rounded-sm overflow-hidden border border-[#5FD8E8]/20 bg-[#0F2A4A]">
          <Image
            src={data.heroImage}
            alt={data.title}
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E35] via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-xs bg-[#0A1E35]/90 border border-[#5FD8E8]/40 px-3 py-1 text-[#5FD8E8] rounded-xs">
              Mijoz: {data.client}
            </span>
            <span className="font-mono text-xs bg-[#E85A24]/90 text-white px-3 py-1 rounded-xs font-bold">
              Bajarildi: {data.period}
            </span>
          </div>
        </div>

        {/* Measurable Results Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {data.results.map((res, idx) => (
            <div key={idx} className="p-4 bg-[#0F2A4A] border border-[#5FD8E8]/20 rounded-sm">
              <div className="font-display text-3xl font-black text-[#5FD8E8]">{res.value}</div>
              <div className="font-sans font-bold text-sm text-[#EDF3F5] mt-1">{res.label}</div>
              <div className="font-sans text-xs text-[#8FA6BC] mt-1">{res.desc}</div>
            </div>
          ))}
        </div>

        {/* Main Content: Problem vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Problem */}
          <div className="p-5 bg-[#0F2A4A]/60 border border-[#E85A24]/30 rounded-sm">
            <div className="flex items-center gap-2 font-mono text-xs text-[#E85A24] font-bold uppercase mb-2">
              <Target className="w-4 h-4" /> Mijoz Muammosi (Problem)
            </div>
            <p className="font-sans text-sm text-[#8FA6BC] leading-relaxed">
              {data.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="p-5 bg-[#0F2A4A]/60 border border-[#5FD8E8]/30 rounded-sm">
            <div className="flex items-center gap-2 font-mono text-xs text-[#5FD8E8] font-bold uppercase mb-2">
              <Zap className="w-4 h-4" /> Muhandislik Yechimi (Solution)
            </div>
            <p className="font-sans text-sm text-[#EDF3F5]/90 leading-relaxed">
              {data.solution}
            </p>
          </div>
        </div>

        {/* Blueprint Process Steps */}
        <div className="mb-8 p-5 bg-[#0F2A4A]/40 border border-[#5FD8E8]/15 rounded-sm">
          <h4 className="font-mono text-xs text-[#8FA6BC] uppercase tracking-widest mb-4 font-bold">
            [BLUEPRINT ARXITEKTURA BOSQICHLARI]
          </h4>
          <div className="space-y-3">
            {data.blueprintSteps.map((step, sIdx) => (
              <div key={sIdx} className="flex items-start gap-3 text-sm">
                <span className="font-mono text-xs font-bold text-[#5FD8E8] bg-[#5FD8E8]/10 px-2 py-0.5 rounded-xs border border-[#5FD8E8]/30">
                  0{sIdx + 1}
                </span>
                <span className="text-[#EDF3F5] font-sans">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-t border-[#5FD8E8]/10 pt-4">
          <span className="font-mono text-xs text-[#8FA6BC] uppercase mr-2">Ishlatilgan texnologiyalar:</span>
          {data.techStack.map((tech, tIdx) => (
            <span key={tIdx} className="font-mono text-xs px-2.5 py-1 bg-[#5FD8E8]/10 text-[#5FD8E8] border border-[#5FD8E8]/20 rounded-xs">
              {tech}
            </span>
          ))}
        </div>

        {/* Modal Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#5FD8E8]/20 pt-6">
          {data.liveUrl ? (
            <a
              href={data.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs text-[#5FD8E8] hover:underline"
            >
              <ExternalLink className="w-4 h-4" /> Live Veb-saytni Ko'rish
            </a>
          ) : (
            <span className="font-mono text-xs text-[#8FA6BC]">
              Loyiha muvaffaqiyatli ishga tushirilgan
            </span>
          )}

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 font-mono text-xs text-[#8FA6BC] hover:text-[#EDF3F5] border border-[#5FD8E8]/20 rounded-sm"
            >
              Yopish
            </button>
            <ConsultationButton
              text="Shunday Yechim Buyurtma Qilish"
              className="px-6 py-2.5 bg-[#FF6B35] hover:bg-[#E85A24] text-white font-display font-bold text-xs rounded-sm shadow-md"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
