class ResponseError {
    error?: string;

    constructor(error: string = 'unknown error') {
        this.error = error;
    }
}

export default ResponseError;