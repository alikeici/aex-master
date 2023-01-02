import express from 'express'
import cors from 'cors';
import { PrismaClient } from '@prisma/client'
import  registerRoute  from './routes/registerRoutes.js';
import assignmentRoutes from './routes/assignmentRoutes.js';

const prisma = new PrismaClient()

const server = express();


server.use(express.json())
server.use("/register", registerRoute);
server.use("/assignments", assignmentRoutes)

const PORT = process.env.PORT || 5000;


const corsConfig = {
    origin: "http://localhost:1337"
}
server.use(cors(corsConfig))

server.listen(PORT, () => console.log(`Server started on ${PORT}`))