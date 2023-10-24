import { Controller } from '@nestjs/common'
import { Get, Param, Post, Sse } from '@nestjs/common'
import { Public } from '../auth/public.decorator'
import { SandwichService } from './sandwich.service'

@Controller('sandwich')
export class SandwichController {
  constructor(private sandwichService: SandwichService) {}

  @Get()
  @Public()
  getSandwichs(): any {
    const sandwichs = this.sandwichService.getAll()
    return sandwichs
  }

  @Get(':id')
  @Public()
  findOne(@Param('id') id: string) {
    return this.sandwichService.getOneById(+id)
  }

  @Post()
  async createSandwhich() {
    return await this.sandwichService.create()
  }

  @Sse('/sse')
  async sse() {
    return this.sandwichService.createdListeningSubject
  }
}
