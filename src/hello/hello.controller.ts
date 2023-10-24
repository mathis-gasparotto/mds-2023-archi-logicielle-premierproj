import { Controller } from '@nestjs/common'
import { Get } from '@nestjs/common'
import { Public } from '../auth/public.decorator'

@Controller('hello')
export class HelloController {
  @Get()
  @Public()
  getHello(): string {
    return 'Hello World!'
  }
}
