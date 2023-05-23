const customer = require("../../Model/customerschema")

const createcustomer =async(req,res)=>{
    const {Name,Email,Address,City,State,Pincode,Country} =req.body

    const Customer = await customer.create({
        Name,
        Email,
        Address,
        City,
        State,
        Pincode,
        Country
    })
}
module.exports = createcustomer;