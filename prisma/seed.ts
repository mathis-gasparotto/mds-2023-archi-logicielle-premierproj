import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const admin = await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      password: 'password',
      role: {
        connectOrCreate: [
          { where: { label: 'ADMIN' }, create: { label: 'ADMIN' } },
          { where: { label: 'USER' }, create: { label: 'USER' } }
        ]
      }
    }
  })
}

main()
