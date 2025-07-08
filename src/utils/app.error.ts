export class AppError extends Error {
  constructor(message: string, statusCode: number = 400) {
    super(message);
    statusCode = statusCode;
    this.name = 'Application Error';
  }
}
