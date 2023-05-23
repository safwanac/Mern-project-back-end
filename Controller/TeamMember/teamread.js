const Team = require("../../Model/memberschema")

const teamread =async(req,res)=>{
    const _id = req.params.id
    const read = await Team.findById({_id})
 
    res.json(read)
}
module.exports = teamread;