export class AppError extends Error {
  statusCode: number;
  isOperational: boolean;
  constructor(message: string, statusCode: number = 400) {
    super(message);
    this.isOperational = true;
    this.statusCode = statusCode;
    this.name = 'Application Error';
  }
}
