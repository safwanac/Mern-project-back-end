const client = require("../../Model/clientschema")

const readclient = async(req,res)=>{
    const Readclient = await client.find({})

    res.json(
        Readclient
    )
}

module.exports =readclient;