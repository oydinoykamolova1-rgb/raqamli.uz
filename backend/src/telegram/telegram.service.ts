import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Telegraf, Markup } from 'telegraf';
import { PrismaService } from '../prisma.service';

const SITE_URL = process.env.SITE_URL || 'https://raqamly.vercel.app';

@Injectable()
export class TelegramService implements OnModuleInit {
  private readonly logger = new Logger(TelegramService.name);
  private bot: Telegraf;

  constructor(private prisma: PrismaService) { }

  onModuleInit() {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    if (!token || token === 'YOUR_BOT_TOKEN') {
      this.logger.warn('Telegram Bot Token topilmadi. Bot ishga tushirilmadi.');
      return;
    }

    try {
      this.botniIshgaTushirish(token);
    } catch (err) {
      this.logger.error('Botni ishga tushirishda xatolik:', err);
    }
  }

  private botniIshgaTushirish(token: string) {
    this.bot = new Telegraf(token);

    // /start buyrug'i
    this.bot.start((ctx) => {
      ctx.reply(
        `Assalomu alaykum, <b>${ctx.from.first_name}</b>! 👋\n\n` +
        `<b>🚀 Raqamly IT Kompaniyasi</b>ga xush kelibsiz!\n\n` +
        `Biz sizga quyidagi xizmatlarni taqdim etamiz:\n\n` +
        `🌐 Veb-saytlar va Landing Page\n` +
        `🤖 Telegram Botlar\n` +
        `📊 CRM va ERP tizimlar\n` +
        `📱 Mobil Ilovalar\n` +
        `🎨 UI/UX Dizayn\n\n` +
        `Qanday yordam bera olamiz? Quyidagi tugmalardan birini tanlang 👇`,
        {
          parse_mode: 'HTML',
          ...Markup.keyboard([
            ['📂 Xizmatlar', '📞 Konsultatsiya'],
            ['💼 Portfolio', '📍 Aloqa'],
            ['🌍 Veb-saytga o\'tish']
          ]).resize()
        }
      );
    });

    // /help buyrug'i
    this.bot.help((ctx) => {
      ctx.reply(
        `<b>📖 Bot buyruqlari:</b>\n\n` +
        `/start — Botni qayta ishga tushirish\n` +
        `/help — Yordam\n` +
        `/services — Xizmatlar ro'yxati\n` +
        `/contact — Aloqa ma'lumotlari\n\n` +
        `Yoki pastdagi tugmalardan foydalaning! 👇`,
        { parse_mode: 'HTML' }
      );
    });

    // /services buyrug'i
    this.bot.command('services', (ctx) => {
      this.xizmatlarniKorsatish(ctx);
    });

    // /contact buyrug'i
    this.bot.command('contact', (ctx) => {
      this.aloqaniKorsatish(ctx);
    });

    // 📂 Xizmatlar
    this.bot.hears('📂 Xizmatlar', (ctx) => {
      this.xizmatlarniKorsatish(ctx);
    });

    // 💼 Portfolio
    this.bot.hears('💼 Portfolio', (ctx) => {
      ctx.reply(
        `<b>🏆 Bizning eng yaxshi ishlar:</b>\n\n` +
        `✅ <b>Savdo Boshqaruv Tizimi</b> — CRM\n` +
        `    └ To'liq avtomatlashtirilgan savdo jarayoni\n\n` +
        `✅ <b>E-Commerce Telegram Bot</b>\n` +
        `    └ Onlayn do'kon + to'lov integratsiyasi\n\n` +
        `✅ <b>Korporativ Landing Page</b>\n` +
        `    └ Premium dizayn va SEO optimizatsiya\n\n` +
        `✅ <b>Ombor Hisobi Tizimi</b> — ERP\n` +
        `    └ Real-time monitoring va hisobot\n\n` +
        `📁 Batafsil ko'rish uchun saytimizga tashrif buyuring!`,
        {
          parse_mode: 'HTML',
          ...Markup.inlineKeyboard([
            [Markup.button.url('📁 Portfolio Ko\'rish', `${SITE_URL}/#portfolio`)]
          ])
        }
      );
    });

    // 📍 Aloqa
    this.bot.hears('📍 Aloqa', (ctx) => {
      this.aloqaniKorsatish(ctx);
    });

    // 🌍 Veb-saytga o'tish
    this.bot.hears('🌍 Veb-saytga o\'tish', (ctx) => {
      ctx.reply(
        '🌐 Marhamat, saytimizga tashrif buyuring!',
        Markup.inlineKeyboard([
          [Markup.button.url('🚀 Raqamly.uz', SITE_URL)]
        ])
      );
    });

    // 📞 Konsultatsiya
    this.bot.hears('📞 Konsultatsiya', (ctx) => {
      ctx.reply(
        `<b>📞 Bepul konsultatsiya olish uchun:</b>\n\n` +
        `Iltimos, quyidagi formatda ma'lumotlaringizni yuboring:\n\n` +
        `<code>Ismingiz: ...\nTelefon: +998 XX XXX XX XX\nLoyiha haqida: ...</code>\n\n` +
        `Yoki faqat telefon raqamingizni yuboring — biz siz bilan 24 soat ichida bog'lanamiz! 📲`,
        { parse_mode: 'HTML' }
      );
    });

    // Oddiy matn xabarlarni qabul qilish (konsultatsiya so'rovlari)
    this.bot.on('text', async (ctx) => {
      const text = ctx.message.text;
      const menuButtons = ['📂 Xizmatlar', '📞 Konsultatsiya', '💼 Portfolio', '📍 Aloqa', '🌍 Veb-saytga o\'tish'];

      if (!text || text.startsWith('/') || menuButtons.includes(text)) return;

      try {
        const userName = ctx.from.username ? `@${ctx.from.username}` : ctx.from.first_name;
        const userId = ctx.from.id;

        // Matndan ism va telefon ajratish
        let extractedName = userName;
        let extractedPhone = '';

        const nameMatch = text.match(/[Ii]sm(?:ingiz)?[:\s]+(.+)/);
        if (nameMatch) extractedName = nameMatch[1].trim();

        const phoneMatch = text.match(/(?:\+?998|tel[:\s])\s*\d[\d\s-]{7,}/i);
        if (phoneMatch) extractedPhone = phoneMatch[0].trim();

        // Agar faqat raqam yuborilgan bo'lsa
        if (!extractedPhone && /^\+?\d[\d\s-]{7,}$/.test(text.trim())) {
          extractedPhone = text.trim();
        }

        const consultation = await this.prisma.consultation.create({
          data: {
            name: extractedName,
            phone: extractedPhone,
            date: new Date().toISOString().split('T')[0],
            status: 'PENDING',
          },
        });

        // Adminga xabar yuborish
        const chatId = process.env.TELEGRAM_CHAT_ID;
        if (chatId) {
          const adminMsg =
            `🔔 <b>Yangi Konsultatsiya So'rovi!</b>\n\n` +
            `👤 Foydalanuvchi: ${userName} (ID: ${userId})\n` +
            `📝 Ism: ${extractedName}\n` +
            `📞 Telefon: ${extractedPhone || 'Kiritilmagan'}\n` +
            `💬 Xabar: ${text}\n` +
            `📅 Sana: ${new Date().toLocaleDateString('uz-UZ')}\n` +
            `🆔 So'rov ID: #${consultation.id}\n\n` +
            `Iltimos, mijoz bilan tez orada bog'laning!`;

          await this.bot.telegram.sendMessage(chatId, adminMsg, { parse_mode: 'HTML' });
        }

        ctx.reply(
          `✅ <b>So'rovingiz qabul qilindi!</b>\n\n` +
          `Sizning so'rovingiz (ID: #${consultation.id}) muvaffaqiyatli yuborildi.\n` +
          `Mutaxassislarimiz 24 soat ichida siz bilan bog'lanadi! 📲\n\n` +
          `Boshqa savollaringiz bo'lsa, /start bosing.`,
          { parse_mode: 'HTML' }
        );

        this.logger.log(`Telegram orqali yangi konsultatsiya #${consultation.id}: ${userName}`);
      } catch (error) {
        this.logger.error('Konsultatsiya saqlashda xatolik:', error);
        ctx.reply('❌ Xatolik yuz berdi. Iltimos, keyinroq urinib ko\'ring yoki to\'g\'ridan-to\'g\'ri +998 90 123 45 67 raqamiga qo\'ng\'iroq qiling.');
      }
    });

    // Error handling
    this.bot.catch((err: any) => {
      this.logger.error('Telegram Bot xatoligi:', err);
    });

    this.bot.launch();
    this.logger.log('✅ Telegram Bot muvaffaqiyatli ishga tushdi!');

    process.once('SIGINT', () => this.bot.stop('SIGINT'));
    process.once('SIGTERM', () => this.bot.stop('SIGTERM'));
  }

