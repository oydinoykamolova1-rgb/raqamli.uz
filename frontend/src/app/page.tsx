"use client";

import { useState, useEffect, useRef } from "react";
import {
  Rocket, Clock, CheckCircle2, ArrowRight, ShieldCheck,
  Zap, Globe2, Database, Bot, ChevronDown, Send,
  MapPin, Mail, Phone, Quote, Star, Cpu,
} from "lucide-react";
import { ConsultationButton } from "@/components/ConsultationButton";
import { CanalDiagram } from "@/components/CanalDiagram";
import Image from "next/image";
import Link from "next/link";

/* ─── Animated counter hook ─── */
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
    <div className="text-center">
      <div className="font-display text-4xl lg:text-5xl font-black text-[#5FD8E8] tabular-nums">{count}{suffix}</div>
      <div className="font-mono text-xs text-[#8FA6BC] uppercase tracking-widest mt-1">{label}</div>
    </div>
  );
}

function FaqItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button
        id={`faq-btn-${i}`}
        className="w-full flex items-center justify-between py-5 px-2 text-left gap-4 cursor-pointer"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="flex items-center gap-3">
          <span className="font-mono text-sm text-[#E85A24] font-bold w-6 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
          <span className="font-sans font-bold text-[#0F2036] text-lg">{q}</span>
        </span>
        <ChevronDown className={`w-5 h-5 text-[#E85A24] flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-60 pb-5" : "max-h-0"}`}>
        <p className="px-2 pl-9 text-base text-[#0F2036]/85 leading-relaxed font-sans font-medium">{a}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [calcSector, setCalcSector] = useState("ecommerce");
  const [calcScale, setCalcScale] = useState("small");
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const calcResult = (() => {
    const base: Record<string, number> = { ecommerce: 40, restaurant: 30, service: 25, warehouse: 50 };
    const mult: Record<string, number> = { small: 1, medium: 2.2, large: 4 };
    return Math.round((base[calcSector] ?? 30) * (mult[calcScale] ?? 1));
  })();

  const [formLoading, setFormLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;
    setFormLoading(true);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
      await fetch(`${apiUrl}/consultation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          date: new Date().toISOString().split("T")[0],
        }),
      });
      setFormSent(true);
    } catch (err) {
      console.error("API error:", err);
      setFormSent(true);
    } finally {
      setFormLoading(false);
    }
  };

  const faq = [
    { q: "Loyiha qancha vaqt davom etadi?", a: "Murakkablikka qarab: oddiy landing page 5–10 kun, Telegram bot 1–3 hafta, to'liq CRM/ERP tizim 1–3 oy. Aniq muddat texnik topshiriq asosida belgilanadi." },
    { q: "Narxlar qancha?", a: "Narx loyiha hajmiga qarab belgilanadi. Bepul konsultatsiya orqali aniq smeta taqdim etamiz. Yashirin to'lov va kutilmagan xarajatlar yo'q." },
    { q: "Sizning jamoangizdagi mutaxassislar kimlar?", a: "Full-stack dasturchilar, UI/UX dizaynerlar va loyiha menejeri — hammasi Sirdaryo viloyatidan. 3 yildan ortiq amaliy tajribamiz bor." },
    { q: "Loyiha topshirilgandan keyin qo'llab-quvvatlasiz?", a: "Ha, biz 24/7 texnik qo'llab-quvvatlash taqdim etamiz. Shartnomaga kafolat muddati ham kiritiladi." },
    { q: "Ikki tilda (UZ/RU) ishlash mumkinmi?", a: "Albatta! Barcha loyihalarimiz o'zbek va rus tillarida ishlash uchun tayyorlanadi. Ko'p tillilik alohida xarajat talab qilmaydi." },
  ];

  const testimonials = [
    { name: "Jasur Toshmatov", role: "Restaurant egasi, Guliston", text: "Telegram bot orqali buyurtmalarimiz 3 barobar oshdi. Tizim shunchalik qulay va ishonarli ishlaydiki, endi men hech narsa haqida qayg'urmayman.", rating: 5 },
    { name: "Malika Yusupova", role: "Online do'kon, Sirdaryo", text: "CRM tizimi bizning barcha jarayonlarimizni avtomatlashtirib berdi. Endi xodimlarimiz vaqtlarini qimmatli ishlarga sarflashadi.", rating: 5 },
    { name: "Dilshod Raximov", role: "Qurilish kompaniyasi, Guliston", text: "Korporativ sayt va admin panel juda professional chiqdi. Mijozlarimiz saytga kirib buyurtma berayotgani biz uchun katta yutuq.", rating: 5 },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-[#0F2A4A]">

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[96vh] flex items-center justify-center pt-28 pb-16 overflow-hidden cyber-mesh-bg cyber-grid">
        <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-[#5FD8E8]/8 rounded-full blur-[160px] animate-float pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] bg-[#FF6B35]/6 rounded-full blur-[140px] animate-float-reverse pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#5FD8E8]/10 border border-[#5FD8E8]/25 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5FD8E8] animate-pulse" />
                <span className="font-mono text-xs text-[#5FD8E8] tracking-[0.15em] uppercase">SIRDARYO · N40°29&apos; E68°47&apos;</span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-[#EDF3F5] leading-[0.95] tracking-tight mb-6">
                Biznesingizni<br />
                <span className="gradient-text-blueprint">Raqamli Kanalga</span><br />
                Ulaymiz
              </h1>
              <p className="font-sans text-base md:text-lg text-[#8FA6BC] max-w-lg mb-10 leading-relaxed">
                Sirdaryo viloyatidagi №1 IT studio. Yuqori tezlikda ishlovchi veb-saytlar,
                AI Telegram botlar va murakkab CRM/ERP tizimlar — bitta professional jamoadan.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-14">
                <ConsultationButton
                  text="Bepul Konsultatsiya Olish →"
                  className="h-14 px-8 rounded-sm bg-[#FF6B35] hover:bg-[#E85A24] text-white font-display font-bold text-lg tracking-wide shadow-[0_0_30px_rgba(255,107,53,0.35)] transition-all hover:scale-105 cursor-pointer"
                />
                <Link href="/#portfolio"
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-sm border border-[#5FD8E8]/30 text-[#5FD8E8] font-sans font-semibold text-base hover:bg-[#5FD8E8]/8 transition-all">
                  <span>Ishlarimizni Ko&apos;ring</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div ref={statsRef} className="grid grid-cols-3 gap-8 w-full max-w-md border-t border-[#5FD8E8]/15 pt-8">
                <StatCounter target={50} suffix="+" label="Loyiha" visible={statsVisible} />
                <StatCounter target={25} suffix="+" label="Mijoz" visible={statsVisible} />
                <StatCounter target={3} suffix=" yil" label="Tajriba" visible={statsVisible} />
              </div>
            </div>
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-full rounded-sm border border-[#5FD8E8]/20 bg-[#0A1E35]/60 backdrop-blur-sm p-4 sheet-corner">
                <div className="absolute top-3 left-4 font-mono text-[9px] text-[#5FD8E8]/50 tracking-widest uppercase">RAQAMLY KANAL DIAGRAMMASI</div>
                <div className="absolute top-3 right-10 font-mono text-[9px] text-[#5FD8E8]/50 tracking-widest">REV A</div>
                <div className="mt-6"><CanalDiagram /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0F2A4A] to-transparent pointer-events-none" />
      </section>

      {/* ═══ SERVICES — Oq varaq foni ═══ */}
      <section id="services" className="py-24 bg-[#F3F1EA] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-dots opacity-40 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-12 relative z-10">
          <div className="flex items-end justify-between mb-14 border-b border-[#0F2036]/15 pb-8">
            <div>
              <span className="font-mono text-xs text-[#E85A24] font-bold uppercase tracking-[0.2em] mb-3 block">// XIZMATLAR</span>
              <h2 className="font-display text-4xl md:text-6xl font-black text-[#0F2036] leading-tight">
                Professional<br /><span className="gradient-text-orange">Raqamli Yechimlar</span>
              </h2>
            </div>
            <div className="hidden md:block font-mono text-xs text-[#0F2036]/70 font-semibold text-right">
              <div>SHEET 01—03</div><div>SCALE 1:1</div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { sheet: "SHEET 01", tag: "CRM & ERP", title: "Biznes Boshqaruv Tizimlari", desc: "Kompaniyangiz jarayonlarini to'liq avtomatlashtirish: buxgalteriya, ombor, xodimlar va mijozlar bilan muloqot.", features: ["HR va topshiriqlar nazorati", "Savdo va mijozlar CRM", "Real-time moliya hisoboti"], time: "1 — 3 Oy", icon: Database, accent: "#00A8BC" },
              { sheet: "SHEET 02", tag: "Telegram Bot", title: "AI-Powered Telegram Botlar", desc: "Buyurtma qabul qiluvchi, Click/Payme to'lovlariga ulangan va sun'iy intellekt javob beruvchi botlar.", features: ["Onlayn do'kon katalogi", "Click va Payme integratsiyasi", "Admin panel boshqaruvi"], time: "3 — 10 Kun", icon: Bot, accent: "#E85A24" },
              { sheet: "SHEET 03", tag: "Veb-sayt", title: "Premium Veb-Saytlar", desc: "Google SEO ga moslangan, tezkor yuklanuvchi va har qanday qurilmada ideal ko'rinuvchi platformalar.", features: ["Landing page va korporativ sayt", "SEO optimizatsiya (95+ score)", "Responsive dizayn"], time: "5 — 14 Kun", icon: Globe2, accent: "#00A8BC" },
            ].map((s, i) => (
              <div key={i} id={`service-card-${i}`} className="relative bg-white border border-[#0F2036]/15 rounded-sm overflow-hidden card-3d group sheet-corner flex flex-col shadow-sm">
                <div className="h-[3px] w-full" style={{ background: s.accent }} />
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-sm"
                      style={{ color: s.accent, background: `${s.accent}15`, border: `1px solid ${s.accent}40` }}>{s.sheet}</span>
                    <s.icon className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: s.accent }} />
                  </div>
                  <span className="font-mono text-xs text-[#526E8C] font-bold uppercase tracking-widest mb-2">{s.tag}</span>
                  <h3 className="font-display text-2xl font-black text-[#0F2036] mb-3 leading-tight">{s.title}</h3>
                  <p className="font-sans text-sm text-[#0F2036]/85 font-normal leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-2 mb-8 flex-1">
                    {s.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-sm text-[#0F2036] font-medium">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: s.accent }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t border-[#0F2036]/10">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#526E8C]" />
                      <span className="font-mono text-xs font-semibold text-[#526E8C]">{s.time}</span>
                    </div>
                    <ConsultationButton text="Buyurtma →" className="text-xs font-display font-bold px-4 py-2 rounded-sm transition-all hover:bg-[#0F2036]/5" style={{ color: s.accent }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PORTFOLIO ═══ */}
      <section id="portfolio" className="py-24 bg-[#0F2A4A] relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-60 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-12 relative z-10">
          <div className="flex items-end justify-between mb-14 border-b border-[#5FD8E8]/15 pb-8">
            <div>
              <span className="font-mono text-xs text-[#5FD8E8] uppercase tracking-[0.2em] mb-3 block">// PORTFOLIO</span>
              <h2 className="font-display text-4xl md:text-6xl font-black text-[#EDF3F5] leading-tight">
                Bizning<br /><span className="gradient-text-blueprint">Sara Loyihalarimiz</span>
              </h2>
            </div>
            <div className="hidden md:block font-mono text-xs text-[#8FA6BC] text-right">
              <div>UCHASTKA №014—012</div><div>TASDIQLANGAN</div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { plot: "№014", img: "/portfolio-crm.png", tag: "CRM Tizim", title: "Savdo va Ombor Boshqaruv Tizimi", desc: "Barcha sotuvlar va mahsulot harakatini real vaqtda kuzatish, hisobot va analitika paneli.", accent: "#5FD8E8" },
              { plot: "№013", img: "/portfolio-bot.png", tag: "Telegram Bot", title: "E-Commerce Onlayn Do'kon Bot", desc: "Telegram ichida to'lov qabul qiluvchi va buyurtmalarni kurerga yo'naltiruvchi bot.", accent: "#FF6B35" },
              { plot: "№012", img: "/portfolio-web.png", tag: "Veb-Sayt", title: "Korporativ Veb Platforma", desc: "Kompaniya xizmatlarini taqdim etuvchi va mijozlar so'rovini qabul qiluvchi landing page.", accent: "#5FD8E8" },
            ].map((item, i) => (
              <div key={i} id={`portfolio-card-${i}`} className="group relative rounded-sm overflow-hidden border border-[#5FD8E8]/15 bg-[#0A1E35]/60 card-3d flex flex-col">
                <div className="relative h-52 overflow-hidden bg-[#0A1E35]">
                  <Image src={item.img} alt={item.title} fill sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E35] via-[#0A1E35]/20 to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ background: item.accent }} />
                    <span className="font-mono text-[11px] tracking-widest" style={{ color: item.accent }}>{item.plot}</span>
                  </div>
                  <div className="absolute top-0 right-0 w-0 h-0"
                    style={{ borderStyle: "solid", borderWidth: "0 28px 28px 0", borderColor: `transparent ${item.accent}40 transparent transparent` }} />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: item.accent }}>{item.tag}</span>
                  <h3 className="font-display text-xl font-black text-[#EDF3F5] mb-2 group-hover:text-[#5FD8E8] transition-colors">{item.title}</h3>
                  <p className="font-sans text-sm text-[#8FA6BC] leading-relaxed flex-1">{item.desc}</p>
                  <div className="mt-5 pt-4 border-t border-[#5FD8E8]/10 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-[#5FD8E8] font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Ishga tushirilgan
                    </span>
                    <ConsultationButton text="Menga ham →" className="text-xs font-mono text-[#FF6B35] hover:text-[#FFB347] transition-colors cursor-pointer" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TRUST / WHY US ═══ */}
      <section id="about" className="py-24 bg-[#F3F1EA] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-dots opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-12 relative z-10">
          <div className="mb-14 border-b border-[#0F2036]/15 pb-8">
            <span className="font-mono text-xs text-[#E85A24] font-bold uppercase tracking-[0.2em] mb-3 block">// NEGA RAQAMLY NI TANLASHADI?</span>
            <h2 className="font-display text-4xl md:text-6xl font-black text-[#0F2036] leading-tight">
              To&apos;rtta Asosiy<br /><span className="gradient-text-orange">Ustunligimiz</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", icon: Rocket, title: "O'z vaqtida Topshirish", desc: "Kelishilgan muddatga qat'iy rioya etgan holda sifatli topshiramiz.", unit: "100% O'z vaqtida" },
              { num: "02", icon: ShieldCheck, title: "Rasmiy Kafolat", desc: "Har bir dasturiy mahsulotimizga texnik va xavfsizlik kafolati beramiz.", unit: "Kafolat: 6 oy+" },
              { num: "03", icon: Zap, title: "Shaffof Shartnoma", desc: "Yashirin to'lovlar va kutilmagan xarajatlarsiz — aniq narx-navo.", unit: "0 Yashirin xarajat" },
              { num: "04", icon: Cpu, title: "AI Integratsiyasi", desc: "Eng so'nggi sun'iy intellekt modellarini loyihangizga integratsiya qilamiz.", unit: "GPT-4 / Gemini" },
            ].map((f, i) => (
              <div key={i} id={`trust-item-${i}`} className="relative">
                <div className="h-px w-full bg-[#0F2036]/20 mb-8 relative">
                  <div className="absolute left-0 -top-[3px] w-px h-[7px] bg-[#E85A24]" />
                  <div className="absolute right-0 -top-[3px] w-px h-[7px] bg-[#E85A24]" />
                  <div className="absolute left-1/2 -translate-x-1/2 -top-3.5 font-mono text-xs font-bold text-[#E85A24] bg-[#F3F1EA] px-2 whitespace-nowrap">{f.unit}</div>
                </div>
                <span className="font-mono text-6xl font-black text-[#0F2036]/20 block mb-3 leading-none">{f.num}</span>
                <div className="w-11 h-11 rounded-sm bg-[#0F2036] flex items-center justify-center mb-4 shadow-sm">
                  <f.icon className="w-5 h-5 text-[#5FD8E8]" />
                </div>
                <h3 className="font-display text-2xl font-black text-[#0F2036] mb-3">{f.title}</h3>
                <p className="font-sans text-sm font-medium text-[#0F2036]/85 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section id="process" className="py-24 bg-[#0F2A4A] relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-50 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-12 relative z-10">
          <div className="mb-14 border-b border-[#5FD8E8]/15 pb-8">
            <span className="font-mono text-xs text-[#5FD8E8] uppercase tracking-[0.2em] mb-3 block">// JARAYON</span>
            <h2 className="font-display text-4xl md:text-6xl font-black text-[#EDF3F5] leading-tight">
              G&apos;oyadan <span className="gradient-text-blueprint">Mahsulotgacha</span> 5 ta Qadam
            </h2>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { num: "01", title: "Audit & Muloqot", desc: "Tashkilotingiz ehtiyojlarini chuqur tahlil qilamiz." },
              { num: "02", title: "Loyiha Rejasi", desc: "Aniq muddat, texnik topshiriq va smetani belgilaymiz." },
              { num: "03", title: "UI/UX Dizayn", desc: "Zamonaviy va qulay vizual interfeys yaratamiz." },
              { num: "04", title: "Dasturlash", desc: "Xavfsiz va yuqori tezlikdagi kod yozamiz." },
              { num: "05", title: "Topshirish & Qo'llab", desc: "Ishga tushiramiz va 24/7 texnik yordam beramiz." },
            ].map((step, i) => (
              <div key={i} id={`process-step-${i}`} className="relative border border-[#5FD8E8]/15 bg-[#0A1E35]/50 rounded-sm p-6 card-3d group">
                {i < 4 && <div className="absolute top-12 -right-2 w-4 h-px bg-[#5FD8E8]/30 hidden md:block z-10" />}
                <span className="font-display text-5xl font-black text-[#5FD8E8]/12 block mb-6 group-hover:text-[#5FD8E8]/25 transition-colors">{step.num}</span>
                <h4 className="font-display text-xl font-black text-[#EDF3F5] mb-2">{step.title}</h4>
                <p className="font-sans text-xs text-[#8FA6BC] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CALCULATOR ═══ */}
      <section id="calculator" className="py-24 bg-[#F3F1EA] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-dots opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-12 relative z-10">
          <div className="mb-14 border-b border-[#0F2036]/15 pb-8">
            <span className="font-mono text-xs text-[#E85A24] font-bold uppercase tracking-[0.2em] mb-3 block">// HISOB-KITOB KALKULYATORI</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-[#0F2036] leading-tight">
              Qancha Vaqt <span className="gradient-text-orange">Tejashingiz Mumkin?</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-[#0F2036]/15 rounded-sm p-8 md:p-12 shadow-sm">
              <div className="mb-8">
                <label className="font-mono text-xs text-[#0F2036]/80 font-bold uppercase tracking-widest block mb-4">01. Soha / Biznes turi</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { val: "ecommerce", label: "Online Do'kon" },
                    { val: "restaurant", label: "Restoran / Cafe" },
                    { val: "service", label: "Xizmat Ko'rsatish" },
                    { val: "warehouse", label: "Ombor / Savdo" },
                  ].map((opt) => (
                    <button key={opt.val} id={`calc-sector-${opt.val}`} onClick={() => setCalcSector(opt.val)}
                      className={`py-3 px-4 rounded-sm text-sm font-display font-bold border transition-all ${calcSector === opt.val ? "bg-[#0F2A4A] text-[#5FD8E8] border-[#5FD8E8]/40 shadow-sm" : "bg-transparent text-[#0F2036]/80 border-[#0F2036]/20 hover:border-[#0F2036]/40"}`}>
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-10">
                <label className="font-mono text-xs text-[#0F2036]/80 font-bold uppercase tracking-widest block mb-4">02. Biznes hajmi</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { val: "small", label: "Kichik", sub: "1-5 xodim" },
                    { val: "medium", label: "O'rta", sub: "5-20 xodim" },
                    { val: "large", label: "Yirik", sub: "20+ xodim" },
                  ].map((opt) => (
                    <button key={opt.val} id={`calc-scale-${opt.val}`} onClick={() => setCalcScale(opt.val)}
                      className={`py-4 px-4 rounded-sm border transition-all ${calcScale === opt.val ? "bg-[#0F2A4A] text-[#EDF3F5] border-[#5FD8E8]/40 shadow-sm" : "bg-transparent text-[#0F2036]/80 border-[#0F2036]/20 hover:border-[#0F2036]/40"}`}>
                      <div className="font-display font-black text-base">{opt.label}</div>
                      <div className="font-mono text-[10px] font-semibold text-[#526E8C] mt-0.5">{opt.sub}</div>
                    </button>
                  ))}
                </div>
              </div>
              <div className="bg-[#0F2A4A] rounded-sm p-8 text-center border border-[#5FD8E8]/20">
                <div className="font-mono text-xs text-[#5FD8E8]/60 uppercase tracking-widest mb-3">Oyiga tejaladigan vaqt</div>
                <div className="font-display font-black leading-none mb-3" style={{ fontSize: "5rem", color: "#5FD8E8" }}>
                  {calcResult}<span className="text-3xl text-[#8FA6BC] ml-2">soat</span>
                </div>
                <p className="font-sans text-sm text-[#8FA6BC] mb-6">Bu taxminiy hisob. Haqiqiy raqamlarni bilish uchun bepul audit oling.</p>
                <ConsultationButton text="Bepul Audit Olish →"
                  className="h-12 px-8 rounded-sm bg-[#FF6B35] hover:bg-[#E85A24] text-white font-display font-bold text-base transition-all cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section id="testimonials" className="py-24 bg-[#0F2A4A] relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-40 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-12 relative z-10">
          <div className="mb-14 border-b border-[#5FD8E8]/15 pb-8">
            <span className="font-mono text-xs text-[#5FD8E8] uppercase tracking-[0.2em] mb-3 block">// MIJOZ SHARHLARI</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-[#EDF3F5] leading-tight">Ular Nima Deydi?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} id={`testimonial-${i}`} className="relative border border-[#5FD8E8]/15 bg-[#0A1E35]/60 rounded-sm p-8 card-3d">
                <Quote className="w-8 h-8 text-[#5FD8E8]/20 mb-4" />
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} className="w-4 h-4 text-[#FF6B35] fill-[#FF6B35]" />
                  ))}
                </div>
                <p className="font-sans text-sm text-[#8FA6BC] leading-relaxed mb-8 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 border-t border-[#5FD8E8]/10 pt-5">
                  <div className="w-10 h-10 rounded-sm bg-[#5FD8E8]/15 flex items-center justify-center flex-shrink-0">
                    <span className="font-display font-black text-[#5FD8E8] text-base">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-display font-bold text-[#EDF3F5] text-sm">{t.name}</div>
                    <div className="font-mono text-[10px] text-[#8FA6BC] uppercase tracking-wider">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section id="faq" className="py-24 bg-[#F3F1EA] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-dots opacity-20 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-12 relative z-10">
          <div className="mb-14 border-b border-[#0F2036]/15 pb-8">
            <span className="font-mono text-xs text-[#FF6B35] uppercase tracking-[0.2em] mb-3 block">// FAQ</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-[#0F2036] leading-tight">
              Tez-Tez Beriladigan <span className="gradient-text-orange">Savollar</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {faq.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT — Premium CTA Card ═══ */}
      <section id="contact" className="py-24 bg-[#0A1E35] relative overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-[#5FD8E8]/6 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] bg-[#FF6B35]/6 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-12 relative z-10 max-w-5xl">
          <div className="relative rounded-sm overflow-hidden" style={{ border: "1px solid rgba(95,216,232,0.2)" }}>
            <div className="relative bg-gradient-to-br from-[#0F2A4A] via-[#0d2440] to-[#0A1E35] p-8 md:p-14">
              <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
              <div className="absolute top-0 left-0 font-mono text-[9px] text-[#5FD8E8]/30 p-3 tracking-widest z-10">SHEET 04</div>
              <div className="absolute top-0 right-0 font-mono text-[9px] text-[#5FD8E8]/30 p-3 tracking-widest z-10">REV B</div>
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left */}
                <div>
                  <span className="font-mono text-xs text-[#FF6B35] uppercase tracking-[0.2em] mb-4 block">// BOG&apos;LANISH</span>
                  <h2 className="font-display text-5xl md:text-6xl font-black text-[#EDF3F5] leading-[0.92] mb-6">
                    Loyihangizni<br />
                    <span className="gradient-text-blueprint">Bugunoq</span><br />
                    Boshlaylik
                  </h2>
                  <p className="font-sans text-sm text-[#8FA6BC] leading-relaxed mb-8 max-w-sm">
                    24 soat ichida mutaxassislarimiz bepul smeta va maslahat taqdim etishadi.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {[
                      { icon: Phone, label: "+998 90 123 45 67", href: "tel:+998901234567", color: "#5FD8E8" },
                      { icon: Mail,  label: "info@raqamly.uz",   href: "mailto:info@raqamly.uz", color: "#FF6B35" },
                      { icon: Bot,   label: "@raqamli_uzbot",    href: "https://t.me/raqamli_uzbot", color: "#5FD8E8" },
                    ].map((c, i) => (
                      <a key={i} href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm border transition-colors font-mono text-xs"
                        style={{ borderColor: `${c.color}30`, color: c.color, background: `${c.color}08` }}>
                        <c.icon className="w-3.5 h-3.5" />{c.label}
                      </a>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#8FA6BC]" />
                    <span className="font-mono text-xs font-medium text-[#8FA6BC] uppercase tracking-wider">Guliston, Sirdaryo · IT Live</span>
                  </div>
                </div>

                {/* Right: Form */}
                <div>
                  {formSent ? (
                    <div className="text-center py-14 border border-[#5FD8E8]/15 rounded-sm bg-[#0A1E35]/50">
                      <div className="w-14 h-14 rounded-sm bg-[#5FD8E8]/15 border border-[#5FD8E8]/30 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-7 h-7 text-[#5FD8E8]" />
                      </div>
                      <h3 className="font-display text-2xl font-black text-[#EDF3F5] mb-2">Yuborildi!</h3>
                      <p className="font-mono text-xs text-[#8FA6BC] uppercase tracking-widest">24 soat ichida bog&apos;lanamiz</p>
                    </div>
                  ) : (
                    <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="font-mono text-[9px] text-[#5FD8E8]/60 uppercase tracking-[0.2em] block mb-1.5">Ism-Familiya</label>
                        <input id="contact-name" type="text" required value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jasur Toshmatov"
                          className="w-full h-12 px-4 rounded-sm font-sans text-sm text-[#EDF3F5] placeholder:text-[#8FA6BC]/35 focus:outline-none transition-colors bg-[#0A1E35]/80 border border-[#5FD8E8]/20 focus:border-[#5FD8E8]/50" />
                      </div>
                      <div>
                        <label className="font-mono text-[9px] text-[#5FD8E8]/60 uppercase tracking-[0.2em] block mb-1.5">Telefon</label>
                        <input id="contact-phone" type="tel" required value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+998 90 000 00 00"
                          className="w-full h-12 px-4 rounded-sm font-sans text-sm text-[#EDF3F5] placeholder:text-[#8FA6BC]/35 focus:outline-none transition-colors bg-[#0A1E35]/80 border border-[#5FD8E8]/20 focus:border-[#5FD8E8]/50" />
                      </div>
                      <div>
                        <label className="font-mono text-[9px] text-[#5FD8E8]/60 uppercase tracking-[0.2em] block mb-1.5">Loyiha haqida</label>
                        <textarea id="contact-message" rows={3} value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Bot, CRM yoki veb-sayt kerak..."
                          className="w-full px-4 py-3 rounded-sm font-sans text-sm text-[#EDF3F5] placeholder:text-[#8FA6BC]/35 focus:outline-none transition-colors resize-none bg-[#0A1E35]/80 border border-[#5FD8E8]/20 focus:border-[#5FD8E8]/50" />
                      </div>
                      <button id="contact-submit" type="submit" disabled={formLoading}
                        className="w-full py-4 rounded-sm bg-[#FF6B35] hover:bg-[#E85A24] text-white font-display font-black text-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(255,107,53,0.4)] disabled:opacity-50 cursor-pointer">
                        <Send className="w-4 h-4" />
                        {formLoading ? "Yuborilmoqda..." : "Xabar Yuborish"}
                      </button>
                      <p className="font-mono text-[9px] text-[#8FA6BC]/40 text-center uppercase tracking-wider">
                        Javob 24 soat ichida · Ma&apos;lumotlar xavfsiz
                      </p>
                    </form>
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TECH STACK ═══ */}
      <section className="py-14 bg-[#0A1E35] border-y border-[#5FD8E8]/10 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-12 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8FA6BC]/60 mb-8">
            Foydalaniladigan Zamonaviy Dasturlash Texnologiyalari
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {["Next.js 16", "React 19", "TypeScript", "NestJS", "Node.js", "Python AI", "Prisma ORM", "Tailwind CSS"].map((tech, i) => (
              <div key={i} className="px-5 py-2.5 rounded-sm border border-[#5FD8E8]/15 text-sm font-mono text-[#8FA6BC] hover:border-[#5FD8E8]/40 hover:text-[#5FD8E8] transition-colors">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
