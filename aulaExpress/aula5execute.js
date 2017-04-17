const express=require('express')
const server = express()
const router = require('./aula5router')

server.use('/api', router)

server.listen(3000,function(){
    console.log('servidor ligado na porta 3000')
}) //api que exculta o router