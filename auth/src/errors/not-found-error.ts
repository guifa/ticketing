import { CustomError } from "./custom-error";
import { FormattedError } from "./formatted-error";

export class NotFoundError extends CustomError {

    constructor() {
        super(404, 'Route not Found');
        
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    serializeErrors(): FormattedError[] {
        return [
            {
                message: 'Not Found'
            }
        ];
    }
}