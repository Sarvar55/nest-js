import { Exclude } from 'class-transformer';

export interface User {
  userId: number;
  username: string;
  password: string;
}
export class SerializeUser {
  userId: number;
  username: string;
  @Exclude() //bunu haric eder
  password: string;

  constructor(partial: Partial<SerializeUser>) {
    Object.assign(this, partial);
  }
}
