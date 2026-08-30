"use client";

import React, { useState } from "react";
import { Play, CheckCircle2, ArrowRight, Bot, Server, ShieldCheck, Database, RefreshCw } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export function InteractiveCrmWidget() {
  const { t } = useLanguage();
  const [step, setStep] = useState<number>(0);
  const [simulating, setSimulating] = useState<boolean>(false);

  const startSimulation = () => {
    if (simulating) return;
    setSimulating(true);
    setStep(1);

    setTimeout(() => setStep(2), 1200);
    setTimeout(() => setStep(3), 2500);
    setTimeout(() => {
      setStep(4);
      setSimulating(false);
    }, 3800);
  };

  return (
    <section className="py-20 bg-[#0F2A4A] border-t border-[#5FD8E8]/10 relative">
      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#5FD8E8] bg-[#5FD8E8]/10 border border-[#5FD8E8]/30 px-3.5 py-1 rounded-xs uppercase tracking-widest mb-4 font-bold">
            [SHEET 07 // INTERAKTIV AVTOMATIZATSIYA DEMO]
          </div>
          <h2 className="font-display text-3xl lg:text-5xl font-black text-[#EDF3F5] tracking-tight">
            {t("crm.title")}
          </h2>
          <p className="font-sans text-base text-[#8FA6BC] mt-4">
            {t("crm.subtitle")}
          </p>
        </div>

        {/* Live Simulation Card */}
        <div className="max-w-4xl mx-auto bg-[#0A1E35] border border-[#5FD8E8]/30 rounded-sm p-6 lg:p-10 shadow-2xl relative">
          
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-[#5FD8E8]/15 pb-4 mb-8 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#E85A24]" />
              <div className="w-3 h-3 rounded-full bg-[#FF6B35]" />
              <div className="w-3 h-3 rounded-full bg-[#5FD8E8]" />
              <span className="font-mono text-xs text-[#8FA6BC] ml-2">pipeline_stream.sh — 24/7 LIVE</span>
            </div>
            <button
              onClick={startSimulation}
              disabled={simulating}
              className="inline-flex items-center gap-2 font-mono text-xs bg-[#5FD8E8] hover:bg-[#5FD8E8]/90 text-[#0F2A4A] font-bold px-5 py-2.5 rounded-xs transition-all disabled:opacity-50"
            >
              {simulating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
              <span>{t("crm.testBtn")}</span>
            </button>
          </div>

          {/* Pipeline Steps Flow */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            
            {/* Step 1 */}
            <div
              className={`p-4 rounded-sm border transition-all ${
                step >= 1
                  ? "bg-[#0F2A4A] border-[#5FD8E8] shadow-[0_0_20px_rgba(95,216,232,0.2)]"
                  : "bg-[#0F2A4A]/30 border-[#5FD8E8]/10 text-[#8FA6BC]"
              }`}
            >
              <div className="font-mono text-[10px] text-[#5FD8E8] uppercase font-bold mb-1">
                BOSQICH 01
              </div>
              <div className="font-display font-bold text-sm text-[#EDF3F5]">
                {t("crm.step1")}
              </div>
              <div className="font-mono text-[11px] text-[#8FA6BC] mt-2">
                Payload: &#123;name, phone&#125;
              </div>
            </div>

            {/* Step 2 */}
            <div
              className={`p-4 rounded-sm border transition-all ${
                step >= 2
                  ? "bg-[#0F2A4A] border-[#5FD8E8] shadow-[0_0_20px_rgba(95,216,232,0.2)]"
                  : "bg-[#0F2A4A]/30 border-[#5FD8E8]/10 text-[#8FA6BC]"
              }`}
            >
              <div className="font-mono text-[10px] text-[#5FD8E8] uppercase font-bold mb-1">
                BOSQICH 02
              </div>
              <div className="font-display font-bold text-sm text-[#EDF3F5]">
                {t("crm.step2")}
              </div>
              <div className="font-mono text-[11px] text-[#8FA6BC] mt-2">
                Status: 200 OK (DB Stored)
              </div>
            </div>

            {/* Step 3 */}
            <div
              className={`p-4 rounded-sm border transition-all ${
                step >= 3
                  ? "bg-[#0F2A4A] border-[#FF6B35] shadow-[0_0_20px_rgba(255,107,53,0.2)]"
                  : "bg-[#0F2A4A]/30 border-[#5FD8E8]/10 text-[#8FA6BC]"
              }`}
            >
              <div className="font-mono text-[10px] text-[#FF6B35] uppercase font-bold mb-1">
                BOSQICH 03
              </div>
              <div className="font-display font-bold text-sm text-[#EDF3F5]">
                {t("crm.step3")}
              </div>
              <div className="font-mono text-[11px] text-[#8FA6BC] mt-2">
                Bot Alert Sent to Admin
              </div>
            </div>

            {/* Step 4 */}
            <div
              className={`p-4 rounded-sm border transition-all ${
                step >= 4
                  ? "bg-[#0F2A4A] border-[#E85A24] shadow-[0_0_20px_rgba(232,90,36,0.2)]"
                  : "bg-[#0F2A4A]/30 border-[#5FD8E8]/10 text-[#8FA6BC]"
              }`}
            >
              <div className="font-mono text-[10px] text-[#E85A24] uppercase font-bold mb-1">
                BOSQICH 04
              </div>
              <div className="font-display font-bold text-sm text-[#EDF3F5]">
                {t("crm.step4")}
              </div>
              <div className="font-mono text-[11px] text-[#8FA6BC] mt-2">
                CRM Status: PENDING
              </div>
            </div>

          </div>

          {/* Console Output Log */}
          <div className="p-4 bg-[#051120] border border-[#5FD8E8]/20 rounded-sm font-mono text-xs text-[#5FD8E8]">
            <div className="text-[#8FA6BC] mb-1">$ tail -f /var/log/raqamly-stream.log</div>
            {step === 0 && <div className="text-[#8FA6BC]/60">Simulyatsiyani boshlash uchun yuqoridagi tugmani bosing...</div>}
            {step >= 1 && <div className="text-[#5FD8E8]">[OK] Sayt formasi arizani NestJS POST /consultation manziliga yubordi.</div>}
            {step >= 2 && <div className="text-[#5FD8E8]">[OK] Prisma ORM ma'lumotlar bazasiga ID #1042 bilan saqladi.</div>}
            {step >= 3 && <div className="text-[#FF6B35]">[BOT] Telegram API @raqamli_uzbot admin chatiga HTML xabar jo'natdi.</div>}
            {step >= 4 && <div className="text-[#E85A24] font-bold">[COMPLETE] Ariza Admin CRM panelida aks etdi. Veb-tizim ideal holatda ishlayapti!</div>}
          </div>

        </div>

      </div>
    </section>
  );
}
