import { PrismaClient } from '@prisma/client'
import { name } from 'faker'

main()

async function main() {
  const prisma = new PrismaClient()
  const user = await prisma.user.create({
    data: {
      name: name.firstName(),
    },
  })
  console.log('added user:\n', user)
  await prisma.disconnect()
}
