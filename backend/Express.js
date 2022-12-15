import express from 'express'
import cors from 'cors';

const server = express();

const PORT = process.env.PORT || 5000;

server.use(express.json())

const corsConfig = {
    origin: "http://localhost:3000"
}
server.use(cors(corsConfig))

server.listen(PORT, () => console.log(`Server started on ${PORT}`))