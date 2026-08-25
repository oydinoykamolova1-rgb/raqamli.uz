import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { TelegramModule } from './telegram/telegram.module';

@Module({
  imports: [ScheduleModule.forRoot(), TelegramModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
