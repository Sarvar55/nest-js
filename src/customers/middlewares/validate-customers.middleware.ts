import { Inject, NestMiddleware, Injectable } from '@nestjs/common';
import { NextFunction } from 'express';
import express, { Request, Response } from 'express';

@Injectable()
export class ValidateCustumersMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Hello world I am inside ValidateCustomerMiddlewares');
    const { authorization } = req.headers;
    if (!authorization)
      return res
        .status(403)
        .send({ error: 'No authentication token provider' });
    if (authorization === '123') {
      next();
    } else {
      return res
        .status(403)
        .send({ error: 'Invalid Authentication token Provided' });
    }
  }
}
