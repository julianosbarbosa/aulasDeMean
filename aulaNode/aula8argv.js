function temParam(param){
    return process.argv.indexOf(param) !== -1
} 

if(temParam('--producao')){
    console.log('Atenção Total...foi passado um parametro')
}else{
    console.log('Tranquilo...não foi passado nenhum parametro')
} //argv envia e recebe parametros passado no console