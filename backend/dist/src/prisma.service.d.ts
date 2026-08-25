import { OnModuleInit } from '@nestjs/common';
declare const PrismaClient: any;
export declare class PrismaService extends PrismaClient implements OnModuleInit {
    constructor();
    onModuleInit(): Promise<void>;
}
export {};
