// Muda o nome a partir do seletor de classe
var subtitulo = document.querySelector(".subtitulo");
subtitulo.textContent = "Meus Pacientes";
var titulo = document.querySelector(".titulo");
titulo.textContent = "Gilberto Nutricionista";

// Acessa a tag tr - pacientes
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    // Seleciona o conteúdo do peso e altura
    var tdpeso = paciente.querySelector(".info-peso");
    var peso = parseFloat(tdpeso.textContent);  // Convertendo para número (garante que será um valor numérico)

    var tdaltura = paciente.querySelector(".info-altura");
    var altura = parseFloat(tdaltura.textContent);  // Convertendo para número (garante que será um valor numérico)

    // Acessa a célula do IMC
    var tdimc = paciente.querySelector(".info-imc");

    // Variáveis para verificar se peso e altura são válidos
    var pesoValido = true;
    var alturaValida = true;

    // Verifica se o peso e a altura são válidos
    if (peso <= 0 || peso >= 1000) {
        pesoValido = false;
        tdimc.textContent = "Peso inválido";
        paciente.classList.add("campo-invalido"); // Adiciona uma classe CSS para destacar o campo
    }

    if (altura <= 0 || altura >= 3.00) {
        alturaValida = false;
        tdimc.textContent = "Altura inválida";
        paciente.classList.add("campo-invalido"); // Adiciona uma classe CSS para destacar o campo
    }

    // Se peso e altura forem válidos, calcula o IMC
    if (pesoValido && alturaValida) {
        var imc = calcularImc(peso, altura);  // Calcula o IMC
        tdimc.textContent = imc;  // Exibe o IMC
    }
}

// Quando clicar no título, aparece uma mensagem
titulo.addEventListener('click', mostraMensagem);

function mostraMensagem() {
    alert("Este elemento foi clicado");
}

// Função para calcular o IMC
function calcularImc(peso, altura) {
    // Fórmula correta: peso / (altura * altura)
    var imc = peso / (altura * altura);
    return imc.toFixed(2); // Retorna o IMC arredondado para 2 casas decimais
}


