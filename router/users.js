import express from 'express'
import GeustBookControllers from '../controllers/guestbook.js';

const router = express.Router();


router.get('/',(req,res)=>{
    res.send('selamat datang di api kami')
})

// Create Endpoint
router.post('/create',GeustBookControllers.create)

// getData EndPoint
router.get('/users',GeustBookControllers.get)

// geDataByName Endpoint
router.get('/user/:name',GeustBookControllers.getByName)


export default router