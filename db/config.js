const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://jalamdangi:jalamdangi123@cluster0.ljes2.mongodb.net/e-commerce').then(()=>{
console.log("Database connected")}).catch((err) => console.log(err));


