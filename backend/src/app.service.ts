import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(private prisma: PrismaService) {}

  getHello(): string {
    return 'Raqamly API ishlayapti! 🚀';
  }

  async scheduleConsultation(date: string, name?: string, phone?: string) {
    const consultation = await this.prisma.consultation.create({
      data: {
        date,
        name: name || '',
        phone: phone || '',
      },
    });
    this.logger.log(`Yangi konsultatsiya qo'shildi (ID: ${consultation.id}): ${name || 'Noma\'lum'} — ${date}`);

    // Telegram botga xabar yuborish
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (token && chatId && token !== 'YOUR_BOT_TOKEN') {
      const message =
        `🔔 <b>Yangi Konsultatsiya So'rovi!</b>\n\n` +
        `👤 Ism: ${name || 'Kiritilmagan'}\n` +
        `📞 Telefon: ${phone || 'Kiritilmagan'}\n` +
        `📅 Sana: ${date}\n` +
        `🆔 ID: #${consultation.id}\n\n` +
        `Iltimos, mijoz bilan tez orada bog'laning!`;
      try {
        await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML',
          }),
        });
      } catch (err) {
        this.logger.error('Telegram botga xabar yuborishda xatolik:', err);
      }
    }

    return { success: true, message: 'Qabul qilindi' };
  }

  async getConsultations() {
    return this.prisma.consultation.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async updateConsultation(id: number, status: string) {
    return this.prisma.consultation.update({
      where: { id },
      data: { status },
    });
  }

  async deleteConsultation(id: number) {
    await this.prisma.consultation.delete({ where: { id } });
    return { success: true, message: "O'chirildi" };
  }

  @Cron('*/10 * * * *')
  async handleCron() {
    const today = new Date().toISOString().split('T')[0];

    const todayAppointments = await this.prisma.consultation.findMany({
      where: { date: today, status: 'PENDING' },
    });

    if (todayAppointments.length > 0) {
      this.logger.warn(`ESLATMA: Bugun (${today}) ${todayAppointments.length} ta mijoz bilan uchrashuv belgilangan!`);
    }
  }
}
