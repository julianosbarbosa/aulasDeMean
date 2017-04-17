process.stdout.write('Ta manjando node? ')
process.stdin.on('data', function(data){
    process.stdout.write(`Sua resposta foi ${data.toString()} Obrigado \n`)
    process.exit()
}) //eventos de entrada e saida pelo console