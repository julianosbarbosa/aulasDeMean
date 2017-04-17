const express=require('express')
const server = express()

server.get('/',function(req,res){
    res.send('<h1>Teste map</h1>')
})

server.all('/outra',function(req,res){
    res.send('<h1>Outra requisição</h1>');
})

server.get(/api/, function(req,res){
    res.send('<h1>Expressao que filtra pelo nome API na url</h1>')
})

server.listen(3000,function(){
    console.log('servidor ligado na porta 3000')
}) //foi feito o mapeamento das url o colocou o servidor para escultar a porta 3000
