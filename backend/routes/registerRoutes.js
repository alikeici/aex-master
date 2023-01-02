import express from "express";
import bodyParser from "body-parser";
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

const route = express.Router();
var jsonParser = bodyParser.json()

// get all registered users from db
route.get("/", (async (req, res) => {
    var users = await prisma.users.findMany()
    res.json(users)
}))

route.get("/:id", (async (req, res) =>{
    var user = await prisma.users.findUniqueOrThrow({
        where :{
            id: parseInt(req.params.id)
        }
    }
    )
    res.json(user)
}))

route.post("/", jsonParser, (async (req, res) => {
    console.log(req.body.email)
    const addUser = await prisma.users.create({
        data: {
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        }
    })

    res.json(addUser)
}))

route.delete("/clear", (async (req, res) => {
    await prisma.users.deleteMany()
}))

route.delete("/:id", (async (req, res) => {
    const deleted = await prisma.users.delete({
        where:{
            id: parseInt(req.params.id)
        }
    })
    res.json(deleted)
}))

route.patch("/:id", jsonParser, (async (req, res) => {
    const updatedUser = await prisma.users.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: {
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: req.body.password
        }
    })
    res.json(updatedUser)
}))

export default route