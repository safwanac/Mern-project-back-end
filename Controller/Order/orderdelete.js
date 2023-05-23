const Order = require("../../Model/orderschema")

const orderdelete =async(req,res)=>{

    const _id =req.params.id
    const remove =await Order.findByIdAndRemove({_id})
    res.json('deleted')
}

module.exports =orderdelete;