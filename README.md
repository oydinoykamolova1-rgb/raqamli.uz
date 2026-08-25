# Raqamly IT Kompaniyasi

Ushbu loyiha **Raqamly** IT kompaniyasi uchun ishlab chiqilgan to'liq (full-stack) veb-sayt va avtomatlashtirilgan Telegram bot tizimidir. Sayt orqali mijozlar konsultatsiyaga yozilishlari mumkin va bu so'rovlar bevosita adminning Telegram raqamiga yuboriladi.

## Texnologiyalar
- **Frontend:** Next.js, React, TailwindCSS, Framer Motion
- **Backend:** NestJS, TypeScript, Prisma ORM
- **Ma'lumotlar Bazasi:** PostgreSQL
- **Bot:** Telegraf (Telegram Bot API)

## Loyiha Tuzilishi
- `/frontend` - Next.js foydalanuvchi interfeysi
- `/backend` - NestJS server va Telegram bot

## Lokal Ishga Tushirish (Development)

### Backend
1. `backend` papkasiga kiring: `cd backend`
2. Kutubxonalarni o'rnating: `npm install`
3. `.env` faylini uning ichiga yarating va o'zgaruvchilarni kiriting (DATABASE_URL, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID)
4. Bazani ishga tushiring: `npx prisma db push` yoki `npx prisma generate`
5. Serverni ishga tushiring: `npm run start:dev`

### Frontend
1. `frontend` papkasiga kiring: `cd frontend`
2. Kutubxonalarni o'rnating: `npm install`
3. `.env` faylini yarating va backend API manzilini yozing: `NEXT_PUBLIC_API_URL=http://localhost:4000`
4. Saytni ishga tushiring: `npm run dev`

Loyiha frontend qismi `http://localhost:3000` da ishlaydi.

## Serverga Joylashtirish (Deployment)
Ushbu loyiha **Vercel** (Frontend) va **Render** (Backend) platformalariga joylashtirish uchun to'liq moslashtirilgan. Baza uchun **Supabase** (PostgreSQL) ishlatish tavsiya etiladi.
