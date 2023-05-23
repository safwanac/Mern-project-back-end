const books = require("../Model/bookschema")

const read = async(req,res)=>{
    const readdetails = await books.find({})
    
    res.json(readdetails)
}

module.exports =read;