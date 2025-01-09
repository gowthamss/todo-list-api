import BaseError from './BaseError.js';

class Api500Error extends BaseError {
    constructor(
        name: string,
        statusCode: number = 500,
        description: string = 'Internal server error.',
        isOperational: boolean = true
    ) {
        super(name, statusCode, description, isOperational);
    }
}

export default Api500Error;