const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./db')
const cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT || 5000

app.get('/',(req ,res)=>{
    res.send('Hello world')
})

app.listen(PORT,()=>{
    console.log(`Server is up and listing on ${PORT}`)
})
