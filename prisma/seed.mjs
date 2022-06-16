import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const UserPermissions = [
    {
        id: 1,
        Description: 'Admin',
    },
    {
        id: 2,
        Description: 'Staff',
    },
    {
        id: 3,
        Description: 'Suport',
    }
]

async function main() {
    console.log(`Start seeding ...`)
    for (const UserPermission of UserPermissions) {
      const UserPermissions = await prisma.UserPermissions.create({
        data: UserPermission,
      })
      console.log(`Created UserPermissions with id: ${UserPermissions.id}`)
    }
    console.log(`Seeding finished.`)
  }
  
main()
.catch((e) => {
    console.error(e)
    process.exit(1)
})
.finally(async () => {
    await prisma.$disconnect()
})
  