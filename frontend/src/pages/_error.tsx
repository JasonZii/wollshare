// pages/_error.tsx

// Import the required type from Next.js
import { NextPageContext } from 'next';

// Define the type for the component props
// `statusCode` represents the HTTP status code of the error
type ErrorProps = {
    statusCode?: number; // Optional status code
};

/**
 * Error
 * A global error page for handling server-side and client-side errors.
 * Displays a user-friendly message based on the type of error.
 * @param statusCode - The HTTP status code of the error (if available)
 */
function Error({ statusCode }: ErrorProps) {
    return (
        <div
            style={{
                display: 'flex', // Align items in a flexible box layout
                flexDirection: 'column', // Arrange items vertically
                alignItems: 'center', // Center items horizontally
                justifyContent: 'center', // Center items vertically
                height: '100vh', // Take the full height of the viewport
            }}
        >
            {/* Display the error code and message */}
            <h1>Error {statusCode || 'Unknown'}</h1>
            <p>
                {statusCode
                    ? `An error ${statusCode} occurred on the server.` // Message for server-side errors
                    : 'An error occurred on the client.' // Message for client-side errors
                }
            </p>

            {/* Provide a link to navigate back to the home page */}
            <a
                href="/"
                style={{
                    marginTop: '20px', // Add some spacing above the link
                    color: 'blue', // Use blue color for the link
                    textDecoration: 'underline', // Underline the link
                }}
            >
                Go back to Home
            </a>
        </div>
    );
}

/**
 * getInitialProps
 * A static method to determine the HTTP status code of the error.
 * Used by Next.js to retrieve data during server-side or client-side rendering.
 * @param res - The server response object (if available)
 * @param err - The error object (if available)
 * @returns An object containing the status code
 */
Error.getInitialProps = ({ res, err }: NextPageContext) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404; // Default to 404 if no status code is found
    return { statusCode };
};

// Export the error page component as the default export
export default Error;
