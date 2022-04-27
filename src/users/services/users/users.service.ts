import { SerializeUser } from './../../types/index';
import { User } from '../../types';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'deneme',
      password: 'anson',
    },
    {
      username: 'deneme1',
      password: 'anson1',
    },
    {
      username: 'denem22',
      password: 'anson2',
    },
    {
      username: 'deneme4',
      password: 'anson4',
    },
  ];
  getUsers() {
    return this.users.map((user) => plainToClass(SerializeUser, user));
  }

  getUserByUserName(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
