// External Modules 
const express = require('express');

// Internal Modules 
const routes = require('./routes'); 

// PORT
const PORT = process.env.PORT || 4000; 

// Express Instance
const app = express(); 

// Database Connection 
require('./config/db.connection'); 

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