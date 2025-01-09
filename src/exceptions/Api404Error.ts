import BaseError from './BaseError.js';
import { httpStatusCodes } from '../utils/httpStatusCodes.js';

class Api404Error extends BaseError {
    constructor(
        name: string,
        statusCode: number = httpStatusCodes.NOT_FOUND,
        description: string = 'Not found.',
        isOperational: boolean = true
    ) {
        super(name, statusCode, description, isOperational);
    }
}

export default Api404Error;