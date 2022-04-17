/*3. Crie um objeto JSON que abriga todas as operações do exercício 2.*/

const operacoes = 
{
    soma: 'soma',
    sub: 'sub',
    div: 'div',
    multplic: 'multplic',
}

//Obj em json
const jsonOp = JSON.stringify(operacoes)

//json para obj
const objOp = JSON.parse(jsonOp)
