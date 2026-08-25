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
var AppService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const prisma_service_1 = require("./prisma.service");
let AppService = AppService_1 = class AppService {
    prisma;
    logger = new common_1.Logger(AppService_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    getHello() {
        return 'Hello World!';
    }
    async scheduleConsultation(date) {
        const consultation = await this.prisma.consultation.create({
            data: { date }
        });
        this.logger.log(`Yangi konsultatsiya qo'shildi (ID: ${consultation.id}): ${date}`);
        const token = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;
        if (token && chatId && token !== 'YOUR_BOT_TOKEN') {
            const message = `🔔 *Yangi Konsultatsiya!*\n\n📅 Sana: ${date}\n🆔 ID: ${consultation.id}\n\nIltimos, mijoz bilan bog'laning!`;
            try {
                await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: message,
                        parse_mode: 'Markdown',
                    }),
                });
            }
            catch (err) {
                this.logger.error('Telegram botga xabar yuborishda xatolik:', err);
            }
        }
        return { success: true, message: 'Qabul qilindi' };
    }
    async getConsultations() {
        return this.prisma.consultation.findMany({
            orderBy: { createdAt: 'desc' }
        });
    }
    async handleCron() {
        const today = new Date().toISOString().split('T')[0];
        const todayAppointments = await this.prisma.consultation.findMany({
            where: { date: today, status: 'PENDING' }
        });
        if (todayAppointments.length > 0) {
            this.logger.warn(`ESLATMA: Bugun (${today}) ${todayAppointments.length} ta mijoz bilan uchrashuv belgilangan!`);
        }
    }
};
exports.AppService = AppService;
__decorate([
    (0, schedule_1.Cron)('*/10 * * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppService.prototype, "handleCron", null);
exports.AppService = AppService = AppService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AppService);
//# sourceMappingURL=app.service.js.map