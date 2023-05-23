const customer = require("../../Model/customerschema")

const customerupdate =async(req,res)=>{
    const {Name,Email,Address,City,State,Pincode,Country} =req.body
    const _id =req.params.id

    const update = await customer.findByIdAndUpdate(_id,{Name,Email,Address,City,State,Pincode,Country})

    res.json(update)
}
module.exports =customerupdate;