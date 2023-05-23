const Team = require("../../Model/memberschema");

const teamdelete =async(req,res)=>{

    const _id = req.params.id
    const delet = await Team.findByIdAndRemove({_id})
    res.json('deleted')
}
module.exports = teamdelete;