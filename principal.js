//muda o nome a partir do seletor classe
var pacientes = document.querySelector(".subtitulo");
var titulo = document.querySelector(".titulo");
titulo.textContent = "Betin Nutricionista🥸";
subtitulo.textContent = "Meus pacientes";


//acessar a tag tr - paciente Paulo
var paciente = document.querySelectorAll(".paciente");

for(var 1 = 0; 1 < paciente.length; 1++){
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
    

