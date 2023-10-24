import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(private jwt: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    if (username !== 'admin' || password !== 'password') return null
    return { username, password }
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id, roles: user.roles }
    return {
      access_token: this.jwt.sign(payload),
      expires_in: '600_000'
    }
  }
}
