const express = require('express')
const cors = require('cors')
require('./db/config')
const User = require('./db/User')
const Product = require('./db/Product')
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
      res.send({ result: 'user not found' })
    }
  } else {
    res.send({ result: 'Both fields are required' })
  }
});

app.post('/addproduct', async (req, res) => {
  let product = new Product(req.body)
  let result = await product.save()
  res.send(result)
})

app.get('/productlist', async (req, res) => {
  const products = await Product.find();
  if (products.length > 0) {
    res.send(products)
  } else {
    res.send({ result: "No Products Found" })
  }
})

app.delete('/deleteproduct/:id', async (req, res) => {
  result = await Product.deleteOne({ _id: req.params.id })
  res.send(result);
})

app.get('/fetchproductbyid/:id', async (req, res) => {
  result = await Product.findOne({ _id: req.params.id })
  if (result) {
    res.send(result)
  } else {
    res.send({ result: "no record found" })
  }
})

app.listen(5000)
