import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'HI! I am sheeza Nazeer ';
  }
}
