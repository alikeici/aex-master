import express from 'express'
import cors from 'cors';
import { PrismaClient } from '@prisma/client'
import  registerRoute  from './routes/registerRoutes.js';

const prisma = new PrismaClient()

const server = express();

server.post("/register", async (req, res)=> {
    console.log(req.body)
    const user = await prisma.users.create({
        data: {
            id: 6,
            namn: req.body.namn,
            email: req.body.email,
            password: req.body.password
        }
    }) 
    res.json(user)
});

const PORT = process.env.PORT || 5000;

server.use(express.json())

const corsConfig = {
    origin: "http://localhost:1337"
}
server.use(cors(corsConfig))

server.listen(PORT, () => console.log(`Server started on ${PORT}`))