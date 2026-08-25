import { 
  Building2, 
  Users, 
  Laptop, 
  MessageSquare, 
  Rocket, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe2
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ConsultationButton } from "@/components/ConsultationButton";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">


      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 dark:from-primary/10 dark:via-transparent dark:to-primary/5 -z-10" />
        
        {/* Abstract background shapes */}
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto px-4 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <span className="text-sm font-medium">Sirdaryo biznesini raqamlashtiramiz</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white max-w-4xl mb-8 leading-tight">
            Biznesingiz uchun <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">IT yechimlar</span> va raqamli kelajak
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mb-12 leading-relaxed">
            Korxonalar va jismoniy shaxslar uchun zamonaviy veb-saytlar, Telegram botlar hamda ERP/CRM tizimlarini ishlab chiqamiz.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold hover:scale-105 transition-transform">
              <Building2 className="w-5 h-5" />
              Tashkilotlar uchun
            </button>
            <button className="flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white font-semibold hover:bg-neutral-50 dark:hover:bg-white/10 transition-colors">
              <Users className="w-5 h-5" />
              Jismoniy shaxslar uchun
            </button>
          </div>
        </div>
      </section>

      {/* STATS & TRUST */}
      <section className="py-12 glass border-y border-white/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-black/5 dark:divide-white/10">
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">50+</span>
              <span className="text-sm text-neutral-500 font-medium">Bajarilgan loyihalar</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">20+</span>
              <span className="text-sm text-neutral-500 font-medium">Tashkilotlar bilan ishonch</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">24/7</span>
              <span className="text-sm text-neutral-500 font-medium">Texnik qo'llab-quvvatlash</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">100%</span>
              <span className="text-sm text-neutral-500 font-medium">Sifat kafolati</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES - WHY US */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">Nega bizni tanlashadi?</h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">Sizning muvaffaqiyatingiz bizning ustuvor vazifamizdir</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Rocket, title: "Tezkor ishga tushirish", desc: "Loyihalarni belgilangan muddatda, sifatni yo'qotmagan holda tezkor topshiramiz." },
              { icon: ShieldCheck, title: "Mahalliy qo'llab-quvvatlash", desc: "Sirdaryo hududida bevosita yuzma-yuz uchrashish va qo'llab-quvvatlash imkoniyati." },
              { icon: Zap, title: "Arzon va shaffof narx", desc: "Har qanday byudjetga moslashuvchan narxlar va yashirin to'lovlarsiz xizmat." },
              { icon: Globe2, title: "Ikki tildagi servis", desc: "Loyiha hujjatlari va saytlarni o'zbek hamda rus tillarida mukammal tayyorlaymiz." }
            ].map((feature, idx) => (
              <div key={idx} className="glass p-8 rounded-3xl hover:shadow-xl hover:shadow-primary/5 transition-all group">
                <div className="w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES ARCHAZOR STYLE CARDS */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">Bizning xizmatlar</h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">Har qanday qiyinlikdagi raqamli yechimlar bitta joyda</p>
          </div>

          <div className="space-y-12 lg:space-y-24">
            
            {/* SERVICE CARD 1 */}
            <div className="group relative overflow-hidden rounded-[2.5rem] bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800 transition-all hover:shadow-2xl hover:shadow-primary/5">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative min-h-[400px] lg:min-h-[500px] overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                  {/* Abstract placeholder image using gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 transition-transform duration-700 group-hover:scale-105 opacity-80" />
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 mix-blend-overlay" />
                  <div className="absolute left-6 top-6 z-10 flex gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold shadow-sm backdrop-blur-md bg-white/20 dark:bg-black/40 text-white border border-white/30 uppercase tracking-wide">
                      Premium
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-14">
                  <h3 className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white mb-6">CRM va ERP tizimlar</h3>
                  <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                    Tashkilotingizdagi jarayonlarni to'liq avtomatlashtirish, buxgalteriya va ombor hisobini yuritish uchun moslashtirilgan kuchli boshqaruv tizimlari.
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                    {["Xodimlarni boshqarish (HR)", "Mijozlar bilan ishlash (CRM)", "Ombor va moliya nazorati"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 font-medium">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-800">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-neutral-500">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">Muddati</span>
                        <span className="font-semibold text-neutral-900 dark:text-white">1 - 3 Oy</span>
                      </div>
                    </div>
                    <div className="ml-auto w-full sm:w-auto">
                      <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold transition-colors">
                        Batafsil <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SERVICE CARD 2 (REVERSED) */}
            <div className="group relative overflow-hidden rounded-[2.5rem] bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800 transition-all hover:shadow-2xl hover:shadow-primary/5">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative min-h-[400px] lg:min-h-[500px] overflow-hidden bg-neutral-200 dark:bg-neutral-800 lg:order-2">
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-400 to-blue-600 transition-transform duration-700 group-hover:scale-105 opacity-80" />
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay" />
                  <div className="absolute left-6 top-6 z-10 flex gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold shadow-sm backdrop-blur-md bg-emerald-500/90 text-white uppercase tracking-wide">
                      Tezkor
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-14 lg:order-1">
                  <h3 className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white mb-6">Telegram Botlar</h3>
                  <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                    Sizning biznesingiz uchun mijozlardan buyurtma qabul qiladigan, to'lovlarni integratsiya qila oladigan zamonaviy sun'iy intellektga asoslangan botlar.
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                    {["Onlayn do'kon va katalog", "Click/Payme to'lov integratsiyasi", "Admin panel orqali boshqaruv"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 font-medium">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-800">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-neutral-500">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">Muddati</span>
                        <span className="font-semibold text-neutral-900 dark:text-white">3 - 10 Kun</span>
                      </div>
                    </div>
                    <div className="ml-auto w-full sm:w-auto">
                      <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold transition-colors">
                        Batafsil <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


    </div>
  );
}
