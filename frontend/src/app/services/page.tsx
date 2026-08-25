import { 
  MonitorSmartphone, 
  PenTool, 
  TrendingUp, 
  ShieldCheck, 
  Bot, 
  Code2, 
  Database, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Globe
} from 'lucide-react';
import { ConsultationButton } from '@/components/ConsultationButton';
import Link from 'next/link';

const servicesList = [
  {
    icon: Code2,
    badge: "Enterprise Tizimlar",
    title: "CRM & ERP Boshqaruv Tizimlari",
    description: "Biznesingizdagi barcha ichki jarayonlarni to'liq avtomatlashtirish, buxgalteriya, ombor hisoboti va xodimlarni boshqarish uchun individual moslashtirilgan murakkab boshqaruv dasturlari.",
    features: [
      "Ombor va moddiy boyliklar hisoboti (Real-time)",
      "Xodimlarning ish samaradorligi va topshiriqlar paneli",
      "Mijozlar bazasi va avtomatik bildirishnomalar",
      "Moliyaviy tahlil va avtomatik hisobotlar"
    ],
    timeline: "1 — 3 Oy",
    color: "from-violet-600 to-purple-600",
    borderGlow: "hover:border-violet-500/50"
  },
  {
    icon: Bot,
    badge: "Sun'iy Intellekt",
    title: "AI-Powered Telegram Botlar",
    description: "Mijozlardan 24/7 rejimida buyurtmalarni qabul qiladigan, Click/Payme to'lov tizimlariga ulangan va avtomatik javob beruvchi aqlli botlar.",
    features: [
      "Onlayn katalog va Telegram-Shopping tizimi",
      "Click, Payme, Uzum Bank va Visa to'lov integratsiyasi",
      "Qulay admin web-paneli",
      "Sun'iy intellekt (ChatGPT/Claude API) integratsiyasi"
    ],
    timeline: "3 — 10 Kun",
    color: "from-cyan-500 to-blue-600",
    borderGlow: "hover:border-cyan-500/50"
  },
  {
    icon: Globe,
    badge: "Veb Platformalar",
    title: "Premium Veb-Saytlar va Portal",
    description: "Zamonaviy dizayn, maksimal tezkor yuklanish va Google SEO optimizatsiyasi bilan boyitilgan brendingiz rasmiy veb-sayti.",
    features: [
      "Landing page va korporativ rasmiy veb-saytlar",
      "Google SEO 95+ ballik optimizatsiyasi",
      "Barcha mobil va planshet qurilmalariga moslashish",
      "Yuqori darajadagi kibervafolatsiz xavfsizlik"
    ],
    timeline: "5 — 14 Kun",
    color: "from-pink-600 to-rose-600",
    borderGlow: "hover:border-pink-500/50"
  },
  {
    icon: PenTool,
    badge: "Design Studio",
    title: "UI/UX Interfeys Dizayni",
    description: "Foydalanuvchilar sevib ishlatadigan, zamonaviy va interaktiv foydalanuvchi interfeysi (Web & Mobile UI/UX) yaratish.",
    features: [
      "Figma interaktiv prototiplash va wireframe",
      "Foydalanuvchi tajribasi (UX) audit va tahlili",
      "Design System va UI komponentlar to'plami",
      "Brending va vizual uslub shakllantirish"
    ],
    timeline: "3 — 7 Kun",
    color: "from-amber-500 to-orange-600",
    borderGlow: "hover:border-amber-500/50"
  },
  {
    icon: TrendingUp,
    badge: "Digital Growth",
    title: "SEO & Qidiruv Operatsiyalari",
    description: "Veb-saytingizni Google va boshqa qidiruv tizimlarida eng yuqori o'rinlarga olib chiqish hamda organik mijozlar oqimini ko'paytirish.",
    features: [
      "Kalit so'zlar (Keywords) va raqobatchilar tahlili",
      "Texnik SEO audit va tezlikni oshirish",
      "Google Search Console va Analytics sozlash",
      "Organik mijozlar oqimini oshirish"
    ],
    timeline: "Davomiy",
    color: "from-emerald-500 to-teal-600",
    borderGlow: "hover:border-emerald-500/50"
  },
  {
    icon: ShieldCheck,
    badge: "Audit & Security",
    title: "IT Konsalting va Xavfsizlik",
    description: "Kompaniyangiz axborot texnologiyalari arxitekturasini to'g'ri qurish, ma'lumotlar xavfsizligini ta'minlash bo'yicha ekspert maslahatlari.",
    features: [
      "Mavjud IT infratuzilmani kompleks auditi",
      "Server va ma'lumotlar bazasi xavfsizligi",
      "Bulutli (Cloud) platformalarga ko'chirish",
      "Texnik va dasturiy maslahatlar"
    ],
    timeline: "Tezkor",
    color: "from-indigo-600 to-violet-700",
    borderGlow: "hover:border-indigo-500/50"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#030712] pt-32 pb-24 relative overflow-hidden cyber-mesh-bg">
      
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-violet-400 uppercase tracking-widest bg-violet-950/40 border border-violet-500/20 mb-4 font-space">
            <Sparkles className="w-4 h-4" /> Barcha Xizmatlarimiz
          </div>
          <h1 className="text-4xl md:text-6xl font-space font-extrabold text-white mb-6 leading-tight">
            Biznesingiz uchun <br />
            <span className="gradient-text-cyber">Innovatsion Raqamli Xizmatlar</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Biz nafaqat kod yozamiz, balki sizning g&apos;oyangizni bozorda daromad keltiradigan mukammal mahsulotga aylantiramiz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className={`glass-panel rounded-3xl p-8 border border-white/10 ${service.borderGlow} transition-all duration-300 card-3d flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold font-space uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-space font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2.5 mb-8 pt-4 border-t border-white/10">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-semibold">
                  Muddat: <strong className="text-white font-space">{service.timeline}</strong>
                </span>
                <ConsultationButton 
                  text="Buyurtma berish" 
                  className="px-4 py-2 rounded-xl bg-violet-600/80 hover:bg-violet-600 text-white text-xs font-bold font-space transition-colors" 
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="max-w-4xl mx-auto glass-panel-glow rounded-3xl p-10 md:p-14 text-center border border-violet-500/30 relative overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.2)]">
          <h2 className="text-3xl md:text-4xl font-space font-extrabold text-white mb-4">
            Qaysi xizmat sizga mos ekanligiga ikkalanayapsizmi?
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto mb-8">
            Biz bilan bog&apos;laning. Mutaxassislarimiz loyihangizni o&apos;rganib, sizga eng maqbul va samarali rejani tuzib berishadi.
          </p>
          <ConsultationButton
            text="Bepul Maslahat Olish 🚀"
            className="h-14 px-8 rounded-2xl bg-gradient-to-r from-violet-600 via-pink-600 to-violet-700 hover:from-violet-500 hover:to-pink-500 text-white font-space font-bold text-base shadow-lg transition-all hover:scale-105"
          />
        </div>

      </div>
    </div>
  );
}
