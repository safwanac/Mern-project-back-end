const express = require('express')
const router = require('./Router/routes')
const connectDB = require('./config/db')
const dotenv = require('dotenv')
const cors =require('cors')

const app =express()
connectDB()
dotenv.config()
app.use(cors())

app.use(express.json())
app.use('/',router)

app.get('/',(req,res)=>{
    res.send('HELLO')
})

const port = process.env.PORT || 8001
app.listen(port,console.log(`server is running on ${port}`));