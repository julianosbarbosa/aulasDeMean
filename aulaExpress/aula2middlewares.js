const express=require('express')
const server = express()

server.get('/',function(req,res, next){
    console.log('Inicio')
    next()
    console.log('fim')
})
server.get('/',function(req,res){
    console.log('Este é o medleware que o next chamou')  
    res.send('<h1>teste medleware</h1>') 
})


server.listen(3000,function(){
    console.log('servidor ligado na porta 3000')
}) // aula de como usar um medleware
