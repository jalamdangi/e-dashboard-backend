const mongoose = require('mongoose')

const responseSchema = new mongoose.Schema({
    formid:String,
    userid:String,
    formtitle:String,
    responseby:String,
    content:Array,
    questions:Array
});

module.exports = mongoose.model('responses',responseSchema);