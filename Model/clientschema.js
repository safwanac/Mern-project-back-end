const mongoose = require('mongoose')

const userschema= mongoose.Schema({
    Name:{type:String},
    UserName:{type:String},
    Email:{type:String},
    SignedStatus:{type:String},
    Role:{type:String},
    PhoneNumber:{type:Number}

})

const client = mongoose.model('client',userschema);

module.exports = client;