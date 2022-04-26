import { CustomersService } from './../services/customers/customers.service';
/* eslint-disable prettier/prettier */
import { Response, Request } from 'express';
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateCustomerDto } from '../dtos/CreateCustomer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly CustomersService: CustomersService) {}
  @Get(':id')
  getCustomers(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    console.log(typeof id);

    const customer = this.CustomersService.findCustomersById(id);
    if (customer) {
      res.send(customer);
    } else {
      res.status(404).send({ message: 'costumer not found' });
    }
  }
  @Get('/search/:id')
  searchCostumerById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.CustomersService.findCustomersById(id);
    if (customer) return customer;
    else throw new HttpException('customer not found', HttpStatus.BAD_REQUEST);
  }
  @Post('create')
  @UsePipes(ValidationPipe)
  createcustomer(@Body() createCustomerDto: CreateCustomerDto) {
    this.CustomersService.createCustomers(createCustomerDto);
  }
  @Get()
  getAllCustomers() {
    return this.CustomersService.findAll();
  }
}
