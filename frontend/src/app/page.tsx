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
  Star,
  Cpu,
  Layers,
  Terminal,
  Database,
  Bot,
  ChevronRight,
  PhoneCall,
  Lock,
  Award
} from "lucide-react";
import { ConsultationButton } from "@/components/ConsultationButton";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-[#030712]">

      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden cyber-mesh-bg cyber-grid">
        
        {/* Animated Orbs & Ambient Light */}
        <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-violet-600/25 rounded-full blur-[140px] animate-float pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-pink-600/20 rounded-full blur-[140px] animate-float-reverse pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center flex flex-col items-center">
          
          {/* Futuristic Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-panel border border-violet-500/30 mb-8 shadow-[0_0_25px_rgba(139,92,246,0.25)] animate-pulse">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-1.5 font-space">
              <Sparkles className="w-3.5 h-3.5 text-violet-400" />
              Sirdaryodagi #1 Innovatsion IT Studio
            </span>
          </div>

          {/* Main Scifi Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white max-w-5xl mb-6 leading-[1.1] tracking-tight font-space">
            Biznesingizni <br className="hidden sm:inline" />
            <span className="gradient-text-cyber">Raqamli Kelajak</span> Davriga Olib Chiqamiz
          </h1>

          <p className="text-base md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed font-sans font-light">
            Yuqori tezlikda ishlovchi veb-saytlar, AI Telegram botlar, murakkab ERP/CRM boshqaruv tizimlari va dizayn — bitta professional jamoadan.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
            <ConsultationButton
              text="Bepul Konsultatsiya Olish 🚀"
              className="h-14 px-8 rounded-2xl bg-gradient-to-r from-violet-600 via-pink-600 to-violet-700 hover:from-violet-500 hover:to-pink-500 text-white font-space font-bold text-base shadow-[0_0_35px_rgba(139,92,246,0.45)] transition-all hover:scale-105 hover:shadow-[0_0_45px_rgba(236,72,153,0.55)] cursor-pointer"
            />
            <Link
              href="/#portfolio"
              className="inline-flex items-center justify-center gap-2.5 h-14 px-8 rounded-2xl glass-panel text-white font-space font-semibold text-base hover:bg-white/10 transition-all border border-white/15 hover:border-violet-500/40"
            >
              <span>Ishlarimizni Ko&apos;ring</span>
              <ArrowRight className="w-5 h-5 text-violet-400" />
            </Link>
          </div>

          {/* Live Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
            {[
              { num: "50+", label: "Bajarilgan Loyihalar", icon: Rocket, color: "text-violet-400" },
              { num: "25+", label: "Mamnun Mijozlar", icon: Users, color: "text-pink-400" },
              { num: "24/7", label: "Texnik Qo'llab-quvvatlash", icon: Clock, color: "text-cyan-400" },
              { num: "100%", label: "Sifat va Xavfsizlik", icon: ShieldCheck, color: "text-emerald-400" },
            ].map((stat, i) => (
              <div key={i} className="glass-panel rounded-2xl p-5 border border-white/10 hover:border-violet-500/30 transition-all duration-300 card-3d">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-3xl font-space font-black ${stat.color}`}>{stat.num}</span>
                  <stat.icon className={`w-5 h-5 ${stat.color} opacity-80`} />
                </div>
                <div className="text-xs text-gray-400 font-medium text-left">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>

        {/* Section bottom blend gradient */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none" />
      </section>

      {/* ========== SERVICES SECTION ========== */}
      <section id="services" className="py-28 bg-[#030712] relative overflow-hidden">
        
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `radial-gradient(at 50% 0%, rgba(139,92,246,0.12) 0px, transparent 60%)`
        }} />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-violet-400 uppercase tracking-widest bg-violet-950/40 border border-violet-500/20 mb-4 font-space">
              <Sparkles className="w-4 h-4" /> Professional Xizmatlar
            </span>
            <h2 className="text-3xl md:text-5xl font-space font-extrabold text-white mb-6">
              Raqamli Yechimlar <span className="gradient-text-cyber">Bitta Jamoadan</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Biznesingiz ehtiyojlariga moslashtirilgan zamonaviy dasturiy ta&apos;minot va tizimlar
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            
            {/* Service 1: CRM & ERP */}
            <div className="group relative rounded-3xl border border-white/10 bg-slate-950/50 backdrop-blur-xl overflow-hidden hover:border-violet-500/50 transition-all duration-500 card-3d">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative min-h-[320px] lg:min-h-[420px] overflow-hidden bg-slate-900">
                  <Image 
                    src="/portfolio-crm.png" 
                    alt="CRM va ERP Tizimlar" 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 50vw" 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent" />
                  <span className="absolute top-6 left-6 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-violet-600/90 text-white backdrop-blur-md shadow-lg font-space">
                    <Award className="w-3.5 h-3.5" /> Premium Yechim
                  </span>
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12 relative z-10">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center text-violet-400 border border-violet-500/30">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-violet-400 uppercase tracking-wider font-space">CRM & ERP Tizimlari</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-space font-bold text-white mb-4">Biznes Boshqaruv Tizimlari</h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    Kompaniyangiz jarayonlarini to&apos;liq avtomatlashtirish, buxgalteriya, ombor hisoboti va xodimlarni boshqarish uchun individual moslashtirilgan tizim.
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {["Xodimlarni boshqarish va topshiriqlar nazorati (HR)", "Mijozlar bilan samarali muloqot va sotuvlar (CRM)", "Ombor va moliya hisobotlari (Real-time analytics)"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-violet-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-violet-400" />
                      <div>
                        <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">Tayyorlash muddati</span>
                        <span className="font-bold text-white text-sm font-space">1 — 3 Oy</span>
                      </div>
                    </div>
                    <ConsultationButton text="Buyurtma berish" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white text-xs font-bold font-space transition-all shadow-md" />
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2: Telegram Bot */}
            <div className="group relative rounded-3xl border border-white/10 bg-slate-950/50 backdrop-blur-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 card-3d">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative min-h-[320px] lg:min-h-[420px] overflow-hidden bg-slate-900 lg:order-2">
                  <Image 
                    src="/portfolio-bot.png" 
                    alt="Telegram Bot" 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 50vw" 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-slate-950 via-slate-950/40 to-transparent" />
                  <span className="absolute top-6 left-6 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-cyan-500/90 text-white backdrop-blur-md shadow-lg font-space">
                    <Zap className="w-3.5 h-3.5" /> Ultra Tezkor
                  </span>
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12 lg:order-1 relative z-10">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 border border-cyan-500/30">
                      <Bot className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-space">Telegram Botlar & AI</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-space font-bold text-white mb-4">AI-Powered Telegram Botlar</h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    Mijozlardan buyurtma qabul qiluvchi, Click/Payme to&apos;lov tizimlariga ulangan va avtomatik sun&apos;iy intellekt javob beruvchi botlar.
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {["Onlayn do'kon va interaktiv mahsulotlar katalogi", "Click va Payme to'lov tizimlari integratsiyasi", "Qulay admin panel orqali to'liq boshqaruv"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-cyan-400" />
                      <div>
                        <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">Tayyorlash muddati</span>
                        <span className="font-bold text-white text-sm font-space">3 — 10 Kun</span>
                      </div>
                    </div>
                    <ConsultationButton text="Buyurtma berish" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 text-white text-xs font-bold font-space transition-all shadow-md" />
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3: Web Apps */}
            <div className="group relative rounded-3xl border border-white/10 bg-slate-950/50 backdrop-blur-xl overflow-hidden hover:border-pink-500/50 transition-all duration-500 card-3d">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative min-h-[320px] lg:min-h-[420px] overflow-hidden bg-slate-900">
                  <Image 
                    src="/portfolio-web.png" 
                    alt="Veb-saytlar" 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 50vw" 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent" />
                  <span className="absolute top-6 left-6 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-pink-500/90 text-white backdrop-blur-md shadow-lg font-space">
                    <Globe2 className="w-3.5 h-3.5" /> High Performance
                  </span>
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12 relative z-10">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400 border border-pink-500/30">
                      <Globe2 className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-pink-400 uppercase tracking-wider font-space">Veb-saytlar & Platformalar</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-space font-bold text-white mb-4">Premium Veb-Saytlar</h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    Google SEO qidiruvlariga moslashgan, tezkor yuklanuvchi, har qanday qurilmada ideal ko&apos;rinuvchi zamonaviy veb-saytlar va portal tizimlari.
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {["Landing page va korporativ rasmiy saytlar", "Google SEO va tezkor optimizatsiya (95+ score)", "Mobil telefon va planshetlarga to'liq moslashuv"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-pink-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-pink-400" />
                      <div>
                        <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">Tayyorlash muddati</span>
                        <span className="font-bold text-white text-sm font-space">5 — 14 Kun</span>
                      </div>
                    </div>
                    <ConsultationButton text="Buyurtma berish" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-violet-600 hover:from-pink-500 hover:to-violet-500 text-white text-xs font-bold font-space transition-all shadow-md" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========== PORTFOLIO SECTION ========== */}
      <section id="portfolio" className="py-28 relative bg-[#030712] overflow-hidden">
        
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `radial-gradient(at 80% 50%, rgba(236,72,153,0.12) 0px, transparent 60%)`
        }} />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-pink-400 uppercase tracking-widest bg-pink-950/40 border border-pink-500/20 mb-4 font-space">
              <Star className="w-4 h-4" /> Bajarilgan Ishlar
            </span>
            <h2 className="text-3xl md:text-5xl font-space font-extrabold text-white mb-6">
              Bizning <span className="gradient-text-cyber">Sara Loyihalarimiz</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Real amaliyotda muvaffaqiyatli ishga tushirilgan raqamli yechimlarimiz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                img: "/portfolio-crm.png", 
                tag: "CRM Tizim", 
                title: "Savdo va Ombor Boshqaruv Tizimi", 
                desc: "Kompaniyaning barcha sotuvlari va mahsulot harakatini real vaqtda kuzatish paneli.", 
                badgeColor: "bg-violet-600/90 text-white" 
              },
              { 
                img: "/portfolio-bot.png", 
                tag: "Telegram Bot", 
                title: "E-Commerce Onlayn Do'kon Bot", 
                desc: "Telegram ichida to'lov qabul qiluvchi va buyurtmalarni kurerga yo'naltiruvchi bot.", 
                badgeColor: "bg-cyan-600/90 text-white" 
              },
              { 
                img: "/portfolio-web.png", 
                tag: "Veb-Sayt", 
                title: "Korporativ Veb Platforma", 
                desc: "Kompaniya xizmatlarini taqdim etuvchi va mijozlar so'rovini qabul qiluvchi landing page.", 
                badgeColor: "bg-pink-600/90 text-white" 
              },
            ].map((item, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-violet-500/40 card-3d flex flex-col">
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw" 
                    className="object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/30 to-transparent" />
                  <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${item.badgeColor} backdrop-blur-md shadow-md font-space`}>
                    {item.tag}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-space font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Muvaffaqiyatli ishga tushgan
                    </span>
                    <ConsultationButton text="Menga ham shunday" className="text-xs text-violet-400 hover:text-white font-bold" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========== PROCESS SECTION ("Qanday ishlaymiz?") ========== */}
      <section id="process" className="py-28 bg-[#030712] relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/40 border border-cyan-500/20 mb-4 font-space">
              <Layers className="w-4 h-4" /> Boshqichma-Boshqich
            </span>
            <h2 className="text-3xl md:text-5xl font-space font-extrabold text-white mb-6">
              Loyihani <span className="gradient-text-cyber">Amalga Oshirish Jarayoni</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
              G&apos;oyadan to tayyor mahsulotgacha bo&apos;lgan 5 ta aniq qadam
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {[
              { num: "01", title: "Audit & Muloqot", desc: "Tashkilotingiz ehtiyojlarini chuqur tahlil qilamiz.", color: "border-violet-500/30 text-violet-400" },
              { num: "02", title: "Loyiha Rejasi", desc: "Aniq muddat, texnik topshiriq va smetani belgilaymiz.", color: "border-pink-500/30 text-pink-400" },
              { num: "03", title: "UI/UX Dizayn", desc: "Zamonaviy va qulay vizual interfeys yaratamiz.", color: "border-cyan-500/30 text-cyan-400" },
              { num: "04", title: "Dasturlash", desc: "Xavfsiz va yuqori tezlikdagi kod yozamiz.", color: "border-emerald-500/30 text-emerald-400" },
              { num: "05", title: "Topshirish & Qo'llash", desc: "Ishga tushiramiz va 24/7 texnik yordam beramiz.", color: "border-amber-500/30 text-amber-400" },
            ].map((step, i) => (
              <div key={i} className={`glass-panel rounded-2xl p-6 border ${step.color} card-3d flex flex-col justify-between relative`}>
                <span className={`text-4xl font-space font-black opacity-40 mb-4 block`}>{step.num}</span>
                <div>
                  <h4 className="text-lg font-space font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========== ADVANTAGES / WHY US SECTION ========== */}
      <section id="about" className="py-28 bg-[#030712] relative overflow-hidden">
        
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `radial-gradient(at 20% 50%, rgba(6,182,212,0.1) 0px, transparent 60%)`
        }} />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/40 border border-emerald-500/20 mb-4 font-space">
              <ShieldCheck className="w-4 h-4" /> Nega Aynan Biz?
            </span>
            <h2 className="text-3xl md:text-5xl font-space font-extrabold text-white mb-6">
              Raqamly Kompaniyasining <span className="gradient-text-cyber">Ustunliklari</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { 
                icon: Rocket, 
                title: "O'z vaqtida Topshirish", 
                desc: "Kelishilgan muddatga qat'iy rioya etgan holda sifatli topshiramiz.", 
                bg: "from-violet-600 to-purple-600" 
              },
              { 
                icon: ShieldCheck, 
                title: "Rasmiy Kafolat", 
                desc: "Har bir dasturiy mahsulotimizga texnik va xavfsizlik kafolati beramiz.", 
                bg: "from-pink-600 to-rose-600" 
              },
              { 
                icon: Zap, 
                title: "Shaffof Shartnoma", 
                desc: "Yashirin to'lovlar va kutilmagan xarajatlarsiz aniq narx-navo.", 
                bg: "from-amber-500 to-orange-600" 
              },
              { 
                icon: Cpu, 
                title: "AI va Sun'iy Intellekt", 
                desc: "Eng so'nggi zamonaviy sun'iy intellekt modellarini integratsiya qilish.", 
                bg: "from-cyan-500 to-blue-600" 
              },
            ].map((f, i) => (
              <div key={i} className="glass-panel rounded-3xl p-8 border border-white/10 hover:border-violet-500/40 card-3d">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.bg} flex items-center justify-center text-white mb-6 shadow-lg`}>
                  <f.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-space font-bold text-white mb-3">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========== TECH STACK SECTION ========== */}
      <section className="py-20 bg-[#030712] relative overflow-hidden border-y border-white/5">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-xs uppercase font-bold tracking-widest text-gray-500 mb-8 font-space">
            Foydalaniladigan Zamonaviy Dasturlash Texnologiyalari
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 opacity-70">
            {["Next.js 16", "React 19", "TypeScript", "NestJS", "Node.js", "Python AI", "Prisma ORM", "Tailwind CSS"].map((tech, i) => (
              <div key={i} className="px-5 py-2.5 rounded-xl glass-panel text-sm font-space font-bold text-gray-300 border border-white/10 hover:border-violet-500/40 transition-colors">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA BANNER SECTION ========== */}
      <section className="py-28 bg-[#030712] relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="relative rounded-3xl overflow-hidden p-8 md:p-16 text-center cyber-border glass-panel-glow shadow-[0_0_80px_rgba(139,92,246,0.2)]">
            
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/30 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-600/30 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 text-xs font-bold text-violet-300 uppercase tracking-widest mb-6 font-space">
                <Sparkles className="w-4 h-4" /> Bepul Maslahat Oling
              </span>
              <h2 className="text-3xl md:text-5xl font-space font-extrabold text-white mb-6 leading-tight">
                Loyihangizni Bugunoq <br />
                <span className="gradient-text-cyber">Boshlashga Tayyormisiz?</span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg mb-10 leading-relaxed font-light">
                Bizga murojaat qiling. Ekspertlarimiz 24 soat ichida loyihangiz bo&apos;yicha bepul maslahat va smetani taqdim etishadi.
              </p>
              <ConsultationButton
                text="Bepul Konsultatsiyaga Yozilish 🚀"
                className="h-16 px-10 rounded-2xl bg-gradient-to-r from-violet-600 via-pink-600 to-violet-700 hover:from-violet-500 hover:to-pink-500 text-white font-space font-extrabold text-lg shadow-[0_0_35px_rgba(139,92,246,0.5)] transition-all hover:scale-105 cursor-pointer"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
