// Como podemos melhorar o esse código usando TS? 

const pessoa1 = {
    nome: 'maria',
    idade: 29,
    profissao: 'atriz',
}



const pessoa2: { nome: string, idade: number, profissao: string } = {
    nome: 'roberto',
    idade: 19,
    profissao: 'Padeiro',
}

interface pessoa {
    nome: string,
    idade: number,
    profissao: string,
}

const pessoa3 = {} as pessoa;
pessoa3.nome = 'laura';
pessoa3.idade = 32;
pessoa3.profissao = 'Atriz';


const pessoa4: pessoa = {
    nome: 'carlos',
    idade: 19,
    profissao: 'padeiro',
}

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);