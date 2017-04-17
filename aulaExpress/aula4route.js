const express=require('express')
const server = express()

server.route('/clientes')
    .get(function(req,res){
        res.send('Lista de clientes');
    })
    .post(function(req,res){
        res.send('Novo cliente');
    })
    .put(function(req,res){
        res.send('Altera cliente');
    })
    .delete(function(req,res){
        res.send('Remove cliente');
    })
server.listen(3000,function(){
    console.log('servidor ligado na porta 3000')
}) //o route podemos encadear requisições ao servidor