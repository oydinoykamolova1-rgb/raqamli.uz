import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(private prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async scheduleConsultation(date: string) {
    const consultation = await this.prisma.consultation.create({
      data: { date }
    });
    this.logger.log(`Yangi konsultatsiya qo'shildi (ID: ${consultation.id}): ${date}`);

    // Telegram botga xabar yuborish
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
      } catch (err) {
        this.logger.error('Telegram botga xabar yuborishda xatolik:', err);
      }
    }

    return { success: true, message: 'Qabul qilindi' };
  }

  async getConsultations() {
    // @ts-ignore
    return this.prisma.consultation.findMany({
      orderBy: { createdAt: 'desc' }
    });
  }

  @Cron('*/10 * * * * *')
  async handleCron() {
    const today = new Date().toISOString().split('T')[0];
    
    // @ts-ignore
    const todayAppointments = await this.prisma.consultation.findMany({
      where: { date: today, status: 'PENDING' }
    });

    if (todayAppointments.length > 0) {
      this.logger.warn(`ESLATMA: Bugun (${today}) ${todayAppointments.length} ta mijoz bilan uchrashuv belgilangan!`);
    }
  }
}
