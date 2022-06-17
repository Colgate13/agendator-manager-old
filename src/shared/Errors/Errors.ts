interface IGetError{
    message: string;
    statusError: number;
}

export class ErrorApp {
    public readonly message: string;
    public readonly statusError: number;

    constructor(message: string, statusError = 400) {
        this.message = message;
        this.statusError = statusError;
    }

    public getMessage(): string {
        return this.message;
    }
     
    public getStatusError(): number { 
        return this.statusError;
    }

    public getError(): IGetError {
        return {
            message: this.message,
            statusError: this.statusError
        };
    }
}
  