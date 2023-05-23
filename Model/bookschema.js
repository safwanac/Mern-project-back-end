const mongoose = require('mongoose')

const userschema = mongoose.Schema({
    Name:{type:String},
    Author:{type:String},
    Year:{type:Number},
    Publication:{type:String},
    Availability:{type:String}
})

const books = mongoose.model('project1',userschema)

module.exports = books;