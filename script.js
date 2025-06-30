// script.js - código lógico com array e filtro
const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Bruno", nota: 5 },
  { nome: "Carla", nota: 6 },
  { nome: "Daniel", nota: 9 },
  { nome: "Eduarda", nota: 4 }
];

const alunosAprovados = (lista) => lista.filter(aluno => aluno.nota >= 6);

const aprovados = alunosAprovados(alunos);
aprovados.forEach(aluno => console.log(`${aluno.nome} - Nota: ${aluno.nota}`));