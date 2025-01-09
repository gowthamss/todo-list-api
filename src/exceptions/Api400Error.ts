import BaseError from './BaseError.js';

class Api400Error extends BaseError {
    constructor(
        name: string,
        statusCode: number = 400,
        description: string = 'Bad request.',
        isOperational: boolean = true
    ) {
        super(name, statusCode, description, isOperational);
    }
}

export default Api400Error;