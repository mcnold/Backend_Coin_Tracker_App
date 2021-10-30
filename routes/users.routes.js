const express = require('express'); 
const router = express.Router(); 

// Controllers 
const ctrls = require('../controllers'); 

// http://localhost:4000/users

router.post('/signup', ctrls.users.signup); 
router.post('/login', ctrls.users.login);
router.delete('/logout', ctrls.users.logout);


module.exports = router; 