const mongoose = require('mongoose')

const customerschema = mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    Address:{type:String},
    City:{type:String},
    State:{type:String},
    Pincode:{type:String},
    Country:{type:String},
})

const customer = mongoose.model('customer',customerschema)

module.exports = customer;