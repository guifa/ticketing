import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";
import { FormattedError } from "./formatted-error";


export class RequestValidationError extends CustomError {
    constructor(public errors: ValidationError[]) {
        super(400, 'Invalid parameters');

        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
    
    serializeErrors(): FormattedError[] {
        return this.errors.map(error => {
            return { message: error.msg, field: error.param }
        });
    }
}