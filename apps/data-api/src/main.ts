/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
    AllExceptionsFilter,
    HttpExceptionFilter,
    ApiResponseInterceptor
} from '@avans-nx-workshop/backend/dto';
import { AppModule } from './app/app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);

    // Configure CORS options
    const corsOptions: CorsOptions = {
        origin: 'http://localhost:4200', // Angular frontend URL
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE' // Allowed HTTP methods
        // Allow credentials (cookies, authorization headers)
    };

    app.enableCors(corsOptions);

    app.useGlobalInterceptors(new ApiResponseInterceptor());
    app.useGlobalPipes(new ValidationPipe());

    // General exception handling
    // app.useGlobalFilters(new HttpExceptionFilter());

    const port = process.env.PORT || 3000;
    await app.listen(port);
    Logger.log(
        `🚀 DATA-API server is running on: http://localhost:${port}/${globalPrefix}`
    );
}

bootstrap();
