const customer = require("../../Model/customerschema");

const customerdelete =async(req,res)=>{

    const _id = req.params.id
    const delet = await customer.findByIdAndRemove({_id})
    res.json('deleted')
}
module.exports = customerdelete;