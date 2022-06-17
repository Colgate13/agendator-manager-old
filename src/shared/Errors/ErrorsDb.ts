import { ErrorApp } from './Errors';

export class ErrorsDb extends ErrorApp {
    constructor(message: string, statusError = 400) {
        super(message, statusError);
    }
}
  