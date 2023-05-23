const Order = require("../../Model/orderschema")

const orderupdate =async(req,res)=>{
    const {FirstName,LastName,OrderId,ProductNumber,Date,Street,Additional,Pincode,
        Place,Country,ContactNumber} =req.body

        const _id =req.params.id
        const update = await Order.findByIdAndUpdate(_id,{FirstName,LastName,OrderId,ProductNumber,Date,Street,
            Additional,Pincode,Place,Country,ContactNumber})

        res.json(update)
}

module.exports =orderupdate;