import { PrismaService } from './prisma.service';
export declare class AppService {
    private prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    getHello(): string;
    scheduleConsultation(date: string): Promise<{
        success: boolean;
        message: string;
    }>;
    getConsultations(): Promise<any>;
    handleCron(): Promise<void>;
}
