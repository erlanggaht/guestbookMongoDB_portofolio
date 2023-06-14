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
app.use(cors({
    origin:"*",
    optionsSuccessStatus: 200
}))
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
    });
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