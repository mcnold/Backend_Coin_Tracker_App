// require models 
const db = require('../models'); 

// Index
const index = (req, res) => {
   // res.send('route is working')
   db.cryptos.find({}, (error, cryptos) => {
       if(error) return res.status(400).json({ error: error.message}); 

       return res.status(200).json(cryptos)
   }); 
}

// Create
const create = (req, res) => {
    db.cryptos.create(req.body, (error, createdCrypto) => {
        if(error) return res.status(400).json({error: error.message}); 

        return res.status(201).json(createdCrypto); 
    }); 
}

// Update
const update = (req, res) => {
    db.cryptos.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        {new: true}, 
        (error, updatedCrypto) => {
            if(error) return res.status(400).json({error: error.message}); 

            return res.status(200).json(updatedCrypto); 
        }); 
}

// Destroy
const destroy = (req, res) => {
    db.cryptos.findByIdAndDelete(req.params.id, (error, deletedCrypto) => {
        if(error) return res.status(400).json({error: error.message}); 

        return res.status(200).json({
            message: `Cryptocurrency ${deletedCrypto.coinName} deleted successfully`
        })
    }); 
}

module.exports = {
    index,
    create,
    update,   
    destroy, 
}