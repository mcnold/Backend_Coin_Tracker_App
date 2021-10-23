// require models 
const db = require('../models'); 

// Index
const index = (req, res) => {
    res.send('route is working')
}

// Create
const create = (req, res) => {
    db.cryptos.create(req.body, (error, createdCrypto) => {
        if(error) return res.status(400).json({error: error.message}); 

        return res.status(201).json(createdCrypto); 
    }); 
}

// Update

// Destroy

module.exports = {
    index,
    create,  
}