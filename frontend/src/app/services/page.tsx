'use client';
import { motion } from 'framer-motion';
import { MonitorSmartphone, PenTool, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Veb va Mobil Ilovalar',
    description: 'Biznesingiz uchun yuqori tezlikda ishlovchi, zamonaviy va xavfsiz dasturiy ta\'minotlar ishlab chiqamiz.',
    icon: <MonitorSmartphone className="w-10 h-10 text-blue-500" />,
    delay: 0.1,
  },
  {
    title: 'UI/UX Dizayn',
    description: 'Foydalanuvchilar sevib ishlatadigan, interaktiv va ko\'zni qamashtiradigan premium dizayn yechimlari.',
    icon: <PenTool className="w-10 h-10 text-blue-500" />,
    delay: 0.2,
  },
  {
    title: 'SEO va Raqamli Marketing',
    description: 'Saytingizni Google qidiruvlarida eng yuqoriga olib chiqish va yangi mijozlarni jalb qilish kafolati.',
    icon: <TrendingUp className="w-10 h-10 text-blue-500" />,
    delay: 0.3,
  },
  {
    title: 'IT Konsalting va Xavfsizlik',
    description: 'Kompaniyangiz arxitekturasini to\'g\'ri qurish, ma\'lumotlar xavfsizligini ta\'minlash bo\'yicha ekspert maslahatlari.',
    icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
    delay: 0.4,
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 to-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-6 tracking-tight"
          >
            Sizning biznesingiz uchun <br className="hidden md:block" />
            <span className="text-blue-600">Premium Xizmatlar</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-blue-800/70"
          >
            Biz nafaqat kod yozamiz, balki sizning g'oyangizni daromad keltiradigan raqamli mahsulotga aylantiramiz.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: service.delay, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-white p-8 rounded-3xl shadow-xl shadow-blue-900/5 border border-blue-100/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-4">{service.title}</h3>
              <p className="text-blue-800/70 leading-relaxed mb-8">
                {service.description}
              </p>
              <Link 
                href="/?consultation=true" 
                className="inline-flex items-center font-semibold text-blue-600 group-hover:text-blue-700 transition-colors"
              >
                Batafsil ma'lumot 
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-32 max-w-4xl mx-auto bg-gradient-to-br from-blue-950 to-blue-900 rounded-[3rem] p-12 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-30 -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500 rounded-full blur-[100px] opacity-30 -ml-20 -mb-20"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
            Loyihangizni boshlashga tayyormisiz?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Bepul konsultatsiya oling va ekspertlarimiz sizga qanday qilib eng maqbul yechimni topishda yordam berishini bilib oling.
          </p>
          <Link 
            href="/?consultation=true"
            className="inline-block bg-white text-blue-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 hover:scale-105 transition-all relative z-10 shadow-lg"
          >
            Konsultatsiyaga yozilish
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
