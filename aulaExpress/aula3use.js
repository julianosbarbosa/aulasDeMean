const express=require('express')
const server = express()

server.use(function(req, res, next){
    console.log('Inicio')
    next()
    console.log('fim')
})
server.use(function(req, res){
    console.log('Este é o medleware que o next chamou')  
    res.send('<h1>teste com use</h1>') 
})


server.listen(3000,function(){
    console.log('servidor ligado na porta 3000')
}) // o use usa todos metodos http e passa o medleware sem precisar de um endereço
