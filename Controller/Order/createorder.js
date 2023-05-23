const Order = require("../../Model/orderschema")

const createorder =async(req,res)=>{
    const {FirstName,LastName,OrderId,ProductNumber,Date,Street,Additional,Pincode,
        Place,Country,ContactNumber} =req.body

        const order = await Order.create({
            FirstName,
            LastName,
            OrderId,
            ProductNumber,
            Date,
            Street,
            Additional,
            Pincode,
            Place,
            Country,
            ContactNumber
        })
        
}

module.exports = createorder;