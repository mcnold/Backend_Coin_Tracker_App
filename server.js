// External Modules 
const express = require('express');

// Internal Modules 
const routes = require('./routes'); 

// Cors
const cors = require('cors')

// Require Session 
const session = require('express-session')

//Require dotenv npm package
require('dotenv').config(); 

// PORT
const PORT = process.env.PORT; 

// Express Instance
const app = express(); 

// Database Connection 
require('./config/db.connection'); 

// Middleware (Cors)
const whitelist = ['http://localhost:3000', 'https://front-mycointracker.herokuapp.com/']
const corsOptions = {
  origin: (origin, callback) => {
    if(whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }, 
  credentials:true 
}

app.use(cors(corsOptions))

// User Authentication Middleware 
const SESSION_SECRET = process.env.SESSION_SECRET
console.log(SESSION_SECRET)

app.use(
    session({
        secret: SESSION_SECRET, 
        resave: false,
        saveUninitialized: false,
    })
)
  
const isAuthenticated = (req, res, next) => {
      if (req.session.currentUser) {
          return next()
      } else {
          res.status(403).json({msg:"login required"})
      }
}

// Middleware
app.use(express.json()); 

// Routes 
app.get('/', function(req, res){
    res.send('This is the landing page!')
})

app.use('/cryptos', isAuthenticated, routes.cryptos)
app.use('/users', routes.users)

// Server / listening on PORT 
app.listen(PORT, () => {
    console.log(`🎉🎊, http://localhost:${PORT}, 🎉🎊,`)
  })