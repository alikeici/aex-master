import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const seed = () => {
    console.log("HÄR!!!!")
    prisma.users.create({
        data: {
            namn: "person",
            email: "test",
            password: "test"
        }
    })
}

seed();