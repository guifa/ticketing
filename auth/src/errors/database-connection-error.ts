export class DatabaseConnectionErrorError extends Error {
    reason = 'Error connecting to database!';

    constructor() {
        super();

        Object.setPrototypeOf(this, DatabaseConnectionErrorError.prototype);
    }
}