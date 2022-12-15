import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();


const registerRoute = ("/register", async (req, res)=> {
    const user = await prisma.users.create({
        data: {
            namn: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
    }) 
    res.json(user)
})

export default registerRoute