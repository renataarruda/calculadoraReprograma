var inputGanhoMes = document.querySelector('#ganho-mes')

console.log(inputGanhoMes)

var inputHorasDias = document.querySelector('#horas-dia')

console.log(inputHorasDias)

var resposta = document.querySelector('#resposta')

function calcularValorHora(){
    //pegando valor do ganho mes
   var salario = inputGanhoMes.value
   console.log(salario)
 
   //pegando valor do horas dias
   var horas = inputHorasDias.value
   console.log(horas)

   //calculando o valor de horas por mes (quantidade de horas 
   //x 22 dias úteis)
   var horasMes = horas*22
   console.log(horasMes)

   //dividindo o salário do mês pelas horas trabalhadas no mês 
   //e fixando duas casas decimais
   var valorHora = salario/horasMes
   var valorDuasCasas = valorHora.toFixed(2)
   console.log(valorDuasCasas)

   //exibindo o valor calculado na tela
   resposta.textContent = valorDuasCasas
}