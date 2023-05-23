const books = require("../Model/bookschema")

const remove= async (req,res)=>{

    const _id = req.params.id
    const dlt = await books.findByIdAndRemove({_id})
    res.json('data deleted')
}

module.exports = remove;