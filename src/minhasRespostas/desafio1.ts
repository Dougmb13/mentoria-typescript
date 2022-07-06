// Como podemos rodar isso em um arquivo .ts sem causar erros? 

//let employee = {};
//employee.code = 10;
//employee.name = "John";

// Resposta 1
const employee = {
   code: 10,
   name: 'John'
}

console.log(employee);
console.log(employee.code);
console.log(employee.name);


// Resposta 2
const funcionario: {code: number, name: string} ={
    code: 10,
    name: "Douglas",
}

console.log(funcionario);

// Resposta 3
interface aluno{
    id: number,
    name: string,
    status: boolean,
}

const alunoObj = {} as aluno;
alunoObj.id = 5;
alunoObj.name = 'Douglas';
alunoObj.status = true;
console.log(alunoObj);

// Resposta 4
const professorObj: aluno = {
    id: 10,
    name: 'Douglas',
    status: true,
}
console.log(professorObj);