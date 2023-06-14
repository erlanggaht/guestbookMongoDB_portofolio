import dotenv from 'dotenv/config.js'
import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import { db } from "./config/keys.js";
import router from './router/users.js'
import cors from 'cors'
import cookieParser from "cookie-parser";
export const app = express()

const port = process.env.PORT
// Cookie Parser
app.use(cookieParser())
// Body parser
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
// MongoDb Connect
mongoose  
.connect(db.mongoURL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4,
})
.then ((success) => console.log('berhasil konek ke database') )
.catch((error) => console.log({'Gagal Konek' : error}))

// EndPoint
app.use('/api/',router)


app.listen(port,() =>{
    console.log('connect to port 8000')
})