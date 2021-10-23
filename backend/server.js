// External Modules 
const express = require('express');

// Internal Modules 

// PORT
const PORT = process.env.PORT || 4000; 

// Express Instance
const app = express(); 

// Database Connection 

// Middleware


// Routes 

app.get('/', function(req, res){
    res.send('This is the landing page!')
})


// == Server Bind ==
app.listen(PORT, () => {
    console.log(`🎉🎊, http://localhost:${PORT}, 🎉🎊,`)
  })