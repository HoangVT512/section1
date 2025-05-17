import { Controller, Get, Post, UseGuards, Req, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}


  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Req() req) {
    return req.user;
  }

  @Post('auth/validate')
  async validateUser(@Req() req, @Body() user: { username: string, password: string }) {
    return this.authService.validateUser(user.username, user.password);
  }

  @Get('auth/token')
  async generateToken(@Req() req, @Body() user: { username: string, password: string }) {
    return this.authService.generateToken(user.username, user.password);
  }
}
