const customer = require("../../Model/customerschema");

const customerread =async(req,res)=>{
    const _id = req.params.id
    const read = await customer.findById({_id})
 
    res.json(read)
}

module.exports = customerread;