# 🚀 Raqamly IT Kompaniyasi Platformasi

Ushbu loyiha **Raqamly** IT kompaniyasi uchun ishlab chiqilgan zamonaviy, interaktiv full-stack veb-sayt va avtomatlashtirilgan Telegram bot avtomatizatsiyasidir. Sayt orqali mijozlar IT xizmatlar bilan tanishishlari, interaktiv kanallar/diagrammalarni ko'rishlari va konsultatsiyaga yozilishlari mumkin. Barcha ariza va so'rovlar zudlik bilan adminning Telegram chatiga va kanaliga xabar shaklida yuboriladi.

---

## ✨ Imkoniyatlar va Xususiyatlar

- **🎨 Zamonaviy UI/UX Dizayn:** Dark mode, Glassmorphism effekti, yorqin va kelajak stolidagi (Futuristic/Vibrant) animatsiyalar (Framer Motion, Lucide Icons).
- **📱 Avtomatlashtirilgan Telegram Bot:** Saytdan yuborilgan barcha konsultatsiya so'rovlarini zudlik bilan qabul qiladi va belgilangan Admin Telegram chatiga/kanaliga jo'natadi.
- **💼 Xizmatlar Sahifasi va Konsultatsiya Modali:** Veb-sayt yaratish, mobil ilovalar, CRM va AI yechimlari bo'yicha tezkor ariza topshirish tizimi.
- **⚡ Admin Panel:** Kelgan konsultatsiyalarni ko'rish va boshqarish imkoniyati.
- **📐 Moslashuvchanlik (Responsive):** Mobil qurilmalar, planshetlar va kompyuterlar uchun to'liq moslashtirilgan.

---

## 🛠 Texnologiyalar Steki

### Frontend
- **Framework:** Next.js 15 (App Router)
- **Kutubxonalar:** React 19, Framer Motion, Lucide React
- **Stillashtirish:** Tailwind CSS

### Backend
- **Framework:** NestJS 11
- **ORM:** Prisma ORM
- **Telegram Bot:** Telegraf (Telegram Bot API)
- **Ma'lumotlar Bazasi:** SQLite (Local Dev) / PostgreSQL (Production)

---

## 📁 Loyiha Tuzilishi

```text
Raqamly/
├── frontend/                 # Next.js foydalanuvchi interfeysi
│   ├── src/
│   │   ├── app/              # Next.js App Router sahifalari
│   │   └── components/       # UI komponentlar (Navbar, Footer, Modal, va h.k.)
│   └── public/               # Statik me'moriy va rasm fayllari
│
├── backend/                  # NestJS API Server va Telegram Bot
│   ├── src/
│   │   ├── telegram/         # Telegram bot servisi va komandalar
│   │   ├── consultation/     # Konsultatsiya modullari va controllerlar
│   │   └── prisma/           # Prisma service va database sozlamalari
│   └── prisma/               # Database schema (schema.prisma) va local db
└── README.md
```

---

## ⚙️ Ishga Tushirish Yo'riqnomasi

### 1. Repository-ni klonlash
```bash
git clone https://github.com/oydinoykamolova1-rgb/raqamli.uz.git
cd raqamli.uz
```

### 2. Backend-ni sozlash va ishga tushirish
```bash
cd backend
npm install
```

`backend/.env` faylini yarating va quyidagi ko'rinishda to'ldiring:
```env
DATABASE_URL="file:./dev.db"
TELEGRAM_BOT_TOKEN="YOUR_TELEGRAM_BOT_TOKEN"
TELEGRAM_CHAT_ID="YOUR_TELEGRAM_CHAT_ID"
PORT=4000
```

Prisma ma'lumotlar bazasini tayyorlash:
```bash
npx prisma generate
npx prisma db push
```

Backend serverni ishga tushirish:
```bash
npm run start:dev
```
*Backend server `http://localhost:4000` manzilida ishga tushadi.*

---

### 3. Frontend-ni sozlash va ishga tushirish
Yangi terminal oynasida:
```bash
cd frontend
npm install
```

`frontend/.env.local` faylini yarating:
```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

Frontend loyihasini ishga tushirish:
```bash
npm run dev
```
*Foydalanuvchi interfeysi `http://localhost:3000` manzilida ochiladi.*

---

## 🌐 Serverga Joylashtirish (Deployment)

- **Frontend:** [Vercel](https://vercel.com) platformasiga joylashtirish tavsiya etiladi.
- **Backend & Bot:** [Render](https://render.com) yoki VPS (Railway, DigitalOcean, Ubuntu server) platformalariga moslashtirilgan.
- **Database:** Production uchun **Supabase** (PostgreSQL) yoki **Neon.tech** ma'lumotlar bazasidan foydalanish mumkin.
