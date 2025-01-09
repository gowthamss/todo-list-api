import BaseError from './BaseError.js';

class Api401Error extends BaseError {
    constructor(
        name: string,
        statusCode: number = 401,
        description: string = 'Unauthorized.',
        isOperational: boolean = true
    ) {
        super(name, statusCode, description, isOperational);
    }
}

export default Api401Error;