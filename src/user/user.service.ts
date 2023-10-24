import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/shared/prisma/prisma.service'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.user.findMany()
  }

  async getByUsername(username: string) {
    return await this.prisma.user.findFirst({ where: { username } })
  }
}
