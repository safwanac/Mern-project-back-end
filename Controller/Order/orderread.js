const Order = require("../../Model/orderschema")

const orderread =async(req,res)=>{
    const _id = req.params.id
    const read =await Order.findById({_id})
    res.json(read)
}

module.exports =orderread;