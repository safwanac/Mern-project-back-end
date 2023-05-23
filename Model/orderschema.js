const mongoose =require('mongoose')

const userschema = mongoose.Schema({
    FirstName:{type:String},
    LastName:{type:String},
    OrderId:{type:String},
    ProductNumber:{type:Number},
    Date:{type:String},
    Street:{type:String},
    Additional:{type:String},
    Pincode:{type:Number},
    Place:{type:String},
    Country:{type:String},
    ContactNumber:{type:Number},

})
const Order = mongoose.model('order',userschema)

module.exports = Order;