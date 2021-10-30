const db = require('../models'); 
const bcrypt = require('bcrypt')

// POST Sign up Route

const signup = (req, res) => {
    // res.send('I hit this route')
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  
    db.Users.create(req.body, (error, createdUser) => {
      if(error) {
        res.status(400).json({ error: error.message })
      } else {
        console.log("user has signed up")
        res.status(201).json(createdUser)
      }
    })
}
  

// User Login route

const login = (req, res) => {
    db.Users.findOne({ username: req.body.username }, (err, foundUser) => {
        if(err) {
          res.send(err)
        } else {
          if (foundUser) {
            if (bcrypt.compareSync(req.body.password, foundUser.password)){
              // login user and create session
              req.session.currentUser = foundUser
              console.log('User has logged in')
              res.status(200).json(foundUser)
            } else {
              res.status(404).json({error: 'Incorrect Password'})
            }
          } else {
            res.status(400).json({ error: err })
          }
        }
    })
}

// Delete User / Destroy

const logout = (req, res) => {
    req.session.destroy(() => {
        res.status(200).json({ msg: 'User logged out' })
    })
}


module.exports = {
    signup, 
    login, 
    logout, 
}