  private xizmatlarniKorsatish(ctx: any) {
    ctx.reply(
      `<b>🛠 Bizning xizmatlar:</b>\n\n` +
      `1️⃣ <b>CRM va ERP Tizimlar</b>\n` +
      `    📋 Biznesni to'liq raqamlashtirish\n` +
      `    ⏱ Muddat: 1-3 oy\n\n` +
      `2️⃣ <b>Telegram Botlar</b>\n` +
      `    🤖 AI-powered onlayn do'kon va botlar\n` +
      `    ⏱ Muddat: 3-10 kun\n\n` +
      `3️⃣ <b>Premium Veb-saytlar</b>\n` +
      `    🌐 Landing page va korporativ saytlar\n` +
      `    ⏱ Muddat: 5-14 kun\n\n` +
      `4️⃣ <b>UI/UX Dizayn</b>\n` +
      `    🎨 Premium interfeys dizayni\n` +
      `    ⏱ Muddat: 3-7 kun\n\n` +
      `5️⃣ <b>IT Konsalting</b>\n` +
      `    💡 Biznesingiz uchun eng to'g'ri yechim\n\n` +
      `📞 Konsultatsiya olish uchun tugmasini bosing!`,
      {
        parse_mode: 'HTML',
        ...Markup.inlineKeyboard([
          [Markup.button.url('🌐 Saytda Ko\'rish', `${SITE_URL}/#services`)],
          [Markup.button.url('📞 Bog\'lanish', `${SITE_URL}/#contact`)]
        ])
      }
    );
  }

  private aloqaniKorsatish(ctx: any) {
    ctx.reply(
      `<b>📍 Biz bilan bog'lanish:</b>\n\n` +
      `🏢 Manzil: Sirdaryo viloyati, Guliston sh.\n` +
      `📞 Telefon: +998 90 123 45 67\n` +
      `✉️ Email: info@raqamly.uz\n` +
      `🤖 Bot: @raqamli_uzbot\n\n` +
      `⏰ Ish vaqti: Du-Sha 09:00 — 18:00\n\n` +
      `Quyidagi tugma orqali konsultatsiyaga yoziling:`,
      {
        parse_mode: 'HTML',
        ...Markup.inlineKeyboard([
          [Markup.button.url('🌐 Saytga O\'tish', SITE_URL)],
          [Markup.button.url('📱 Telegram Kanal', 'https://t.me/raqamli_uz')]
        ])
      }
    );
  }
}
