class BaseError extends Error {
    name: string;
    private statusCode: number;
    private isOperational: boolean;
    constructor(name: string, statusCode: number, description: string, isOperational: boolean) {
        super(description);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = name;
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        Error.captureStackTrace(this);
    }
}

export default BaseError;