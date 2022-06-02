const express = require('express')
const app = express()
require('./db/config')
const User = require('./db/User')
const Form = require('./db/Form')
app.use(express.json())
const cors = require('cors')
app.use(cors())

app.post('/register', async (req, res) => {
  let user = new User(req.body)
  let result = await user.save()
  res.send(result)
})

app.post('/login', async (req, res) => {
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body).select('-password')
    if (user) {
      res.send(user)
    } else {
      res.send({ result: 'user not found' })
    }
  } else {
    res.send({ result: 'Both fields are required' })
  }
})

app.post('/addform', async (req, res) => {
  let form = new Form(req.body)
  let result = await form.save()
  res.send(result)
})

// app.get('/',(req,res)=>{
//   res.send("response to browser")
//   console.log("response to cmd")
// });


app.listen(5000, () => {
  console.log("server is running")
})
