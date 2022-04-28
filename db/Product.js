const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    productname:String,
    productprice:String,
    productcategory:String,
    productbrand:String,
    userid:String
})
module.exports = mongoose.model("products", productSchema);