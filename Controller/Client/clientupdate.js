const client = require("../../Model/clientschema")

const clientupdate =async(req,res)=>{
    const {Name,UserName,Email,SignedStatus,Role,PhoneNumber} =req.body
    const _id =req.params.id

    const update = await client.findByIdAndUpdate(_id,{Name,UserName,Email,SignedStatus,Role,PhoneNumber})

    res.json(update)
}
module.exports =clientupdate;  