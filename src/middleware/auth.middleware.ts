import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly authService: AuthService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    if (!token) {
      throw new UnauthorizedException('Token JWT não fornecido');
    }

    try {
      const decodedToken = await this.authService.verifyToken(token);

      // Adicione os dados decodificados do token à solicitação para uso posterior nos controladores
      req['user'] = decodedToken;

      next();
    } catch (error) {
      throw new UnauthorizedException('Token JWT inválido');
    }
  }
}
