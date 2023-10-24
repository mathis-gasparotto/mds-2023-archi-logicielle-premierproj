import { Test, TestingModule } from '@nestjs/testing';
import { SandwichService } from './sandwich.service';

describe('SandwichService', () => {
  let service: SandwichService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SandwichService],
    }).compile();

    service = module.get<SandwichService>(SandwichService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
