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
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}
  @Get('')
  getUsers() {
    return this.userService.getUsers();
  }
  @Get('/:username')
  @UseInterceptors(ClassSerializerInterceptor)
  getByUserName(@Param('username') username: string) {
    const user = this.userService.getUserByUserName(username);
    if (user) return new SerializeUser(user);
    else throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
  }
}
