import { NextFunction } from 'express';
import { Injectable, NestMiddleware } from '@nestjs/common';
import express, { Request, Response } from 'express';
@Injectable()
export class ValidateCustomerAccountMiddleWare implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { valid } = req.headers;
    console.log(valid);

    console.log('Validate Customers Account');

    if (valid) {
      next();
    } else {
      res.status(401).send({
        error: 'Account is invalid',
      });
    }
  }
}
