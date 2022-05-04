import { HttpExceptionFilter } from './../../filter/HttpException.filter';
import { UserNotFoundException } from './../../exceptions/UserNotFoundException';
import { SerializeUser } from './../../types/index';
import { UsersService } from './../../services/users/users.service';
import {
  Controller,
  Get,
  Inject,
  Param,
  HttpException,
  HttpStatus,
  UseInterceptors,
  ClassSerializerInterceptor,
  ParseIntPipe,
  UseFilters,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('')
  getUsers() {
    return this.userService.getUsers();
  }
  @Get('username/:username')
  @UseInterceptors(ClassSerializerInterceptor)
  getByUserName(@Param('username') username: string) {
    const user = this.userService.getUserByUserName(username);
    if (user) return new SerializeUser(user);
    else throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
  }
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('userId/:userId')
  @UseFilters(HttpExceptionFilter)
  getByUserId(@Param('userId', ParseIntPipe) userId: number) {
    const user = this.userService.getUserById(userId);
    if (user) return new SerializeUser(user);
    else throw new UserNotFoundException();
  }
}
