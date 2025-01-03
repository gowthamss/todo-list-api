import BaseError from './BaseError.ts';
import { httpStatusCodes } from '../utils/httpStatusCodes.ts';

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