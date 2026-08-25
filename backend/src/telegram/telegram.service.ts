import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Telegraf, Markup } from 'telegraf';
import { PrismaService } from '../prisma.service';

const SITE_URL = process.env.SITE_URL || 'https://raqamly.vercel.app';

@Injectable()
export class TelegramService implements OnModuleInit {
  private readonly logger = new Logger(TelegramService.name);
  private bot: Telegraf;

  constructor(private prisma: PrismaService) {}

  onModuleInit() {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    if (!token || token === 'YOUR_BOT_TOKEN') {
      this.logger.warn('Telegram Bot Token topilmadi. Bot ishga tushirilmadi.');
      return;
    }

    try {
      this.botiIshgaTushirish(token);
    } catch (err) {
      this.logger.error('Botni ishga tushirishda xatolik:', err);
    }
  }

  private botiIshgaTushirish(token: string) {
    this.bot = new Telegraf(token);

    // /start buyrug'i
    this.bot.start((ctx) => {
      ctx.reply(
        `Assalomu alaykum, <b>${ctx.from.first_name}</b>! 👋\n\n` +
        `<b>Raqamly IT Kompaniyasi</b>ga xush kelibsiz! 🚀\n\n` +
        `Biz sizga quyidagi xizmatlarni taqdim etamiz:\n` +
        `• 🌐 Veb-saytlar va Landing Page\n` +
        `• 🤖 Telegram Botlar\n` +
        `• 📊 CRM va ERP tizimlar\n` +
        `• 📱 Mobil Ilovalar\n\n` +
        `Qanday yordam bera olamiz?`,
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

    // 📂 Xizmatlar
    this.bot.hears('📂 Xizmatlar', (ctx) => {
      ctx.reply(
        `<b>Bizning xizmatlar:</b>\n\n` +
        `1️⃣ <b>CRM va ERP Tizimlar</b>\n   Biznesni to'liq raqamlashtirish (1-3 oy)\n\n` +
        `2️⃣ <b>Telegram Botlar</b>\n   AI-powered onlayn do'kon va botlar (3-10 kun)\n\n` +
        `3️⃣ <b>Premium Veb-saytlar</b>\n   Landing page va korporativ saytlar (5-14 kun)\n\n` +
        `4️⃣ <b>IT Konsalting</b>\n   Biznesingiz uchun eng to'g'ri yechim topamiz\n\n` +
        `Konsultatsiya olish uchun 📞 tugmasini bosing!`,
        {
          parse_mode: 'HTML',
          ...Markup.inlineKeyboard([
            [Markup.button.url('🌐 Saytimizda Ko\'rish', `${SITE_URL}/services`)]
          ])
        }
      );
    });

    // 💼 Portfolio
    this.bot.hears('💼 Portfolio', (ctx) => {
      ctx.reply(
        `<b>Bizning eng yaxshi ishlar:</b>\n\n` +
        `✅ Savdo Boshqaruv Tizimi (CRM)\n` +
        `✅ E-Commerce Telegram Bot\n` +
        `✅ Korporativ Landing Page\n` +
        `✅ Ombor Hisobi Tizimi (ERP)\n\n` +
        `Batafsil ko'rish uchun saytimizga tashrif buyuring!`,
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
      ctx.reply(
        `<b>Biz bilan bog'lanish:</b>\n\n` +
        `📍 Manzil: Sirdaryo viloyati, Guliston sh.\n` +
        `📞 Telefon: +998 90 123 45 67\n` +
        `✉️ Email: info@raqamly.uz\n` +
        `🤖 Bot: @raqamli_uzbot\n\n` +
        `Yoki quyidagi tugma orqali konsultatsiyaga yoziling:`,
        {
          parse_mode: 'HTML',
          ...Markup.inlineKeyboard([
            [Markup.button.url('🌐 Saytga O\'tish', SITE_URL)]
          ])
        }
      );
    });

    // 🌍 Veb-saytga o'tish
    this.bot.hears('🌍 Veb-saytga o\'tish', (ctx) => {
      ctx.reply(
        'Marhamat, saytimizga tashrif buyuring! 🌐',
        Markup.inlineKeyboard([
          [Markup.button.url('🚀 Raqamly.uz', SITE_URL)]
        ])
      );
    });

    // 📞 Konsultatsiya
    this.bot.hears('📞 Konsultatsiya', (ctx) => {
      ctx.reply(
        `<b>Bepul konsultatsiya olish uchun:</b>\n\n` +
        `Iltimos, quyidagi ma'lumotlarni yozing:\n\n` +
        `<code>Ismingiz: ...\nTelefon: +998 XX XXX XX XX\nLoyiha haqida: ...</code>\n\n` +
        `Yoki faqat telefon raqamingizni yuboring — biz siz bilan bog'lanamiz! 📲`,
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

        // @ts-ignore
        const consultation = await this.prisma.consultation.create({
          data: {
            date: new Date().toISOString().split('T')[0],
            status: 'PENDING'
          }
        });

        // Adminga xabar yuborish
        const chatId = process.env.TELEGRAM_CHAT_ID;
        if (chatId) {
          const adminMsg =
            `🔔 <b>Yangi Konsultatsiya So'rovi!</b>\n\n` +
            `👤 Foydalanuvchi: ${userName} (ID: ${userId})\n` +
            `💬 Xabar: ${text}\n` +
            `📅 Sana: ${new Date().toLocaleDateString('uz-UZ')}\n` +
            `🆔 So'rov ID: #${consultation.id}\n\n` +
            `Iltimos, mijoz bilan tez orada bog'laning!`;

          await this.bot.telegram.sendMessage(chatId, adminMsg, { parse_mode: 'HTML' });
        }

        ctx.reply(
          `✅ <b>So'rovingiz qabul qilindi!</b>\n\n` +
          `Sizning so'rovingiz (ID: #${consultation.id}) muvaffaqiyatli yuborildi.\n` +
          `Mutaxassislarimiz 24 soat ichida siz bilan bog'lanadi! 📲`,
          { parse_mode: 'HTML' }
        );

        this.logger.log(`Telegram orqali yangi konsultatsiya #${consultation.id}: ${userName}`);
      } catch (error) {
        this.logger.error('Konsultatsiya saqlashda xatolik:', error);
        ctx.reply('❌ Xatolik yuz berdi. Iltimos, keyinroq urinib ko\'ring yoki to\'g\'ridan-to\'g\'ri +998 90 123 45 67 raqamiga qo\'ng\'iroq qiling.');
      }
    });

    this.bot.launch();
    this.logger.log('✅ Telegram Bot muvaffaqiyatli ishga tushdi!');

    process.once('SIGINT', () => this.bot.stop('SIGINT'));
    process.once('SIGTERM', () => this.bot.stop('SIGTERM'));
  }
}
