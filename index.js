const express = require('express')
const cors = require('cors')
require('./db/config')
const User = require('./db/User')
const app = express()
app.use(express.json())
app.use(cors())

app.post('/register', async (req, res) => {
  // res.send(req.body);
  let user = new User(req.body)
  let result = await user.save()
  res.send(result.name)
})

app.post('/login', async (req, res) => {
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body).select('-password')
    if (user) {
      res.send(user)
    } else {
      res.send({result :'user not found'})
    }
  } else {
    res.send({result :'Both fields are required'})
  }
});

app.listen(5000)
