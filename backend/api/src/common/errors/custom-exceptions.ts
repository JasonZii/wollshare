import { HttpException, HttpStatus } from '@nestjs/common';

/**
 * ValidationException
 * Custom exception for input validation errors.
 */
export class ValidationException extends HttpException {
    constructor(message: string) {
        super(message, HttpStatus.BAD_REQUEST);
    }
}

/**
 * DatabaseException
 * Custom exception for database-related errors.
 */
export class DatabaseException extends HttpException {
    constructor(message: string) {
        super(message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
