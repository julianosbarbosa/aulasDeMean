const fileSystem =require('fs')
const files = fileSystem.readdirSync(__dirname)

files.forEach(arquivos =>console.log(arquivos))
//file System modulo fs com a função readdirSync mostra os arquivos que temos