import { Controller, Get, Post, Patch, Delete, Body, Param, Headers, UnauthorizedException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('consultation')
  scheduleConsultation(@Body() body: { date: string; name?: string; phone?: string }) {
    return this.appService.scheduleConsultation(body.date, body.name, body.phone);
  }

  @Post('admin/login')
  adminLogin(@Body() body: any) {
    if (body.username === 'admin' && body.password === 'admin123') {
      return { token: 'fake-jwt-token-123' };
    }
    throw new UnauthorizedException('Notogri login yoki parol');
  }

  @Get('admin/consultations')
  getConsultations(@Headers('authorization') auth: string) {
    if (auth !== 'Bearer fake-jwt-token-123') {
      throw new UnauthorizedException('Ruxsat etilmagan');
    }
    return this.appService.getConsultations();
  }

  @Patch('admin/consultations/:id')
  updateConsultation(
    @Param('id') id: string,
    @Headers('authorization') auth: string,
    @Body() body: { status: string },
  ) {
    if (auth !== 'Bearer fake-jwt-token-123') {
      throw new UnauthorizedException('Ruxsat etilmagan');
    }
    return this.appService.updateConsultation(Number(id), body.status);
  }

  @Delete('admin/consultations/:id')
  deleteConsultation(
    @Param('id') id: string,
    @Headers('authorization') auth: string,
  ) {
    if (auth !== 'Bearer fake-jwt-token-123') {
      throw new UnauthorizedException('Ruxsat etilmagan');
    }
    return this.appService.deleteConsultation(Number(id));
  }
}
