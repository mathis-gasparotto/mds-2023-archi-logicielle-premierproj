import {
  Injectable,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserService } from 'src/user/user.service'

@Injectable()
export class AuthService {
  constructor(
    private jwt: JwtService,
    private userService: UserService
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.getByUsername(username)
    if (!user) throw new NotFoundException()
    if (user.password !== password) throw new UnauthorizedException()
    return user
  }

  async login(_user: any) {
    const user = await this.validateUser(_user.username, _user.password)
    const payload = { username: user.username, sub: user.id, roles: user.roles }
    return {
      access_token: this.jwt.sign(payload),
      expires_in: 600_000
    }
  }
}
