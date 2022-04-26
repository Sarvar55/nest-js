/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  ValidateNested,
} from 'class-validator';
import { CreateAddressDto } from './CreateAddress.dto';

/* eslint-disable prettier/prettier */
export class CreateCustomerDto {
  @IsEmail()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  @ValidateNested()
  @Type(() => CreateAddressDto)
  @IsNotEmptyObject() //bu olmasa adres girilmese adresin icine girmeyecek kabul drumu
  address: CreateAddressDto;
}
