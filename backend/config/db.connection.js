// Require Mongoose 
const mongoose = require('mongoose'); 

// Connection String to MongoDB Database
const connectionStr = process.env.MONGODB_URI || 'mongodb://localhost:27017/CryptosDB'; 

// Set Connection 

mongoose.connect(connectionStr, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
})

mongoose.connection.on('connected', () => console.log('mongodb connected')); 

mongoose.connection.on('error', (error)=> console.log(error.message));

mongoose.connection.on('disconnected', () => console.log('mongodb disconnected')); 
    
