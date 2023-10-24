import { Controller } from '@nestjs/common'
import { Get, Param } from '@nestjs/common'
import { Public } from '../auth/public.decorator'
import { SandwichService } from './sandwich.service'

@Controller('sandwich')
export class SandwichController {
  constructor(private sandwichService: SandwichService) {}

  @Get()
  getSandwichs(): any {
    const sandwichs = this.sandwichService.getAll()
    return sandwichs
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sandwichService.getOneById(+id)
  }
}
