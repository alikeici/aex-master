import express from "express";
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

const route = express.Router();

// CRUD
route.post("/create", (async (req, res) => {
    
    res.json(req.body.name)
}))
route.get("/get", (async (req, res) => {
    
}))
route.get("/getById:/id", (async (req, res) => {
    
}))


route.patch("/update:/id", (async (req, res) => {
    
}))
route.delete("/delete:/id", (async (req, res) => {
    
}))

export default route