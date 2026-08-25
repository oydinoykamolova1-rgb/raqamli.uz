import { OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
export declare class TelegramService implements OnModuleInit {
    private prisma;
    private readonly logger;
    private bot;
    constructor(prisma: PrismaService);
    onModuleInit(): void;
    private botiIshgaTushirish;
}
