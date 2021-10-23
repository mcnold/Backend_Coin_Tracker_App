const express = require('express'); 
const router = express.Router(); 

// Controllers 
const ctrls = require('../controllers'); 

// http://localhost:4000/cryptos

router.get('/', ctrls.cryptos.index); 
router.post('/', ctrls.cryptos.create); 
router.delete('/:id', ctrls.cryptos.destroy);


module.exports = router; 