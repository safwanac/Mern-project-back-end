const books = require("../Model/bookschema")

const bookupdate =async (req,res)=>{
    const {Name,Author,Year,Publication,Availability} = req.body
    const _id = req.params.id

    const updatebook = await books.findByIdAndUpdate(_id,{Name,Author,Year,Publication,Availability})

    res.json(updatebook)
}

module.exports = bookupdate;