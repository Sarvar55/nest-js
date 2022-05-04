import { HttpException, HttpStatus } from '@nestjs/common';
export class UserNotFoundException extends HttpException {
  constructor(message?: string, status?: HttpStatus) {
    super(message || 'User Not found', status || HttpStatus.BAD_REQUEST);
  }
}
