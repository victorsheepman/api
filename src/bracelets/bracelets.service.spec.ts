import { Test, TestingModule } from '@nestjs/testing';
import { BraceletsService } from './bracelets.service';

describe('BraceletsService', () => {
  let service: BraceletsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BraceletsService],
    }).compile();

    service = module.get<BraceletsService>(BraceletsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
