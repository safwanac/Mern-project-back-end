const Team = require("../../Model/memberschema")

const teamtable = async(req,res)=>{
    const readteam = await Team.find({})

    res.json(
     readteam   
    )
}
module.exports = teamtable;