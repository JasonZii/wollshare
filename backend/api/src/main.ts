import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './common/errors/exception-filter';

/**
 * The bootstrap function is the entry point of the NestJS application.
 * It initializes the application, registers global filters, and starts the HTTP server.
 */
async function bootstrap() {
    // Create a new instance of the NestJS application using the root module
    const app = await NestFactory.create(AppModule);

    // Register the global exception filter
    // This ensures that all uncaught exceptions in the application are handled uniformly
    app.useGlobalFilters(new GlobalExceptionFilter());

    // Start the application and listen on port 3000
    await app.listen(3000);

    // Log a message indicating that the application has started
    console.log('Application is running on http://localhost:3000');
}

// Call the bootstrap function to start the application
bootstrap();
