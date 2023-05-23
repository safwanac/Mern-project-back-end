const Team = require("../../Model/memberschema")

const teamupdate =async(req,res)=>{
    const {Name,Email,DateOfBirth,Gender,Description,Role,PhoneNumber} =req.body
    const _id =req.params.id

    const update = await Team.findByIdAndUpdate(_id,{Name,Email,DateOfBirth,Gender,Description,Role,PhoneNumber})

    res.json(update)
}
module.exports =teamupdate;