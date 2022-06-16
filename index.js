const express = require('express')
const app = express()
require('./db/config')
const User = require('./db/User')
const Form = require('./db/Form')
const Response = require('./db/Response')
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


app.get('/fetchformbyuserid/:id', async (req, res) => {
  result = await Form.find({ userid: req.params.id })
  if (result) {
    res.send(result)
  } else {
    res.send({ result: "no record found" })
  }
})

app.delete('/deleteformbyformid/:id', async (req, res) => {
  result = await Form.deleteOne({formid:req.params.id})
  res.send(result);
})



app.get('/fetchformbyformid/:id', async (req, res) => {
  const result = await Form.findOne({ formid: req.params.id })
  if (result) {
    res.json(result)
  } else {
    res.send({ result: "no record found" })
  }
})

app.post('/addresponse', async (req, res) => {
  let response = new Response(req.body)
  let result = await response.save()
  res.send(result)
})


app.get('/fetchformresponsebyformid/:id', async (req, res) => {
  const result = await Response.find({ formid: req.params.id })
  if (result) {
    res.send(result)
  } else {
    res.send({ result: "no record found" })
  }
})

app.put('/updateform/:id', async(req, res)=>{
  let result = await Form.updateOne(
    {formid:req.params.id},
    {$set:req.body}
  )
  res.send(result);
})


// app.get('/',(req,res)=>{
//   res.send("response to browser")
//   console.log("response to cmd")
// });


app.listen(5000, () => {
  console.log("server is running")
})
