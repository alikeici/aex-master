import Express  from "express";
import 'dotenv/config';
import { PrismaClient } from "@prisma/client";
import cors from 'cors'

const app = express();
const prisma = new PrismaClient();
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5000"
}))

app.post("/register", async (req, res) => {

    const registeruser = await prisma.users.create({
        data : {
            name : req.body.name,
            email : req.body.email,
            password: req.body.password

        }
    })
        res.json(registeruser)
})