const mongoose = require('mongoose')

const userschema = mongoose.Schema({
    firstname:{type:String},
    lastname:{type:String},
    email:{type:String},
    password:{type:String}
})

const User = mongoose.model("project",userschema)

module.exports = User;