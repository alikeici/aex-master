import express from "express";
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

const route = express.Router();

// get all registered users from db
route.get("/", (async (req, res) => {
    var users = await prisma.users.findMany()
    res.json(users)
}))

route.post("/", (async (req, res) => {
    const addUser = await prisma.users.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        }
    })

    res.json(addUser)
}))

route.delete("/clear", (async (req, res) => {
    await prisma.users.deleteMany()
}))

route.patch(":/id", (async (req, res) => {
    await prisma.users.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: {
            name: req.body.name,
            email: req.body.email
        }
    })
}))

export default route