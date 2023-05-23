const User = require('../Model/schema')
const bycrpt = require('bcrypt')
const jwt = require('jsonwebtoken')


const usercreate = async(req,res)=>{
    const {firstname,lastname,email,password} = req.body

    const salt = await bycrpt.genSalt(10)
    const hash = await bycrpt.hash(password,parseInt(salt))
    console.log(hash);

    
    const exist =await User.findOne({lastname})

    if (exist) {
        res.json('USER ALREADY EXIST')
    }
    if(!firstname || !lastname || !email || !password){
        res.json('INPUT IS MISSING ')
    }
    if ( password.length < 6) {
        res.json('PASSWORD: ENTER MINIMUM 6 CHARACTER')
    }
    else{
        const userdetails =await User.create({
            firstname,
            lastname,
            email,
            password:hash
        })
        res.json({
            firstName:userdetails.fistname,
            lastName:userdetails.lastname,
            email:userdetails.email,
            password:userdetails.password,
            Token:tokengenerate(userdetails._id)
        })
    }

}



const tokengenerate = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'1d',

    })
}

module.exports = usercreate;