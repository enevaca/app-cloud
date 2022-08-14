import { HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus() {
    return { 
      statusCoce: HttpStatus.OK, 
      message: 'API Rest CLOUD en ejecución.' 
    };
  }
}
