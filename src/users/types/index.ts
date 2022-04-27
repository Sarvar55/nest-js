import { Exclude } from 'class-transformer';

export interface User {
  username: string;
  password: string;
}
export class SerializeUser {
  username: string;
  @Exclude() //bunu haric eder
  password: string;

  constructor(partial: Partial<SerializeUser>) {
    Object.assign(this, partial);
  }
}
