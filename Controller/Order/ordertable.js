const Order = require("../../Model/orderschema")

const ordertable =async(req,res)=>{
    const table = await Order.find({})
    res.json(table)
}

module.exports =ordertable;