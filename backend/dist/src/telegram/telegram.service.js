"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TelegramService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramService = void 0;
const common_1 = require("@nestjs/common");
const telegraf_1 = require("telegraf");
const prisma_service_1 = require("../prisma.service");
let TelegramService = TelegramService_1 = class TelegramService {
    prisma;
    logger = new common_1.Logger(TelegramService_1.name);
    bot;
    constructor(prisma) {
        this.prisma = prisma;
    }
    onModuleInit() {
        const token = process.env.TELEGRAM_BOT_TOKEN;
        if (!token || token === 'YOUR_BOT_TOKEN') {
            this.logger.warn('Telegram Bot Token topilmadi. Bot ishga tushirilmadi.');
            return;
        }
        try {
            this.botiIshgaTushirish(token);
        }
        catch (err) {
            this.logger.error('Botni ishga tushirishda xatolik:', err);
        }
    }
    botiIshgaTushirish(token) {
        this.bot = new telegraf_1.Telegraf(token);
        this.bot.start((ctx) => {
            ctx.reply(`Assalomu alaykum, <b>${ctx.from.first_name}</b>! 👋\nRaqamly IT Kompaniyasining rasmiy botiga xush kelibsiz.\n\nQanday yordam bera olamiz?`, {
                parse_mode: 'HTML',
                ...telegraf_1.Markup.keyboard([
                    ['📂 Xizmatlar', '📞 Konsultatsiya'],
                    ['🌍 Veb-saytga o\'tish']
                ]).resize()
            });
        });
        this.bot.hears('📂 Xizmatlar', (ctx) => {
            ctx.reply(`Bizning xizmatlar:\n\n1️⃣ Veb va Mobil Ilovalar\n2️⃣ UI/UX Dizayn\n3️⃣ SEO va Raqamli Marketing\n4️⃣ IT Konsalting\n\nBatafsil ma'lumot saytimizda!`, telegraf_1.Markup.inlineKeyboard([
                telegraf_1.Markup.button.url('Batafsil ko\'rish', 'http://localhost:3000/services')
            ]));
        });
        this.bot.hears('🌍 Veb-saytga o\'tish', (ctx) => {
            ctx.reply('Marhamat, saytimizga tashrif buyuring:', telegraf_1.Markup.inlineKeyboard([
                telegraf_1.Markup.button.url('Raqamly.uz', 'http://localhost:3000')
            ]));
        });
        this.bot.hears('📞 Konsultatsiya', (ctx) => {
            ctx.reply('Iltimos, siz bilan bog\'lanishimiz uchun qulay sanani YYYY-MM-DD formatida yozing (Masalan: 2026-09-01). Yoki telefon raqamingizni qoldiring.');
        });
        this.bot.on('text', async (ctx) => {
            const text = ctx.message.text;
            if (!text)
                return;
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
                }
                catch (error) {
                    ctx.reply(`❌ Xatolik yuz berdi. Iltimos keyinroq urinib ko'ring.`);
                }
            }
        });
        this.bot.launch();
        this.logger.log('Telegram Bot muvaffaqiyatli ishga tushdi!');
        process.once('SIGINT', () => this.bot.stop('SIGINT'));
        process.once('SIGTERM', () => this.bot.stop('SIGTERM'));
    }
};
exports.TelegramService = TelegramService;
exports.TelegramService = TelegramService = TelegramService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TelegramService);
//# sourceMappingURL=telegram.service.js.map