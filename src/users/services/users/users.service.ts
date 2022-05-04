import { SerializeUser } from './../../types/index';
import { User } from '../../types';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      userId: 1,
      username: 'deneme',
      password: 'anson',
    },
    {
      userId: 2,
      username: 'deneme1',
      password: 'anson1',
    },
    {
      userId: 3,
      username: 'denem22',
      password: 'anson2',
    },
    {
      userId: 4,
      username: 'deneme4',
      password: 'anson4',
    },
  ];
  getUsers() {
    return this.users.map((user) => new SerializeUser(user)); //bunu yerine plainToClass(SerializeUser, user)
  }

  getUserByUserName(username: string) {
    return this.users.find((user) => user.username === username);
  }
  getUserById(userId: number) {
    return this.users.find((user) => user.userId === userId);
  }
}
