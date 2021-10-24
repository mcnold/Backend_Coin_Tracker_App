const mongoose = require('mongoose'); 
const { cryptos } = require('../controllers');

const cryptoSchema = new mongoose.Schema({
    coinName: {
        type: String, 
        required: true
    }, 
    favorite: {
        type: Boolean, 
        default: false
    }, 
    coinPrice: {
        type: Number, 
        default: 0 
    }, 
    coinMCap: {
        type: Number, 
        default: 0
    }, 
    coinTVol: {
        type: Number, 
        default: 0
    }, 
    coinChgPerc: {
        type: Number, 
        default: 0
    }
}); 

const Cryptos = mongoose.model('Cryptos', cryptoSchema); 

module.exports = Cryptos; 

