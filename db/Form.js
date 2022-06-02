const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    formid:String,
    userid:String,
    title:String,
    description:String,
    question:Array
});

module.exports = mongoose.model('forms',formSchema);