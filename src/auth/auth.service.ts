import { Injectable } from '@nestjs/common';
import { jwtConstants } from '../config/auth.config';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  async generateToken(payload: any): Promise<string> {
    return jwt.sign(payload, jwtConstants.secret, { expiresIn: '1h' });
  }

  async verifyToken(token: string): Promise<any> {
    return jwt.verify(token, jwtConstants.secret);
  }
}
