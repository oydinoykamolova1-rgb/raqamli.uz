import { 
  Building2, 
  Users, 
  Rocket, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe2,
  Sparkles,
  Code2,
  TrendingUp,
  MessageSquare,
  Star
} from "lucide-react";
import { ConsultationButton } from "@/components/ConsultationButton";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">

      {/* ========== HERO ========== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 bg-[#09090b]" />
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(at 15% 40%, rgba(124,58,237,0.35) 0px, transparent 55%),
            radial-gradient(at 85% 15%, rgba(236,72,153,0.3) 0px, transparent 50%),
            radial-gradient(at 70% 80%, rgba(6,182,212,0.25) 0px, transparent 50%),
            radial-gradient(at 40% 90%, rgba(124,58,237,0.2) 0px, transparent 45%)
          `
        }} />

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-violet-600/20 rounded-full blur-[120px] float" />
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-pink-500/20 rounded-full blur-[100px] float-delayed" />
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-cyan-400/15 rounded-full blur-[80px] float" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center flex flex-col items-center pt-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass border border-violet-500/30 mb-10 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-violet-400 pulse-ring" />
            <span className="text-sm font-semibold text-white">🚀 Sirdaryo #1 IT Kompaniyasi</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white max-w-5xl mb-8 leading-[1.05] tracking-tight animate-fade-up">
            Biznesingizni{" "}
            <span className="gradient-text">Raqamli Kelajak</span>
            <br />ga olib chiqamiz
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed animate-fade-up">
            Veb-saytlar, Telegram botlar va ERP/CRM tizimlar — hamma narsani bitta jamoadan oling. Tezkor, sifatli, arzon.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-20 animate-fade-up">
            <ConsultationButton
              text="Bepul Konsultatsiya"
              className="h-14 px-8 rounded-2xl bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white font-bold text-base shadow-2xl shadow-violet-900/40 transition-all hover:scale-105 hover:shadow-violet-900/60"
            />
            <Link
              href="/#portfolio"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl glass text-white font-semibold text-base hover:bg-white/10 transition-all border border-white/10"
            >
              Ishlarimizni ko&apos;ring <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl animate-fade-up">
            {[
              { num: "50+", label: "Bajarilgan loyihalar" },
              { num: "20+", label: "Mijozlar" },
              { num: "24/7", label: "Texnik qo'llab" },
              { num: "100%", label: "Sifat kafolati" },
            ].map((s, i) => (
              <div key={i} className="glass rounded-2xl p-4 border border-white/10">
                <div className="text-3xl font-black gradient-text mb-1">{s.num}</div>
                <div className="text-xs text-zinc-400 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#09090b] to-transparent" />
      </section>

      {/* ========== SERVICES ========== */}
      <section id="services" className="py-32 bg-[#09090b] relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(at 50% 0%, rgba(124,58,237,0.12) 0px, transparent 60%)`
        }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 text-sm font-bold text-violet-400 uppercase tracking-widest mb-4">
              <Sparkles className="w-4 h-4" /> Bizning Xizmatlar
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Har qanday raqamli<br /><span className="gradient-text">yechim bitta joyda</span></h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Qiyinlikdan qat'iy nazar, biz sizning g'oyangizni haqiqatga aylantiramiz</p>
          </div>

          <div className="space-y-8">
            {/* Service 1 */}
            <div className="group relative rounded-3xl border border-white/8 bg-zinc-900/60 backdrop-blur-sm overflow-hidden hover:border-violet-500/30 transition-all card-lift">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative min-h-[350px] overflow-hidden bg-zinc-800">
                  <Image src="/portfolio-crm.png" alt="CRM/ERP tizim" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900/50" />
                  <span className="absolute top-6 left-6 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-violet-500 text-white">
                    ⭐ Premium
                  </span>
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-14 relative z-10">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
                      <Code2 className="w-5 h-5 text-violet-400" />
                    </div>
                    <span className="text-sm text-violet-400 font-semibold">CRM & ERP</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-black text-white mb-5">Biznes Boshqaruv Tizimlari</h3>
                  <p className="text-zinc-400 mb-8 leading-relaxed">Tashkilotingizdagi jarayonlarni to'liq avtomatlashtirish, buxgalteriya va ombor hisobini yuritish uchun moslashtirilgan kuchli boshqaruv tizimlari.</p>
                  <ul className="space-y-3 mb-10">
                    {["Xodimlarni boshqarish (HR)", "Mijozlar bilan ishlash (CRM)", "Ombor va moliya nazorati"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-zinc-300">
                        <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between p-5 rounded-2xl bg-zinc-800/80 border border-white/5">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-zinc-500" />
                      <div>
                        <span className="block text-xs text-zinc-500 font-semibold uppercase tracking-wider">Muddati</span>
                        <span className="font-bold text-white">1 — 3 Oy</span>
                      </div>
                    </div>
                    <ConsultationButton text="Buyurtma berish" className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white text-sm font-bold transition-all hover:shadow-lg hover:shadow-violet-900/40" />
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group relative rounded-3xl border border-white/8 bg-zinc-900/60 backdrop-blur-sm overflow-hidden hover:border-cyan-500/30 transition-all card-lift">
              <div className="absolute inset-0 bg-gradient-to-bl from-cyan-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative min-h-[350px] overflow-hidden bg-zinc-800 lg:order-2">
                  <Image src="/portfolio-bot.png" alt="Telegram bot" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-zinc-900/50" />
                  <span className="absolute top-6 left-6 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-cyan-500 text-white">
                    ⚡ Tezkor
                  </span>
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-14 lg:order-1 relative z-10">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="text-sm text-cyan-400 font-semibold">Telegram Bot</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-black text-white mb-5">AI-powered Telegram Botlar</h3>
                  <p className="text-zinc-400 mb-8 leading-relaxed">Sizning biznesingiz uchun mijozlardan buyurtma qabul qiladigan, to'lovlarni integratsiya qila oladigan zamonaviy sun'iy intellektga asoslangan botlar.</p>
                  <ul className="space-y-3 mb-10">
                    {["Onlayn do'kon va katalog", "Click/Payme to'lov integratsiyasi", "Admin panel orqali boshqaruv"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-zinc-300">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between p-5 rounded-2xl bg-zinc-800/80 border border-white/5">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-zinc-500" />
                      <div>
                        <span className="block text-xs text-zinc-500 font-semibold uppercase tracking-wider">Muddati</span>
                        <span className="font-bold text-white">3 — 10 Kun</span>
                      </div>
                    </div>
                    <ConsultationButton text="Buyurtma berish" className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 text-white text-sm font-bold transition-all hover:shadow-lg hover:shadow-cyan-900/40" />
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group relative rounded-3xl border border-white/8 bg-zinc-900/60 backdrop-blur-sm overflow-hidden hover:border-pink-500/30 transition-all card-lift">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative min-h-[350px] overflow-hidden bg-zinc-800">
                  <Image src="/portfolio-web.png" alt="Veb-sayt" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900/50" />
                  <span className="absolute top-6 left-6 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-pink-500 to-orange-400 text-white">
                    🎨 Design
                  </span>
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-14 relative z-10">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center">
                      <Globe2 className="w-5 h-5 text-pink-400" />
                    </div>
                    <span className="text-sm text-pink-400 font-semibold">Veb-sayt</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-black text-white mb-5">Premium Veb-saytlar</h3>
                  <p className="text-zinc-400 mb-8 leading-relaxed">Zamonaviy dizayn, tezkor yuklanish va SEO optimizatsiya bilan jihozlangan veb-saytlar. Mijozlarni qo'lga olishga moslashtirilgan.</p>
                  <ul className="space-y-3 mb-10">
                    {["Landing page va korporativ saytlar", "SEO va Google optimizatsiya", "Mobil qurilmalarga moslashgan (Responsive)"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-zinc-300">
                        <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between p-5 rounded-2xl bg-zinc-800/80 border border-white/5">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-zinc-500" />
                      <div>
                        <span className="block text-xs text-zinc-500 font-semibold uppercase tracking-wider">Muddati</span>
                        <span className="font-bold text-white">5 — 14 Kun</span>
                      </div>
                    </div>
                    <ConsultationButton text="Buyurtma berish" className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-500 hover:to-orange-400 text-white text-sm font-bold transition-all hover:shadow-lg hover:shadow-pink-900/40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PORTFOLIO ========== */}
      <section id="portfolio" className="py-32 relative bg-[#09090b]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(at 80% 50%, rgba(236,72,153,0.1) 0px, transparent 55%)`
        }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 text-sm font-bold text-pink-400 uppercase tracking-widest mb-4">
              <Star className="w-4 h-4" /> Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Bizning <span className="gradient-text">Eng Yaxshi</span> Ishlar</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Muvaffaqiyatli amalga oshirilgan loyihalardan namunalar</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: "/portfolio-crm.png", tag: "CRM Tizim", title: "Savdo Boshqaruv Tizimi", color: "violet" },
              { img: "/portfolio-bot.png", tag: "Telegram Bot", title: "E-Commerce Bot", color: "cyan" },
              { img: "/portfolio-web.png", tag: "Veb-sayt", title: "Korporativ Landing Page", color: "pink" },
            ].map((item, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden border border-white/8 bg-zinc-900 card-lift cursor-pointer">
                <div className="relative h-52 overflow-hidden">
                  <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />
                  <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${
                    item.color === 'violet' ? 'bg-violet-500/90' :
                    item.color === 'cyan' ? 'bg-cyan-500/90' : 'bg-pink-500/90'
                  } text-white`}>{item.tag}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-500">Mijoz uchun to'liq ishlab chiqildi va muvaffaqiyatli topshirildi</p>
                  <div className="flex items-center gap-2 mt-4 text-violet-400 text-sm font-semibold group-hover:gap-3 transition-all">
                    Batafsil <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY US / ABOUT ========== */}
      <section id="about" className="py-32 bg-[#09090b] relative">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(at 20% 50%, rgba(6,182,212,0.1) 0px, transparent 55%)`
        }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 uppercase tracking-widest mb-4">
              <ShieldCheck className="w-4 h-4" /> Bizning Ustunlik
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Nега <span className="gradient-text">Raqamly</span> ni tanlashadi?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Rocket, title: "Tezkor topshirish", desc: "Belgilangan muddatda, sifatni yo'qotmagan holda loyiha topshiramiz.", color: "from-violet-500 to-purple-600" },
              { icon: ShieldCheck, title: "Mahalliy jamoa", desc: "Sirdaryo hududida bevosita uchrashish va qo'llab-quvvatlash.", color: "from-pink-500 to-rose-600" },
              { icon: Zap, title: "Shaffof narx", desc: "Yashirin to'lovlar yo'q. Har qanday byudjetga moslashamiz.", color: "from-orange-500 to-amber-500" },
              { icon: Globe2, title: "Ikki tildagi servis", desc: "O'zbek va rus tillarida hujjatlar va saytlarni tayyorlaymiz.", color: "from-cyan-500 to-blue-600" },
            ].map((f, i) => (
              <div key={i} className="group glass rounded-3xl p-8 border border-white/8 hover:border-white/20 card-lift">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <f.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="py-32 bg-[#09090b]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/80 via-purple-900/60 to-pink-900/60" />
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(at 30% 50%, rgba(124,58,237,0.5) 0px, transparent 60%), radial-gradient(at 80% 30%, rgba(236,72,153,0.4) 0px, transparent 50%)`
            }} />
            <div className="absolute inset-0 opacity-[0.05]" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }} />
            <div className="relative z-10 py-20 px-8 text-center">
              <span className="inline-flex items-center gap-2 text-sm font-bold text-violet-300 uppercase tracking-widest mb-6">
                <Sparkles className="w-4 h-4" /> Bepul Maslahat
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                Loyihangizni bugundan<br />
                <span className="gradient-text">boshlashga tayyormisiz?</span>
              </h2>
              <p className="text-zinc-300 text-lg mb-12 max-w-2xl mx-auto">
                Bepul konsultatsiya oling. Ekspertlarimiz 24 soat ichida siz bilan bog'lanadi.
              </p>
              <ConsultationButton
                text="Bepul Konsultatsiya Olish 🚀"
                className="h-16 px-10 rounded-2xl bg-white text-zinc-900 hover:bg-zinc-100 font-black text-lg transition-all hover:scale-105 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
