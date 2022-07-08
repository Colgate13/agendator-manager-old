export interface IErrorApp {
    getMessage(): string;
    getStatusError(): number;
    getError(): IGetError;
}

export interface IGetError {
    message: string;
    statusError: number;
}

export const Errors = {
    unknown: {
        code: 1,
        message: 'Internal Error'
    },
    services: {
        persist: {
            code: 1,
            message: 'Data not persist into storage'
        }
    }
}

export class ErrorApp implements IErrorApp {
    public readonly message: string;
    public readonly statusError: number;

    constructor(message: string, statusError = 1) {
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
