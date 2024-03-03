import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOptions: CorsOptions = {
    origin: 'http://127.0.0.1:5500', // Replace with your frontend URL
    methods: 'GET,POST,DELETE,PUT',
    credentials: true,
    optionsSuccessStatus: 204,
  };
  app.enableCors(corsOptions);
  await app.listen(3000);
}
bootstrap();
