import { Test, TestingModule } from '@nestjs/testing';
import { SandwichController } from './sandwich.controller';

describe('SandwichController', () => {
  let controller: SandwichController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SandwichController],
    }).compile();

    controller = module.get<SandwichController>(SandwichController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
