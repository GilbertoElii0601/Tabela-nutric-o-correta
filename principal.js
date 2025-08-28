//muda o nome a partir do seletor classe
var pacientes = document.querySelector(".subtitulo");
pacientes.textContent = "Meus Pacientes";
var pacientes = document.querySelector(".titulo");
pacientes.textContent = "Betin Nutricionista🥸";




//acessar a tag tr - paciente Paulo
var paciente = document.querySelector("#primeiro-paciente");
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
//define o peso
if(peso < 0 || peso > 1000){
    alert("peso duzao");
}

if(altura < 0 || altura > 3.00){
    alert("altura Invalida");
}