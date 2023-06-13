import express from 'express'
import session from 'express-session'

const app = express()
export function setCookie (req,res,next)  {
 
 
    next()

}
