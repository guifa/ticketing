import { FormattedError } from "./formatted-error";

export abstract class CustomError extends Error {
    constructor(public statusCode: number, public message: string) {
        super(message);

        Object.setPrototypeOf(this, CustomError.prototype);
    }

    abstract serializeErrors(): FormattedError[];
}