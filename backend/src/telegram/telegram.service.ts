import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Telegraf, Markup } from 'telegraf';
import { PrismaService } from '../prisma.service';

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
        `Assalomu alaykum, <b>${ctx.from.first_name}</b>! 👋\nRaqamly IT Kompaniyasining rasmiy botiga xush kelibsiz.\n\nQanday yordam bera olamiz?`,
        {
          parse_mode: 'HTML',
          ...Markup.keyboard([
            ['📂 Xizmatlar', '📞 Konsultatsiya'],
            ['🌍 Veb-saytga o\'tish']
          ]).resize()
        }
      );
    });

    // Tugmalarga javoblar
    this.bot.hears('📂 Xizmatlar', (ctx) => {
      ctx.reply(
        `Bizning xizmatlar:\n\n1️⃣ Veb va Mobil Ilovalar\n2️⃣ UI/UX Dizayn\n3️⃣ SEO va Raqamli Marketing\n4️⃣ IT Konsalting\n\nBatafsil ma'lumot saytimizda!`,
        Markup.inlineKeyboard([
          Markup.button.url('Batafsil ko\'rish', 'http://localhost:3000/services')
        ])
      );
    });

    this.bot.hears('🌍 Veb-saytga o\'tish', (ctx) => {
      ctx.reply('Marhamat, saytimizga tashrif buyuring:', 
        Markup.inlineKeyboard([
          Markup.button.url('Raqamly.uz', 'http://localhost:3000')
        ])
      );
    });

    // Konsultatsiyaga yozilish
    this.bot.hears('📞 Konsultatsiya', (ctx) => {
      ctx.reply('Iltimos, siz bilan bog\'lanishimiz uchun qulay sanani YYYY-MM-DD formatida yozing (Masalan: 2026-09-01). Yoki telefon raqamingizni qoldiring.');
    });

    // Oddiy xabarlarni tutib olish (Konsultatsiya sanasi yoki raqam kiritganda)
    this.bot.on('text', async (ctx) => {
      const text = ctx.message.text;
      if (!text) return;
      
      // Agar foydalanuvchi sanaga o'xshash narsa yozsa yoki raqam yozsa
      if (text !== '📂 Xizmatlar' && text !== '📞 Konsultatsiya' && text !== '🌍 Veb-saytga o\'tish' && !text.startsWith('/')) {
        try {
          const userName = ctx.from.username ? `@${ctx.from.username}` : ctx.from.first_name;
          const consultation = await this.prisma.consultation.create({
            data: { 
              date: text + ` (Telegram: ${userName})`,
              status: 'PENDING'
            }
          });
          ctx.reply(`✅ So'rovingiz qabul qilindi (ID: ${consultation.id}). Tez orada mutaxassislarimiz siz bilan bog'lanishadi!`);
          this.logger.log(`Telegram orqali yangi konsultatsiya: ${text}`);
        } catch (error) {
          ctx.reply(`❌ Xatolik yuz berdi. Iltimos keyinroq urinib ko'ring.`);
        }
      }
    });

    this.bot.launch();
    this.logger.log('Telegram Bot muvaffaqiyatli ishga tushdi!');

    // Node.js to'xtaganda botni ham to'xtatish
    process.once('SIGINT', () => this.bot.stop('SIGINT'));
    process.once('SIGTERM', () => this.bot.stop('SIGTERM'));
  }
}
