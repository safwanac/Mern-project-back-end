const client = require("../../Model/clientschema")

const createclient =async(req,res)=>{
    const {Name,UserName,Email,SignedStatus,Role,PhoneNumber} = req.body
    const create = await client.create({
        Name,
        UserName,
        Email,
        SignedStatus,
        Role,
        PhoneNumber
    })
}
module.exports = createclient;