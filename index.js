const express = require('express')
const config=require('config')


const app = express()
var cors = require('cors')


app.use(cors());
app.options('*', cors()) 
const port =  8080


require('./startup/routes')(app)


const server = app.listen(port, () =>  { console.log("Server listening on port : " , port)})



module.exports = server

