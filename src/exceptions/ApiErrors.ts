import { httpStatusCodes } from '../utils/httpStatusCodes.js';
import { v4 as uuidv4 } from 'uuid';
import { Error, Errors } from '../models/errorModel.js';

export class ApiErrors {
    private readonly errors: Error[] = [];

    constructor(private readonly statusCode?: httpStatusCodes) { }

    setError(error: string, errorCode: string) {
        const uuid = uuidv4();
        const errorObject: Error = {
            id: uuid,
            title: error,
            code: errorCode,
        }

        this.errors.push(errorObject);
    }

    getErrors(): Error[] {
        return this.errors;
    }

    toApiFormat(): Errors {
        return {
            errors: this.errors,
            statusCode: this.statusCode
        }
    }

    isError(): boolean {
        return this.errors.length > 0;
    }
}