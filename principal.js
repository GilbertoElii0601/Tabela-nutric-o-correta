//muda o nome a partir do seletor classe
var subtitulo = document.querySelector(".subtitulo");
var titulo = document.querySelector(".titulo");
titulo.textContent = "Betin Nutricionista🥸";
subtitulo.textContent = "Meus pacientes";


//acessar a tag tr - paciente Paulo
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
//seleciona o conteudo da tag
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

//seleciona o conteudo altura da tag
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

//acessa o IMC
var imc = peso/(altura * altura);

//acessa e altera o IMC
var tdImc = paciente.querySelector(".info-imc");
tdImc.TextContent = imc;

//variaveis com valor true
var pesoValido = true;
var alturaValido = true;
tdImc.textContent = "Altura Invalida";

//define limites do de oesi e altura
if(peso < 0 || peso > 1000){
    alert("peso pesado");
    var pesoValido = false;
}

if(altura < 0 || altura > 3.00){
    alert("altura Invalida");
    var alturaValido = false;
}
}
    
//quando clicar no no titulo aparece mensagem
titulo.addEventListener("click", mostreMensagem);
function mostreMensagem(){
    alert ("Este elemento foi clicado");
}

//acessa o botão 
var botaoAdicionar = document.querySelector("#adicionar-paciente");
//executa os códigos ao clicar no botão
botaoAdicionar.addEventListener("click", function(event){
    
    //acessa o formulario
var formulario = document.querySelector("#form-adiciona");

//captura os valores digitados
var nome = formulario.nome.value;
var peso = formulario.peso.value;
var altura = formulario.altura.value;
var gordura = formulario.gordura.value;

//cria a tag . <tr>
var pacienteTd = document.createElement("tr");
//criea a tag . <td>
var nomeTd = document.createElement("td");
var pesoTd = document.createElement("td");
var alturaTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("td");
event.preventDefault();

//adiciona os valores
nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;
imcTd.textContent = imc;


});




