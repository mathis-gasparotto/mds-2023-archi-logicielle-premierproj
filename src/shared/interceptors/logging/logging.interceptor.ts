import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor
} from '@nestjs/common'
import { Observable, tap } from 'rxjs'

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const id = Math.round(Math.random() * 500)
    const label = `request-${id}`

    const req = context.switchToHttp().getRequest()
    console.log(req.url)
    console.log(req.body)

    console.time(label)
    return next.handle().pipe(tap(() => console.timeEnd(label)))
  }
}
