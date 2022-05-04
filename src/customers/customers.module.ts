import { NextFunction } from 'express';
import { ValidateCustomerAccountMiddleWare } from './middlewares/validate-customer-account.middleware';
import {
  MiddlewareConsumer,
  Module,
  NestMiddleware,
  NestModule,
  RequestMethod,
  Get,
} from '@nestjs/common';
import { CustomersController } from './controllers/customers.controller';
import { ValidateCustumersMiddleware } from './middlewares/validate-customers.middleware';
import { CustomersService } from './services/customers/customers.service';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        ValidateCustumersMiddleware,
        ValidateCustomerAccountMiddleWare,
        (req: Request, res: Response, next: NextFunction) => {
          console.log('last middlewares');
          next();
        },
      )
      .exclude(
        {
          path: '/create',
          method: RequestMethod.POST,
        },
        {
          path: 'customers/:id',
          method: RequestMethod.GET,
        },
      )
      .forRoutes(CustomersController);
  }
}
