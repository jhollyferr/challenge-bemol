export enum HttpCode {
  OK = 200,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

interface AppErrorArgs {
  error?: string;
  httpCode: HttpCode;
  description: string;
  isOperational?: boolean;
}

export class AppError extends Error {
  public readonly httpCode: HttpCode;
  public readonly isOperational: boolean = true;
  public readonly error: string;
  
  constructor(args: AppErrorArgs) {
    super(args.description);

    Object.setPrototypeOf(this, new.target.prototype);

    this.error = this.getTypeError(args.httpCode);
    this.httpCode = args.httpCode;

    if (args.isOperational !== undefined) {
      this.isOperational = args.isOperational;
    }

    Error.captureStackTrace(this);
  }

  private getTypeError(httpCode: number) {
    switch (httpCode) {
      case HttpCode.OK:
        return "OK";
      case HttpCode.NOT_FOUND:
        return "No Content";
      case HttpCode.BAD_REQUEST:
        return "Bad Request";
      case HttpCode.UNAUTHORIZED:
        return "Unauthorized";
      case HttpCode.NOT_FOUND:
        return "Not Found";
      case HttpCode.INTERNAL_SERVER_ERROR:
        return "Internal Server Error";
      default:
        return "error";
    }
  }
}
