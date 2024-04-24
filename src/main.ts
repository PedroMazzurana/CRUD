import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PartialType } from '@nestjs/mapped-types'
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
