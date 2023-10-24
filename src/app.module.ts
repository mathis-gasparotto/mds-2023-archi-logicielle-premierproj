import { Module } from '@nestjs/common'
import { PrismaModule } from './shared/prisma/prisma.module'
import { AuthModule } from './auth/auth.module'
import { JwtAuthGuard } from './auth/jwt-auth.guard'
import { HelloModule } from './hello/hello.module'
import { UserModule } from './user/user.module'
import { SandwichModule } from './sandwich/sandwich.module'
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core'
import { LoggingInterceptor } from './shared/interceptors/logging/logging.interceptor'

@Module({
  imports: [PrismaModule, AuthModule, HelloModule, UserModule, SandwichModule],
  providers: [
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor }
  ]
})
export class AppModule {}
