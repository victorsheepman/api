import { Test, TestingModule } from '@nestjs/testing';
import { BraceletsController } from './bracelets.controller';
import { BraceletsService } from './bracelets.service';

describe('BraceletsController', () => {
  let controller: BraceletsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BraceletsController],
      providers: [BraceletsService],
    }).compile();

    controller = module.get<BraceletsController>(BraceletsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
