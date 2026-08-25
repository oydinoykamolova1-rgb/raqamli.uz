'use client';
import { motion } from 'framer-motion';
import { MonitorSmartphone, PenTool, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';
import { ConsultationButton } from '@/components/ConsultationButton';

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
    <div className="min-h-screen bg-neutral-50/50 dark:bg-neutral-950 pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white mb-6 tracking-tight"
          >
            Sizning biznesingiz uchun <br className="hidden md:block" />
            <span className="text-primary">Premium Xizmatlar</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-600 dark:text-neutral-400"
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
              className="group bg-white dark:bg-neutral-900 p-8 rounded-3xl shadow-xl shadow-black/5 dark:shadow-primary/5 border border-neutral-100 dark:border-neutral-800 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">{service.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                {service.description}
              </p>
              <ConsultationButton 
                text="Batafsil ma'lumot" 
                className="bg-transparent text-primary hover:text-primary-hover px-0 font-semibold h-auto"
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-32 max-w-4xl mx-auto bg-gradient-to-br from-neutral-900 to-black dark:from-primary/20 dark:to-primary/5 rounded-[3rem] p-12 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-[100px] -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/30 rounded-full blur-[100px] -ml-20 -mb-20"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10 text-white">
            Loyihangizni boshlashga tayyormisiz?
          </h2>
          <p className="text-neutral-300 dark:text-neutral-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Bepul konsultatsiya oling va ekspertlarimiz sizga qanday qilib eng maqbul yechimni topishda yordam berishini bilib oling.
          </p>
          <div className="relative z-10 flex justify-center">
            <ConsultationButton 
              text="Konsultatsiyaga yozilish"
              className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-hover shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
