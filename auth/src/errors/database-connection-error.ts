import { CustomError } from "./custom-error";
import { FormattedError } from "./formatted-error";

export class DatabaseConnectionError extends CustomError {
    reason = 'Error connecting to database!';

    constructor() {
        super(500, 'Error connecting to database!');
        
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serializeErrors(): FormattedError[] {
        return [
            {
                message: this.reason
            }
        ];
    }
}