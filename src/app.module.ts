import { Module } from '@nestjs/common'
import { PrismaModule } from './shared/prisma/prisma.module'
import { AuthModule } from './auth/auth.module'
import { JwtAuthGuard } from './auth/jwt-auth.guard'
import { HelloModule } from './hello/hello.module'
import { UserModule } from './user/user.module'

@Module({
  imports: [PrismaModule, AuthModule, HelloModule, UserModule],
  providers: [{ provide: 'APP_GUARD', useClass: JwtAuthGuard }]
})
export class AppModule {}
