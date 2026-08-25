import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    scheduleConsultation(body: {
        date: string;
    }): Promise<{
        success: boolean;
        message: string;
    }>;
    adminLogin(body: any): {
        token: string;
    };
    getConsultations(auth: string): Promise<any>;
}
