import { Module } from '@nestjs/common'
import { SandwichController } from './sandwich.controller'
import { SandwichService } from './sandwich.service'
import { PrismaModule } from 'src/shared/prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  controllers: [SandwichController],
  providers: [SandwichService],
  exports: [SandwichService]
})
export class SandwichModule {}
