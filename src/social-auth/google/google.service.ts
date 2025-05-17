// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleService {
  async validateOAuthLogin(user: any): Promise<any> {
    // Có thể lưu vào database ở đây nếu chưa có
    // Trả về thông tin user hoặc JWT
    return {
      message: 'Login successful',
      user,
    };
  }
}
