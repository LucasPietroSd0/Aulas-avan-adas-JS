Exercícios de Laços e Loops em JavaScript

1. Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor
seja inválido e continue pedindo até que o usuário informe um valor válido.


var numero;

do {
  numero = parseInt(prompt("digite um numero"));

  if (numero >= 0 && numero <=10){
  document.write("está entre 0 e 10 ok")}}
   while (numero < 0 || numero > 10 || isNaN(numero));

alert("Você digitou uma nota válida: " + numero);
 
