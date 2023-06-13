import express from 'express'
import session from 'express-session'

const app = express()
export function setCookie (req,res,next)  {

  app.set('trust proxy', 1) // trust first proxy
  app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false,sameSite:'none' }
  }))
  console.log('okehhhh')
    next()

}
