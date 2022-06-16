const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    userid:String,
    formid:String,
    formtitle:String,
    formfields:Array
});

module.exports = mongoose.model('forms',formSchema);