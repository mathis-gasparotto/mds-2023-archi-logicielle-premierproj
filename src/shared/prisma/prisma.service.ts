import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super()
  }

  async onModuleInit() {
    try {
      await this.$connect()
    } catch (e) {
      console.error(e)
    }
  }

  async onModuleDestroy() {
    await this.$disconnect()
  }
}
