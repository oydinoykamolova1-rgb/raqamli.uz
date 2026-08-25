"use client";

import * as React from "react";
import { useState } from "react";
import { X, Calendar, ArrowRight, CheckCircle2, User, Phone, Sparkles, AlertCircle } from "lucide-react";

export function ConsultationButton({ text = "Konsultatsiya olish", className = "" }: { text?: string, className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) return alert("Iltimos, uchrashuv sanasini tanlang!");
    if (!name.trim()) return alert("Iltimos, ismingizni kiriting!");
    if (!phone.trim()) return alert("Iltimos, telefon raqamingizni kiriting!");
    
    setLoading(true);
    setStatus("idle");
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
      const res = await fetch(`${apiUrl}/consultation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, date })
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
        onClick={() => setIsOpen(true)}
        className={`inline-flex items-center justify-center gap-2 cursor-pointer transition-all ${className}`}
      >
        {text}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-black/85 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center min-h-screen">
          
          {/* Backdrop Click Dismiss */}
          <div 
            className="fixed inset-0 -z-10" 
            onClick={() => setIsOpen(false)} 
          />

          <div className="relative w-full max-w-lg my-auto glass-panel-glow rounded-3xl p-6 lg:p-8 border border-violet-500/30 shadow-[0_0_50px_rgba(139,92,246,0.25)] animate-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto">
            
            {/* Ambient Background Lights */}
            <div className="absolute -top-20 -left-20 w-48 h-48 bg-violet-600/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-pink-600/30 rounded-full blur-3xl pointer-events-none" />

            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors z-20 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            
            {status === "success" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-[0_0_30px_rgba(16,185,129,0.4)] animate-bounce">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-space font-bold mb-3 text-white">So&apos;rov qabul qilindi! 🎉</h3>
                <p className="text-gray-300 max-w-sm mx-auto text-sm leading-relaxed">
                  Rahmat, <span className="text-violet-400 font-semibold">{name}</span>! Mutaxassislarimiz {date} kuni uchrashuv yuzasidan siz bilan bog&apos;lanishadi.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-violet-400" />
                  <span className="text-xs uppercase font-bold tracking-widest text-violet-400 font-space">Bepul Maslahat va Audit</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-space font-bold mb-2 text-white">Raqamly bilan bog&apos;laning</h2>
                <p className="text-gray-400 text-xs sm:text-sm mb-6 leading-relaxed">
                  Formani to&apos;ldiring. Biz loyihangizni tahlil qilib, eng optimal yechimni taqdim etamiz.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5 font-space">
                      Ismingiz va Familiyangiz
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input 
                        type="text"
                        placeholder="Masalan: Alisher Navoiy"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full h-11 pl-11 pr-4 rounded-xl border border-white/15 bg-slate-950/80 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all text-sm"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5 font-space">
                      Telefon Raqamingiz
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input 
                        type="tel"
                        placeholder="+998 90 123 45 67"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full h-11 pl-11 pr-4 rounded-xl border border-white/15 bg-slate-950/80 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all text-sm"
                        required
                      />
                    </div>
                  </div>

                  {/* Date Input */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5 font-space">
                      Qulay uchrashuv sanasi
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input 
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full h-11 pl-11 pr-4 rounded-xl border border-white/15 bg-slate-950/80 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all text-sm"
                        required
                      />
                    </div>
                  </div>

                  {status === "error" && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>Xatolik yuz berdi. Server bilan aloqani tekshiring yoki qayta urining.</span>
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full h-12 mt-2 rounded-xl bg-gradient-to-r from-violet-600 via-pink-600 to-violet-700 hover:from-violet-500 hover:to-pink-500 text-white font-space font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(139,92,246,0.35)] disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? "Yuborilmoqda..." : "So'rovni Yuborish 🚀"}
                    {!loading && <ArrowRight className="w-4 h-4" />}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
