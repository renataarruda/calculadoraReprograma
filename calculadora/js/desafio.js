var inputValorHora = document.querySelector('#valor-hora')

console.log(inputValorHora)

var inputHorasProjeto = document.querySelector('#horas-projeto')

console.log(inputHorasProjeto)

var resposta = document.querySelector('#resposta')

function calcular(){
    
   var valor = inputValorHora.value
   console.log(valor)
 
   var horas = inputHorasProjeto.value
   console.log(horas)

   var resultado = valor*horas
   console.log(resposta)

   var valorDuasCasas = resultado.toFixed(2)
   console.log(valorDuasCasas)

   resposta.textContent = valorDuasCasas
}