import React, { Component, ErrorInfo } from 'react';

/**
 * ErrorBoundary
 * A React component to catch runtime errors in the component tree.
 */
export class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        // Log the error to an error reporting service
        console.error('Error caught by ErrorBoundary:', error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong. Please try again later.</h1>;
        }

        return this.props.children;
    }
}
