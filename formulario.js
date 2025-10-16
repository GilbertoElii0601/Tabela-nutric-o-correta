//acessa o botao
var botaoAdicionar = document.querySelector("#adicionar-paciente");

//executa os codigos ao clicar no botao:
botaoAdicionar.addEventListener('click',function(event){
event.preventDefault();

//acessa o formulario
var formulario = document.querySelector("#form-adiciona");

var paciente = criarTr(paciente);


//variavel para acessar Tdbody e criar a tabela
var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);

});

var nome = formulario.nome.value;
var peso = formulario.peso.value;
var altura = formulario.altura.value;
var gordura = formulario.gordura.value;

function criarTr(paciente){
    //criar as tags <tr>
var pacientes = document.createElement("tr");

//cria as tags <td>
var nomeTd = document.createElement("td");
var pesoTd = document.createElement("td");
var alturaTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("td");

//adiciona valor as tags criadas
nomeTd.textContent = paciente.nome;
pesoTd.textContent = paciente.peso;
alturaTd.textContent = paciente.altura;
gorduraTd.textContent = paciente.gordura;
imcTd.textContent = calcularIMC(peso, altura);

//adicionar as tags na tela do usuario
pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);

return paciente;
}