import { Customer } from './../../types/Customer';
import { CreateCustomerDto } from './../../dtos/CreateCustomer.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'denna@gmail.com',
      name: 'Danny Danny',
    },
    {
      id: 2,
      email: 'dennffdfga@gmail.com',
      name: 'dalton dalon',
    },
    {
      id: 3,
      email: 'denna@dfggmail.net',
      name: 'strepson sfnjn',
    },
  ];

  findCustomersById(id: number) {
    return this.customers.find((user) => user.id == id);
  }
  createCustomers(createCustomerDto: CreateCustomerDto) {
    this.customers.push(createCustomerDto);
  }
  findAll() {
    return this.customers;
  }
}
