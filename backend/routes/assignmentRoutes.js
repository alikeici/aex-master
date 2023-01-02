import express from "express";
import bodyParser from "body-parser";
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

const route = express.Router();
var jsonParser = bodyParser.json()

// get all registered users from db
route.get("/", (async (req, res) => {
    var assignments = await prisma.cleanings.findMany()
    res.json(assignments)
}))

route.get("/:id", (async (req, res) =>{
    var assignment = await prisma.cleanings.findUniqueOrThrow({
        where :{
            id: parseInt(req.params.id)
        }
    }
    )
    res.json(assignment)
}))

route.get("/forcustomer/:id", (async (req, res) => {
    var assignment = await prisma.cleanings.findMany({
        where :{
            customerId: parseInt(req.params.id)
        }
    })
    res.json(assignment)
}))

route.post("/", jsonParser, (async (req, res) => {
    console.log(req.body.email)
    const addUser = await prisma.cleanings.create({
        data: {
            type: req.body.type,
            comment: req.body.comment,
            ordered: req.body.ordered,
            completed: req.body.completed,
            status: req.body.status,
            customerId: req.body.customerId
        }
    })

    res.json(addUser)
}))

route.delete("/clear", (async (req, res) => {
    await prisma.users.deleteMany()
}))

route.delete("/:id", (async (req, res) => {
    const deleted = await prisma.cleanings.delete({
        where:{
            id: parseInt(req.params.id)
        }
    })
    res.json(deleted)
}))

route.patch("/:id", jsonParser, (async (req, res) => {
    const updatedUser = await prisma.cleanings.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: {
            type: req.body.type,
            comment: req.body.comment,
            ordered: req.body.ordered,
            completed: req.body.completed,
            status: req.body.status,
            customerId: req.body.customerId
        }
    })
    res.json(updatedUser)
}))

export default route