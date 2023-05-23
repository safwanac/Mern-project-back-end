const Team = require("../../Model/memberschema")

const createteam =async(req,res)=>{
    const {Name,Email,DateOfBirth,Gender,Description,Role,PhoneNumber} =req.body

    const member = await Team.create({
        Name,
        Email,
        DateOfBirth,
        Gender,
        Description,
        Role,
        PhoneNumber
    })
}
module.exports = createteam;