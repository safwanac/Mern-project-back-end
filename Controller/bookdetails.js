const books = require("../Model/bookschema");

const create = async(req,res)=>{
    const {Name,Author,Year,Publication,Availability} = req.body

    const bookdetails =await books.create({
        Name,
        Author,
        Year,
        Publication,
        Availability
    })
    res.json({
        Name:bookdetails.Name,
        Author:bookdetails.Author,
        Year:bookdetails.Year,
        Publication:bookdetails.Publication,
        Availability:bookdetails.Availability
    })
}

module.exports = create;

