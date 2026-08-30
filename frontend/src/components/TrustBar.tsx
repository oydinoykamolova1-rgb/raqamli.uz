"use client";

import React from "react";
import { Building2, ShieldCheck, Award, Users, CheckCircle2 } from "lucide-react";

export function TrustBar() {
  const partners = [
    { name: "Sirdaryo IT Park", type: "Inkubatsiya Hamkori" },
    { name: "IT Live Guliston", type: "Bosh Qarargoh" },
    { name: "SilkRoad Logistics", type: "ERP Mijoz" },
    { name: "Guliston Pharmacy Chain", type: "Bot & CRM Mijoz" },
    { name: "EduSmart Academy", type: "LMS Platforma" },
  ];

  return (
    <div className="py-12 bg-[#0A1E35] border-y border-[#5FD8E8]/10 overflow-hidden relative">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="font-mono text-center text-xs text-[#8FA6BC] uppercase tracking-[0.2em] mb-8 font-bold">
          [HAMKORLAR VA ISHONCH INFRATUZILMASI]
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 opacity-80">
          {partners.map((p, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-4 py-2 bg-[#0F2A4A]/50 border border-[#5FD8E8]/15 rounded-xs hover:border-[#5FD8E8]/40 transition-colors"
            >
              <Building2 className="w-5 h-5 text-[#5FD8E8]" />
              <div>
                <div className="font-display font-bold text-sm text-[#EDF3F5]">{p.name}</div>
                <div className="font-mono text-[10px] text-[#8FA6BC]">{p.type}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
