"use client";

import * as React from "react";
import { useState } from "react";
import { X, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";

export function ConsultationButton({ text = "Konsultatsiya olish", className = "" }: { text?: string, className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [date, setDate] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) return alert("Iltimos, sanani tanlang!");
    
    setLoading(true);
    setStatus("idle");
    try {
      // API orqali yuborish
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
      const res = await fetch(`${apiUrl}/consultation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date })
      });
      
      if (res.ok) {
        setStatus("success");
        setTimeout(() => setIsOpen(false), 3000);
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
        className={`flex items-center justify-center gap-2 rounded-full font-medium transition-all ${className}`}
      >
        {text}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl p-6 lg:p-10 border border-neutral-100 dark:border-neutral-800 animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <X className="w-6 h-6 text-neutral-500" />
            </button>
            
            {status === "success" ? (
              <div className="text-center py-10">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">Ajoyib! So'rov qabul qilindi.</h3>
                <p className="text-neutral-600 dark:text-neutral-400">Biz sizga {date} kuni uchrashuv bo'yicha eslatma yuboramiz.</p>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-neutral-900 dark:text-white">Raqamly bilan hamkorlik</h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-8">Loyihangizni boshlash uchun quyidagi qadamlarni bosib o'tamiz.</p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-neutral-900 dark:text-white mb-1">Bepul audit va intervyu</h4>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">Biznesingiz jarayonlarini o'rganamiz va qanday IT yechim sizga eng ko'p foyda keltirishini aniqlaymiz.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-neutral-900 dark:text-white mb-1">Taklif va shartnoma</h4>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">Aniq muddat va narx belgilangan hujjat taqdim etiladi. Ma'qul kelsa, ishni boshlaymiz.</p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="bg-neutral-50 dark:bg-neutral-950 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800">
                  <h4 className="font-bold mb-4 text-neutral-900 dark:text-white">Suhbat uchun qachon bo'shsiz?</h4>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                      <input 
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full h-12 pl-12 pr-4 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <button 
                      type="submit" 
                      disabled={loading}
                      className="h-12 px-8 rounded-xl bg-primary hover:bg-primary-hover text-white font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                    >
                      {loading ? "Yuborilmoqda..." : "Tasdiqlash"}
                      {!loading && <ArrowRight className="w-4 h-4" />}
                    </button>
                  </div>
                  {status === "error" && <p className="text-red-500 text-sm mt-3">Xatolik yuz berdi. Server ishlayotganiga ishonch hosil qiling.</p>}
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
