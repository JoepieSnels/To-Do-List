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

    // Configure CORS based on environment
    const isProduction = process.env.NODE_ENV === 'production';
    const allowedOrigins = isProduction
        ? ['https://polite-island-02ad37803.5.azurestaticapps.net'] // Production Angular app URL
        : ['http://localhost:4200']; // Development Angular app URL

    const corsOptions: CorsOptions = {
        origin: allowedOrigins, // Dynamically set allowed origins
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
        credentials: true // Allow cookies or authorization headers
    };

    app.enableCors(corsOptions);

    app.useGlobalInterceptors(new ApiResponseInterceptor());
    app.useGlobalPipes(new ValidationPipe());

    // Enable exception filters (uncomment as needed)
    // app.useGlobalFilters(new HttpExceptionFilter());

    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    await app.listen(PORT);
    Logger.log(
        `🚀 DATA-API server is running on: http://localhost:${PORT}/${globalPrefix}`
    );
}
