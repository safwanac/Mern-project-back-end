const books = require("../Model/bookschema")

const readbook =async(req,res)=>{
    const _id = req.params.id
    console.log(_id);
    const bookread = await books.findById({_id})
    res.json(bookread)
}

module.exports = readbook;