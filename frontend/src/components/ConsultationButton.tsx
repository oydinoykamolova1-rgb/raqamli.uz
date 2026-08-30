"use client";

import * as React from "react";
import { useState } from "react";
import { X, Calendar, ArrowRight, CheckCircle2, User, Phone, Sparkles, AlertCircle, Bot, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export function ConsultationButton({
  text = "Konsultatsiya olish",
  className = "",
  id,
  style,
}: {
  text?: string;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}) {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) {
      // Spam attempt caught
      setStatus("success");
      setIsOpen(false);
      return;
    }

    if (!name.trim()) return alert(t("form.error"));
    if (!phone.trim()) return alert(t("form.error"));

    const submitDate = date || new Date().toISOString().split("T")[0];

    setLoading(true);
    setStatus("idle");
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
      const res = await fetch(`${apiUrl}/consultation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, date: submitDate, honeypot }),
      });

      if (res.ok) {
        setStatus("success");
        setTimeout(() => {
          setIsOpen(false);
          setStatus("idle");
          setName("");
          setPhone("");
          setDate("");
        }, 3500);
      } else {
        setStatus("error");
      }
    } catch (e) {
      console.error(e);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        id={id}
        onClick={() => setIsOpen(true)}
        style={style}
        className={`inline-flex items-center justify-center gap-2 cursor-pointer transition-all ${className}`}
      >
        {text}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-[#040D1A]/85 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center min-h-screen">
          <div
            className="fixed inset-0 -z-10"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative w-full max-w-lg my-auto bg-[#0A1E35] border border-[#5FD8E8]/30 rounded-sm p-6 lg:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.8)] text-[#EDF3F5] font-sans max-h-[92vh] overflow-y-auto">
            
            {/* Corner Tech Stamp */}
            <div className="font-mono text-[9px] text-[#5FD8E8]/40 uppercase tracking-widest mb-2">
              [SYSTEM_FORM // BLUEPRINT CONSULTATION]
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xs bg-[#0F2A4A] border border-[#5FD8E8]/20 hover:border-[#5FD8E8] text-[#8FA6BC] hover:text-white transition-colors z-20"
            >
              <X className="w-4 h-4" />
            </button>

            {status === "success" ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-[#5FD8E8]/10 border border-[#5FD8E8] rounded-xs flex items-center justify-center mx-auto mb-5 shadow-[0_0_30px_rgba(95,216,232,0.3)]">
                  <CheckCircle2 className="w-7 h-7 text-[#5FD8E8]" />
                </div>
                <h3 className="text-2xl font-display font-black mb-3 text-[#EDF3F5]">
                  {t("form.success")}
                </h3>
                <p className="text-[#8FA6BC] max-w-sm mx-auto text-xs font-mono leading-relaxed">
                  Rahmat, <span className="text-[#5FD8E8] font-bold">{name}</span>! Mutaxassislarimiz {date || "bugun"} uchrashuv yuzasidan siz bilan bog'lanishadi va Telegram botga bildirishnoma bordi.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-[#FF6B35]" />
                  <span className="text-xs uppercase font-bold tracking-widest text-[#FF6B35] font-mono">
                    BEPUL KONSULTATSIYA VA AUDIT
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-display font-black mb-2 text-[#EDF3F5]">
                  {t("form.title")}
                </h2>
                <p className="text-[#8FA6BC] text-xs mb-6 leading-relaxed">
                  {t("form.subtitle")}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Honeypot field (hidden for users, catches bots) */}
                  <input
                    type="text"
                    name="website_hp"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#8FA6BC] uppercase tracking-wider mb-1.5">
                      {t("form.name")} *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8FA6BC]" />
                      <input
                        type="text"
                        placeholder="Masalan: Alisher Navoiy"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full h-11 pl-10 pr-4 rounded-xs border border-[#5FD8E8]/20 bg-[#0F2A4A] text-[#EDF3F5] placeholder-[#8FA6BC]/50 focus:outline-none focus:border-[#5FD8E8] transition-all text-xs font-sans"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#8FA6BC] uppercase tracking-wider mb-1.5">
                      {t("form.phone")} *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8FA6BC]" />
                      <input
                        type="tel"
                        placeholder="+998 90 123 45 67"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full h-11 pl-10 pr-4 rounded-xs border border-[#5FD8E8]/20 bg-[#0F2A4A] text-[#EDF3F5] placeholder-[#8FA6BC]/50 focus:outline-none focus:border-[#5FD8E8] transition-all text-xs font-sans"
                        required
                      />
                    </div>
                  </div>

                  {/* Date Input */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#8FA6BC] uppercase tracking-wider mb-1.5">
                      Qulay Sanani Tanlang
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8FA6BC]" />
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full h-11 pl-10 pr-4 rounded-xs border border-[#5FD8E8]/20 bg-[#0F2A4A] text-[#EDF3F5] focus:outline-none focus:border-[#5FD8E8] transition-all text-xs font-sans"
                      />
                    </div>
                  </div>

                  {status === "error" && (
                    <div className="p-3 rounded-xs bg-[#E85A24]/10 border border-[#E85A24]/30 text-[#E85A24] text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{t("form.error")}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 mt-2 rounded-xs bg-[#FF6B35] hover:bg-[#E85A24] text-white font-display font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,107,53,0.3)] disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? t("form.sending") : t("form.submit")}
                    {!loading && <ArrowRight className="w-4 h-4" />}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-[#8FA6BC] pt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#5FD8E8]" />
                    <span>Spam himoyasi va Telegram API xavfsizligi faol</span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
