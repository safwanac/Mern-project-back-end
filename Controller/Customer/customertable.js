const customer = require("../../Model/customerschema");

const customertable = async(req,res)=>{
    const readcustomer = await customer.find({})

    res.json(
     readcustomer   
    )
}

module.exports =customertable;