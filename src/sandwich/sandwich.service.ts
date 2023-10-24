import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/shared/prisma/prisma.service'

@Injectable()
export class SandwichService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.sandwich.findMany()
  }

  async getOneById(id: number) {
    return await this.prisma.sandwich
      .findUniqueOrThrow({ where: { id } })
      .catch(() => {
        throw new NotFoundException()
      })
  }
}
