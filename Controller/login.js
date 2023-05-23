const User = require("../Model/schema")
const bcrypt = require('bcrypt')

const login =async(req,res)=>{
    const {email,password} = req.body
    const check = await User.findOne({email})

    if (check) {
        if (check.email === email && (await bcrypt.compare(password,check.password))) 
        {
            console.log('LOGIN SUCCESS');

            res.json({
                email:check.email,
                password:check.password,
                message:"LOGI SUCCESS"
            })
        }
    
         else {
            console.log('LOGIN FAILED');
            res.json('LOGIN FAILED')
        }
    
    }
}

module.exports = login;