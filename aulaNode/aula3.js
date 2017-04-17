const s1 = require('./aula3singleton')
const s2 = require('./aula3singleton')

s1.exibirProximo()
s2.exibirProximo()
s1.exibirProximo()
s2.exibirProximo()// tanto a constante s1 quanto a s2 estao opreando o mesmo modulo, gerando um unico resultado devolvido