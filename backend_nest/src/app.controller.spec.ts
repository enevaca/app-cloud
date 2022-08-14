import { HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "API Rest CLOUD en ejecución."', () => {
      expect(appController.status()).toBe({ 
        statusCoce: HttpStatus.OK, 
        message: 'API Rest CLOUD en ejecución.' 
      });
    });
  });
});
