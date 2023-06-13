import express from 'express'
import session from 'express-session'

const app = express()
export function setCookie (req,res,next)  {
  res.header('Access-Control-Allow-Origin', 'https://portofolio-six-orpin.vercel.app/');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  
  app.set('trust proxy', 1) // trust first proxy
  app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false,sameSite:'none' }
  }))
    next()

}
