"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "uz" | "ru";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  uz: {
    // Nav
    "nav.services": "Xizmatlar",
    "nav.portfolio": "Portfolio",
    "nav.calculator": "Kalkulyator",
    "nav.pricing": "Tariflar",
    "nav.team": "Jamoa",
    "nav.tech": "Texnologiyalar",
    "nav.location": "Manzil",
    "nav.consultation": "Konsultatsiya",
    "nav.admin": "Admin Panel",

    // Hero
    "hero.badge": "SIRDARYO №1 IT STUDIO — BLUEPRINT VA AI TIZIMLAR",
    "hero.title1": "Biznesingiz uchun",
    "hero.title2": "Muhandislik aniqligidagi",
    "hero.title3": "Raqamli Yechimlar",
    "hero.desc": "Biz shunchaki veb-sayt emas, balki biznesingizni 24/7 avtomatlashtiruvchi, Telegram botlar, AI agentlar va ERP/CRM tizimlardan iborat yaxlit muhandislik ekotizimini barpo etamiz.",
    "hero.ctaPrimary": "Loyihangizni Muhokama Qilish",
    "hero.ctaSecondary": "Dasturlash Kalkulyatori",
    "hero.sheetTag": "CHIZMA: RAQAMLY-2026",
    "hero.coord": "GULISTON 40.4894° N, 68.7833° E",

    // Stats
    "stats.projects": "Amalga oshirilgan loyihalar",
    "stats.clients": "Mamnun biznes egalari",
    "stats.experience": "Yillik muhandislik tajribasi",
    "stats.uptime": "Tizimlar barqarorligi",

    // Calculator
    "calc.title": "Interaktiv Rivojlanish Kalkulyatori",
    "calc.subtitle": "Biznesingiz turini va hajmini tanlang, avtomatlashtirish orqali oyiga qancha vaqt va mablag' tejashingizni hisoblang.",
    "calc.sectorLabel": "1. Faoliyat Sohasini Tanlang:",
    "calc.scaleLabel": "2. Biznes Hajmini Tanlang:",
    "calc.secEcommerce": "E-Commerce / Onlayn Do'kon",
    "calc.secRestaurant": "Restoran / Kafe",
    "calc.secService": "Xizmat Ko'rsatish / Klinika",
    "calc.secWarehouse": "Omborxona / Logistika",
    "calc.scaleSmall": "Kichik (1-5 xodim)",
    "calc.scaleMedium": "O'rta (6-25 xodim)",
    "calc.scaleLarge": "Yirik (25+ xodim)",
    "calc.resultHours": "Oyiga tejaladigan ish soati",
    "calc.resultRevenue": "Taxminiy daromad o'sishi",
    "calc.resultCost": "Operatsion xarajatlar tejamkorligi",
    "calc.cta": "Ushbu Yechimni Biznesga Tatbiq Etish",

    // Services
    "services.title": "Muhandislik Xizmatlarimiz",
    "services.subtitle": "Har bir loyiha individual arxitektura va aniq texnik topshiriq (blueprint) asosida quriladi.",
    "services.s1Title": "Veb-sayt va Veb-Ilovalar",
    "services.s1Desc": "SEO optimizatsiyalangan, Next.js va React arxitekturasida qurilgan ultra-tezkor korporativ saytlar hamda portal yechimlar.",
    "services.s2Title": "AI va Avtomatlashtirilgan Botlar",
    "services.s2Desc": "Mijozlarni 24/7 qabul qiluvchi, CRM bilan integratsiyalashgan AI chatbotlar va Telegram ekotizimlari.",
    "services.s3Title": "CRM & ERP Boshqaruv Tizimlari",
    "services.s3Desc": "Moliya, ombor va xodimlarni yagona panel orqali nazorat qiluvchi avtomatlashtirilgan boshqaruv tizimlari.",
    "services.s4Title": "UI/UX va Blueprint Prototiplash",
    "services.s4Desc": "Mijoz psixologiyasi va texnik arxitekturasini inobatga olgan holda tayyorlangan prototip va foydalanuvchi interfeyslari.",

    // Case Studies / Portfolio
    "portfolio.title": "Amalga Oshirilgan Loyihalar (Case Studies)",
    "portfolio.subtitle": "Har bir loyiha ortida aniq biznes natijasi va muhandislik yechimi bor.",
    "portfolio.btnDetails": "Batafsil Case-Study",
    "portfolio.btnLive": "Jonli Demo",

    // Pricing
    "pricing.title": "Shaffof Tarif Paketlari",
    "pricing.subtitle": "Yashirin to'lovlarsiz, har bir bosqich texnik shartnoma bilan kafolatlanadi.",
    "pricing.popular": "TAVSIYA ETILADI",
    "pricing.t1Name": "Boshlang'ich (Start)",
    "pricing.t1Desc": "Kichik bizneslar va startaplar uchun tezkor start yechimi.",
    "pricing.t2Name": "Biznes (Business)",
    "pricing.t2Desc": "Kengayayotgan kompaniyalar uchun to'liq avtomatlashtirilgan tizim.",
    "pricing.t3Name": "Enterprise (Custom)",
    "pricing.t3Desc": "Yirik tashkilotlar uchun individual AI va ERP arxitekturasi.",
    "pricing.orderBtn": "Ushbu Tarifni Tanlash",

    // Team
    "team.title": "Bizning Muhandislar va Arxitektorlar",
    "team.subtitle": "Sirdaryoning eng yetakchi dasturchilari va dizaynerlari tajribasi sizning xizmatingizda.",

    // Tech Stack
    "tech.title": "Vizual Texnologiyalar Steki",
    "tech.subtitle": "Dunyodagi eng zamonaviy, barqaror va xavfsiz texnologiyalar kafolati.",
    "tech.all": "Barchasi",
    "tech.frontend": "Frontend",
    "tech.backend": "Backend",
    "tech.ai": "AI & Bot",
    "tech.db": "Database & DevOps",

    // Live CRM Widget
    "crm.title": "Interaktiv Live CRM Simulation",
    "crm.subtitle": "Saytdan arizalar qanday qilib NestJS API va Telegram Bot orqali real vaqtda kelishini sinab ko'ring.",
    "crm.step1": "1. Saytdan Forma Submit",
    "crm.step2": "2. NestJS API & Validation",
    "crm.step3": "3. Telegram Bot Bildirishnomasi",
    "crm.step4": "4. Admin CRM statusi update",
    "crm.testBtn": "Simulyatsiyani Boshlash",

    // Location
    "location.title": "Ofis va Joylashuv",
    "location.subtitle": "Sirdaryo viloyati, Guliston shahridagi zamonaviy 'IT Live' binosida joylashganmiz.",
    "location.address": "Guliston sh., IT Live binosi, 2-qavat",
    "location.workHours": "Dushanba - Yakshanba: 09:00 - 22:00",

    // Consultation Modal / Form
    "form.title": "Konsultatsiyaga Yozilish",
    "form.subtitle": "Formani to'ldiring va mutaxassisimiz 15 daqiqa ichida aloqaga chiqadi.",
    "form.name": "Ismingiz",
    "form.phone": "Telefon Raqamingiz",
    "form.message": "Loyiha haqida qisqacha",
    "form.submit": "Bepul Konsultatsiya Olish",
    "form.sending": "Yuborilmoqda...",
    "form.success": "Rahmat! So'rovingiz qabul qilindi va Telegram botga yuborildi.",
    "form.error": "Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.",

    // Footer
    "footer.rights": "Barcha huquqlar himoyalangan. Raqamly IT Studio.",
    "footer.address": "Sirdaryo viloyati, Guliston sh., IT Live",
  },
  ru: {
    // Nav
    "nav.services": "Услуги",
    "nav.portfolio": "Портфолио",
    "nav.calculator": "Калькулятор",
    "nav.pricing": "Тарифы",
    "nav.team": "Команда",
    "nav.tech": "Технологии",
    "nav.location": "Локация",
    "nav.consultation": "Консультация",
    "nav.admin": "Админ Панель",

    // Hero
    "hero.badge": "СЫРДАРЬЯ №1 IT СТУДИЯ — BLUEPRINT И AI СИСТЕМЫ",
    "hero.title1": "Инженерно-точные",
    "hero.title2": "Цифровые Решения",
    "hero.title3": "Для Вашего Бизнеса",
    "hero.desc": "Мы создаем не просто сайты, а целостную инженерную экосистему: веб-платформы, Telegram-ботов, AI-агентов и ERP/CRM-системы с автоматизацией 24/7.",
    "hero.ctaPrimary": "Обсудить Проект",
    "hero.ctaSecondary": "Калькулятор Проекта",
    "hero.sheetTag": "ЧЕРТЕЖ: RAQAMLY-2026",
    "hero.coord": "ГУЛИСТАН 40.4894° N, 68.7833° E",

    // Stats
    "stats.projects": "Завершенных проектов",
    "stats.clients": "Довольных клиентов",
    "stats.experience": "Лет инженерного опыта",
    "stats.uptime": "Стабильность систем",

    // Calculator
    "calc.title": "Интерактивный Калькулятор Эффективности",
    "calc.subtitle": "Выберите сферу и масштаб бизнеса, чтобы рассчитать экономию времени и бюджета при автоматизации.",
    "calc.sectorLabel": "1. Выберите Сферу Деятельности:",
    "calc.scaleLabel": "2. Выберите Масштаб Бизнеса:",
    "calc.secEcommerce": "E-Commerce / Интернет-магазин",
    "calc.secRestaurant": "Ресторан / Кафе",
    "calc.secService": "Услуги / Клиника",
    "calc.secWarehouse": "Склад / Логистика",
    "calc.scaleSmall": "Малый (1-5 сотрудников)",
    "calc.scaleMedium": "Средний (6-25 сотрудников)",
    "calc.scaleLarge": "Крупный (25+ сотрудников)",
    "calc.resultHours": "Сэкономлено часов в месяц",
    "calc.resultRevenue": "Ориентировочный рост выручки",
    "calc.resultCost": "Сокращение операционных расходов",
    "calc.cta": "Внедрить Данное Решение",

    // Services
    "services.title": "Наши Инженерные Услуги",
    "services.subtitle": "Каждый проект разрабатывается на основе индивидуальной архитектуры и строгого технического задания (blueprint).",
    "services.s1Title": "Веб-сайты и Веб-приложения",
    "services.s1Desc": "Высокоскоростные корпоративные сайты и порталы с SEO-оптимизацией на базе Next.js и React.",
    "services.s2Title": "AI и Автоматизированные Боты",
    "services.s2Desc": "Telegram-боты с искусственным интеллектом и CRM-интеграцией для приема заявок 24/7.",
    "services.s3Title": "Системы Управления CRM & ERP",
    "services.s3Desc": "Автоматизированные панели для полного контроля финансов, склада и персонала.",
    "services.s4Title": "UI/UX и Прототипирование Blueprint",
    "services.s4Desc": "Интерфейсы и прототипы с учетом психологии пользователей и инженерной архитектуры.",

    // Case Studies / Portfolio
    "portfolio.title": "Реализованные Проекты (Case Studies)",
    "portfolio.subtitle": "За каждым проектом стоит измеримый бизнес-результат и инженерное решение.",
    "portfolio.btnDetails": "Подробный Case-Study",
    "portfolio.btnLive": "Демо Вживую",

    // Pricing
    "pricing.title": "Прозрачные Тарифы",
    "pricing.subtitle": "Без скрытых платежей, каждый этап фиксируется в техническом договоре.",
    "pricing.popular": "РЕКОМЕНДУЕМ",
    "pricing.t1Name": "Старт (Start)",
    "pricing.t1Desc": "Быстрый запуск для малого бизнеса и стартапов.",
    "pricing.t2Name": "Бизнес (Business)",
    "pricing.t2Desc": "Полная автоматизация для растущих компаний.",
    "pricing.t3Name": "Enterprise (Custom)",
    "pricing.t3Desc": "Индивидуальная архитектура AI и ERP для крупных организаций.",
    "pricing.orderBtn": "Выбрать Этот Тариф",

    // Team
    "team.title": "Наши Инженеры и Архитекторы",
    "team.subtitle": "Опыт ведущих разработчиков и дизайнеров Сырдарьи к вашим услугам.",

    // Tech Stack
    "tech.title": "Визуальный Стек Технологий",
    "tech.subtitle": "Гарантия современных, надежных и безопасных технологий.",
    "tech.all": "Все",
    "tech.frontend": "Frontend",
    "tech.backend": "Backend",
    "tech.ai": "AI & Bot",
    "tech.db": "Database & DevOps",

    // Live CRM Widget
    "crm.title": "Интерактивная Симуляция Live CRM",
    "crm.subtitle": "Посмотрите, как заявки с сайта поступают в режиме реального времени через NestJS API и Telegram Bot.",
    "crm.step1": "1. Отправка формы с сайта",
    "crm.step2": "2. Валидация в NestJS API",
    "crm.step3": "3. Уведомление в Telegram Bot",
    "crm.step4": "4. Обновление статуса в CRM",
    "crm.testBtn": "Запустить Симуляцию",

    // Location
    "location.title": "Офис и Локация",
    "location.subtitle": "Мы находимся в современном здании 'IT Live' в городе Гулистан, Сырдарьинская область.",
    "location.address": "г. Гулистан, здание IT Live, 2-этаж",
    "location.workHours": "Понедельник - Воскресенье: 09:00 - 22:00",

    // Consultation Modal / Form
    "form.title": "Запись на Консультацию",
    "form.subtitle": "Заполните форму, и наш специалист свяжется с вами в течение 15 минут.",
    "form.name": "Ваше Имя",
    "form.phone": "Номер Телефона",
    "form.message": "Кратко о проекте",
    "form.submit": "Получить Консультацию",
    "form.sending": "Отправка...",
    "form.success": "Спасибо! Ваша заявка принята и отправлена в Telegram бот.",
    "form.error": "Произошла ошибка. Пожалуйста, попробуйте еще раз.",

    // Footer
    "footer.rights": "Все права защищены. Raqamly IT Studio.",
    "footer.address": "Сырдарьинская область, г. Гулистан, IT Live",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "uz",
  setLang: () => {},
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>("uz");

  useEffect(() => {
    const saved = localStorage.getItem("raqamly_lang") as Language;
    if (saved && (saved === "uz" || saved === "ru")) {
      setLang(saved);
    }
  }, []);

  const handleSetLang = (l: Language) => {
    setLang(l);
    localStorage.setItem("raqamly_lang", l);
  };

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations["uz"]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
