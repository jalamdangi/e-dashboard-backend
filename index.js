const { response } = require('express');
const express = require('express');
require('./db/config');
const User = require('./db/User');
const app = express();
app.use(express.json());

// app.get("/", (req, res)=>{
//     res.send("App is working");
// })

app.post("/register", async(req,res)=>{
    res.send(req.body);
    let user = new User(req.body);
    let result = await user.save();
    response.send(result);
})

app.listen(5000);
