const client = require("../../Model/clientschema")

const clientdelete =async(req,res)=>{

    const _id = req.params.id
    const delet = await client.findByIdAndRemove({_id})
    res.json('deleted')
}
module.exports = clientdelete;