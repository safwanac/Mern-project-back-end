const mongoose =require('mongoose')

const userschema= mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    DateOfBirth:{type:String},
    Gender:{type:String},
    Description:{type:String},
    Role:{type:String},
    PhoneNumber:{type:String},

})

const Team = mongoose.model('team member',userschema)

module.exports = Team;