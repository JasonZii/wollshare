/**
 * ApiError
 * A custom error class to standardize API errors.
 */
export class ApiError extends Error {
    public statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.name = 'ApiError';
        this.statusCode = statusCode;
    }
}

/**
 * fetchWithErrorHandling
 * Wrapper for fetch with standardized error handling.
 */
export async function fetchWithErrorHandling(url: string, options: RequestInit = {}) {
    const response = await fetch(url, options);

    if (!response.ok) {
        const message = await response.text();
        throw new ApiError(message, response.status);
    }

    return response.json();
}
