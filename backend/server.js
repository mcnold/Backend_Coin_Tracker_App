// External Modules 
const express = require('express');

// Internal Modules 
const routes = require('./routes'); 

// Cors
const cors = require('cors')

// PORT
const PORT = process.env.PORT || 4000; 

// Express Instance
const app = express(); 

// Database Connection 
require('./config/db.connection'); 

// Middleware (Cors)
const whitelist = ['http://localhost:3000', 'heroku frontend url here']
const corsOptions = {
  origin: (origin, callback) => {
    if(whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))

// Middleware
app.use(express.json()); 

// Routes 

app.get('/', function(req, res){
    res.send('This is the landing page!')
})

app.use('/cryptos', routes.cryptos)


// Server / listening on PORT 
app.listen(PORT, () => {
    console.log(`🎉🎊, http://localhost:${PORT}, 🎉🎊,`)
  })