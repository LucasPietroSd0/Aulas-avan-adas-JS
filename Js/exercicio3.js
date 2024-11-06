/*Exercícios de Laços e Loops em JavaScript

1. Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor
seja inválido e continue pedindo até que o usuário informe um valor válido.*/


var numero;

do {
  numero = parseInt(prompt("digite um numero"));

  if (numero >= 0 && numero <=10){
  document.write("está entre 0 e 10 ok")}}
   while (numero < 0 || numero > 10 || isNaN(numero));

alert("Você digitou uma nota válida: " + numero);


/*2. Crie um loop que imprima todos os números de 1 a 100.*/

for (var i = 0 ; i <101 ; i++){document.write(i + " ")}

3. Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao
nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

  // Função para solicitar o nome de usuário e senha
function pedirUsuarioESenha() {
  let usuario, senha;
  
  // Loop até que a senha seja diferente do nome de usuário
  while (true) {
    usuario = prompt("Digite o nome de usuário:");
    senha = prompt("Digite a senha:");

    // Verifica se a senha é igual ao nome de usuário
    if (usuario === senha) {
      alert("Erro: A senha não pode ser igual ao nome de usuário. Tente novamente.");
    } else {
      alert("Cadastro realizado com sucesso!");
      break; // Sai do loop quando a senha for válida
    }
  }
}
  
4. Faça um programa que leia e valide as seguintes informações:
a. Nome: maior que 3 caracteres;
b. Idade: entre 0 e 150;
c. Salário: maior que zero;
d. Sexo: 'f' ou 'm';
e. Estado Civil: 's', 'c', 'v', 'd';
Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length


function teste(){
var nome , idade, salario , sexo ,estadocivil;


while (true){
nome = prompt("digite seu nome")
if (nome.length > 3){
  break;
}else {alert ("Erro: O nome deve ter mais que 3 caracteres. Tente novamente.")}
}

while (true){
  idade = parseInt(prompt("digite sua idade"))

  if(idade > 0 && idade <= 150){
break;
  }
  else {alert("digite uma idade entre 0 e 150")}
}

while (true){
salario = parseInt(prompt("digite seu salario"))

if(salario > 0 ){break;} 
else{alert("digite um salario maior que 0")}
}

while (true){
  sexo = prompt("digite seu sexo")

if (sexo == "f" || sexo == "m" || sexo == "F"||sexo == "M" ){break;}
else{alert("sexo tem que ser m ou f")}

}
while (true){
  estadocivil = prompt("digite seu estado civil")

if(estadocivil == "s" || estadocivil == "c" || estadocivil == "v" ||estadocivil == "d"){break;}
  else(alert("digite uma letra 's', 'c', 'v', 'd'"))
}alert(`Informações cadastradas com sucesso!\nNome: ${nome}\nIdade: ${idade}\nSalário: R$ ${salario.toFixed(2)}\nSexo: ${sexo}\nEstado Civil: ${estadocivil}`);

}
teste()

5. Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual
de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de
crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para
que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de
crescimento.



function calcularAnosParaIgualarPopulacao(populacaoA, populacaoB, taxaCrescimentoA, taxaCrescimentoB) {
    let anos = 0;
    // Enquanto a população de A for menor que a de B
    while (populacaoA < populacaoB) {
        populacaoA *= (1 + taxaCrescimentoA / 100);  // Atualiza a população de A com base na taxa de crescimento
        populacaoB *= (1 + taxaCrescimentoB / 100);  // Atualiza a população de B com base na taxa de crescimento
        anos++;  // Incrementa o número de anos
    }
    return anos;
}

// Dados do problema
let populacaoA = 80000;      // População inicial do país A
let populacaoB = 200000;     // População inicial do país B
let taxaCrescimentoA = 3;    // Taxa de crescimento anual do país A
let taxaCrescimentoB = 1.5;  // Taxa de crescimento anual do país B

// Calculando o número de anos necessários
let anos = calcularAnosParaIgualarPopulacao(populacaoA, populacaoB, taxaCrescimentoA, taxaCrescimentoB);

document.write(`Será necessário(s) ${anos} ano(s) para a população de A ultrapassar ou igualar a população de B.`);


  
6. Altere o programa anterior permitindo ao usuário informar as populações e as taxas de
crescimento iniciais. Valide a entrada e permita repetir a operação.

  function calcularAnosParaIgualarPopulacao(populacaoA, populacaoB, taxaCrescimentoA, taxaCrescimentoB) {
    let anos = 0;
    // Enquanto a população de A for menor que a de B
    while (populacaoA < populacaoB) {
        populacaoA *= (1 + taxaCrescimentoA / 100);  // Atualiza a população de A com base na taxa de crescimento
        populacaoB *= (1 + taxaCrescimentoB / 100);  // Atualiza a população de B com base na taxa de crescimento
        anos++;  // Incrementa o número de anos
    }
    return anos;
}

function pedirNumeroValido(mensagem, minimo) {
    let numero;
    do {
        numero = parseFloat(prompt(mensagem)); // Solicita a entrada do usuário
        if (isNaN(numero) || numero <= minimo) {
            alert(`Por favor, insira um valor válido maior que ${minimo}.`);
        }
    } while (isNaN(numero) || numero <= minimo); // Valida que o número seja válido e maior que o valor mínimo
    return numero;
}

function executarPrograma() {
    do {
        // Solicita as entradas do usuário
        let populacaoA = pedirNumeroValido("Informe a população inicial do país A (maior que 0):", 0);
        let populacaoB = pedirNumeroValido("Informe a população inicial do país B (maior que 0):", 0);
        let taxaCrescimentoA = pedirNumeroValido("Informe a taxa de crescimento anual do país A (%):", 0);
        let taxaCrescimentoB = pedirNumeroValido("Informe a taxa de crescimento anual do país B (%):", 0);

        // Calcula o número de anos necessários para a população A ultrapassar ou igualar a população B
        let anos = calcularAnosParaIgualarPopulacao(populacaoA, populacaoB, taxaCrescimentoA, taxaCrescimentoB);

        // Exibe o resultado
        alert(`Será necessário(s) ${anos} ano(s) para a população de A ultrapassar ou igualar a população de B.`);
        
        // Pergunta se o usuário deseja fazer outra simulação
        var repetir = prompt("Deseja realizar outra simulação? (sim/nao)").toLowerCase();
    } while (repetir === "sim"); // Se o usuário responder 'sim', a operação será repetida
}

executarPrograma();

  
7. Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois
modifique o programa para que ele mostre os números um ao lado do outro.

  for(let i = 1; i < 21 ;i++ ){
  document.write(i)
}
document.write("<br><br>")
for (let i = 1; i < 21; i++) {
   
    document.write(i + "<br>")
}
  
8. Faça um programa que leia 5 números e informe o maior número.

  function encontrarMaiorNumero() {
    let maiorNumero = -Infinity; // Inicializa com o menor número possível
    // Laço para ler 5 números
    for (let i = 1; i <= 5; i++) {
     // Solicita o número e converte para um valor numérico
     let numero = parseFloat(prompt(`Informe o ${i}º número:`));

        // Verifica se o número é maior que o atual maior número
    if (numero > maiorNumero) {
       maiorNumero = numero; // Atualiza o maior número
        }
    }

    // Exibe o maior número
    alert(`O maior número informado foi: ${maiorNumero}`);
}

// Chama a função
encontrarMaiorNumero();
  
9. Faça um programa que leia 5 números e informe a soma e a média dos números.

var numero =0; 
for(let i = 0 ; i <5 ;i++ ){
  var numero1 = parseInt(prompt("digite um numero"))
  parseInt(numero)
numero += numero1;

}
var media = numero / 5;
document.write("A soma total dos numeros é : "+numero)
document.write("<br>")
document.write("A media dos numeros é : " +media)
  
10. Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.

for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {  // Verifica se o número é ímpar
        document.write(i);  // Imprime o número ímpar
    }
}
  
11. Faça um programa que receba dois números inteiros e gere os números inteiros que estão no
intervalo compreendido por eles.

  function gerarIntervalo() {
    // Solicita os números ao usuário e os converte para inteiros
    let num1 = parseInt(prompt("Informe o primeiro número inteiro:"));
    let num2 = parseInt(prompt("Informe o segundo número inteiro:"));

    // Verifica qual é o menor e o maior número
    let inicio = Math.min(num1, num2);  // Menor número
    let fim = Math.max(num1, num2);     // Maior número

    // Laço para gerar os números no intervalo
    for (let i = inicio + 1; i < fim; i++) {
        document.write(i);  // Imprime os números no intervalo
    }
}

// Chama a função
gerarIntervalo();
  
12. Altere o programa anterior para mostrar no final a soma dos números.

  // Função para gerar números no intervalo entre dois números e calcular a soma
function gerarIntervaloESomar() {
    // Solicita os números ao usuário e os converte para inteiros
    let num1 = parseInt(prompt("Informe o primeiro número inteiro:"));
    let num2 = parseInt(prompt("Informe o segundo número inteiro:"));

    // Verifica qual é o menor e o maior número
    let inicio = Math.min(num1, num2);  // Menor número
    let fim = Math.max(num1, num2);     // Maior número

    let soma = 0; // Variável para armazenar a soma

    // Laço para gerar os números no intervalo e calcular a soma
    for (let i = inicio + 1; i < fim; i++) {
        console.log(i);  // Imprime os números no intervalo
        soma += i;       // Adiciona o número à soma
    }

    // Exibe a soma dos números
    console.log(`A soma dos números no intervalo é: ${soma}`);
}

// Chama a função
gerarIntervaloESomar();

  
13. Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro
entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser
conforme o exemplo abaixo:
a. Tabuada de 5:
5 X 1 = 5
5 X 2 = 10
...
5 X 10 = 50
b. Como fazer a tabuada

function gerarTabuada() {
    // Solicita o número ao usuário
    let numero = parseInt(prompt("Informe um número entre 1 e 10 para ver a tabuada:"));

    // Verifica se o número está no intervalo permitido
    if (numero >= 1 && numero <= 10) {
        document.write(`Tabuada de ${numero}: <br>`);
        
        // Laço para calcular e mostrar a tabuada
        for (let i = 1; i <= 10; i++) {
            let resultado = numero * i;  // Calcula o resultado da multiplicação
            document.write(`${numero} X ${i} = ${resultado} <br>`);  // Exibe a tabuada no formato desejado
        }
    } else {
        document.write("Por favor, informe um número entre 1 e 10.");
    }
}

// Chama a função para gerar a tabuada
gerarTabuada();

14. Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro
número elevado ao segundo número. Não utilize a função de potência da linguagem.

// 14. Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro
// número elevado ao segundo número. Não utilize a função de potência da linguagem.

// Solicita a entrada de base e expoente
let base = parseFloat(prompt("Digite a base:"));
let expoente = parseInt(prompt("Digite o expoente:"));

// Inicializa o resultado como 1
let resultado = 1;
// Se o expoente for positivo, multiplica a base pelo número de vezes
if (expoente > 0) {
    for (let i = 0; i < expoente; i++) {
        resultado *= base;
    }
}
// Se o expoente for negativo, calcula a potência como 1/(base^(-expoente))
else if (expoente < 0) {
    for (let i = 0; i < Math.abs(expoente); i++) {
        resultado *= base;
    }
    resultado = 1 / resultado;
}
// Se o expoente for zero, o resultado é sempre 1
else {
    resultado = 1;
}

// Exibe o resultado
alert(`${base} elevado a ${expoente} é ${resultado}`);

  
15. Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números
pares e a quantidade de números ímpares.

  // 15. Faça um programa que peça 10 números inteiros, 
// calcule e mostre a quantidade de números
// pares e a quantidade de números ímpares.

var numero ;
var contadorpar=0;
var contadorimpar=0;
for(var i= 0 ; i <10 ;i++){
  numero = parseInt(prompt("digite um numero"))

if(numero % 2 === 0){
  contadorpar ++
document.write(`${numero} é um número par.<br>`)}

else {
    document.write(`${numero} é um número ímpar.<br>`)
    contadorimpar++}

}
document.write(`quantidade de numeros par : ${contadorpar} <br> quantidade de numeros impares ${contadorimpar}`)
  
16. A série de Fibonacci é formada pela sequência 1,1,2,3,5,8,13,21,34,55,... Faça um programa
capaz de gerar a série até o n−ésimo termo.
Sequência de Fibonacci com laços


17. A série de Fibonacci é formada pela sequência 0,1,1,2,3,5,8,13,21,34,55,... Faça um programa
que gere a série até que o valor seja maior que 500.


18. Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.:
5!=5.4.3.2.1=120
Calcular fatorial com laços

  
19. Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior
valor e a soma dos valores.

  
20. Altere o programa anterior para que ele aceite apenas números entre 0 e 1000.


21. Altere o programa de cálculo do fatorial, permitindo ao usuário calcular o fatorial várias vezes
e limitando o fatorial a números inteiros positivos e menores que 16.

  
22. Faça um programa que peça um número inteiro e determine se ele é ou não um número primo.
Um número primo é aquele que é divisível somente por ele mesmo e por 1.
Números primos com laços


23. Altere o programa de cálculo dos números primos, informando, caso o número não seja primo,
por quais número ele é divisível.

  
24. Faça um programa que mostre todos os primos entre 1 e N sendo N um número inteiro
fornecido pelo usuário. O programa deverá mostrar também o número de divisões que ele
executou para encontrar os números primos. Serão avaliados o funcionamento, o estilo e o
número de testes (divisões) executados.

  
25. Faça um programa que calcule o mostre a média aritmética de N notas.

  
26. Faça um programa que peça para n pessoas a sua idade, ao final o programa devera verificar
se a média de idade da turma varia entre 0 e 25,26 e 60 e maior que 60; e então, dizer se a turma
é jovem, adulta ou idosa, conforme a média calculada.

  
27. Numa eleição existem três candidatos. Faça um programa que peça o número total de
eleitores. Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato.

  
28. Faça um programa que calcule o número médio de alunos por turma. Para isto, peça a
quantidade de turmas e a quantidade de alunos para cada turma. As turmas não podem ter mais
de 40 alunos.

  
29. Faça um programa que calcule o valor total investido por um colecionador em sua coleção de
CDs e o valor médio gasto em cada um deles. O usuário deverá informar a quantidade de CDs e o
valor para em cada um.

  
30. O Sr. Manoel Joaquim possui uma grande loja de artigos de R$ 1,99, com cerca de 10 caixas.
Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu um tabela que contém o
número de itens que o cliente comprou e ao lado o valor da conta. Desta forma a atendente do
caixa precisa apenas contar quantos itens o cliente está levando e olhar na tabela de preços. Você
foi contratado para desenvolver o programa que monta esta tabela de preços, que conterá os
preços de 1 até 50 produtos, conforme o exemplo abaixo:

a. Lojas Quase Dois - Tabela de preços

1 - R$ 1.99
2 - R$ 3.98
...
50 - R$ 99.50

31. O Sr. Manoel Joaquim acaba de adquirir uma panificadora e pretende implantar a metodologia
da tabelinha, que já é um sucesso na sua loja de 1,99. Você foi contratado para desenvolver o
programa que monta a tabela de preços de pães, de 1 até 50 pães, a partir do preço do pão
informado pelo usuário, conforme o exemplo abaixo:
a. Preço do pão: R$ 0.18

Panificadora Pão de Ontem - Tabela de preços
1 - R$ 0.18
2 - R$ 0.36
...
50 - R$ 9.00

32. O Sr. Manoel Joaquim expandiu seus negócios para além dos negócios de 1,99 e agora possui
uma loja de conveniências. Faça um programa que implemente uma caixa registradora
rudimentar. O programa deverá receber um número desconhecido de valores referentes aos preços
das mercadorias. Um valor zero deve ser informado pelo operador para indicar o final da compra.
O programa deve então mostrar o total da compra e perguntar o valor em dinheiro que o cliente
forneceu, para então calcular e mostrar o valor do troco. Após esta operação, o programa deverá
voltar ao ponto inicial, para registrar a próxima compra. A saída deve ser conforme o exemplo
abaixo:
a. Lojas Tabajara

Produto 1: R$ 2.20
Produto 2: R$ 5.80
Produto 3: R$ 0
Total: R$ 9.00
Dinheiro: R$ 20.00
Troco: R$ 11.00
...

33. O Departamento Estadual de Meteorologia lhe contratou para desenvolver um programa que
leia as um conjunto indeterminado de temperaturas, e informe ao final a menor e a maior
temperaturas informadas, bem como a média das temperaturas.

  
34. Os números primos possuem várias aplicações dentro da Computação, por exemplo na
Criptografia. Um número primo é aquele que é divisível apenas por um e por ele mesmo. Faça um
programa que peça um número inteiro e determine se ele é ou não um número primo.

  
35. Encontrar números primos é uma tarefa difícil. Faça um programa que gera uma lista dos
números primos existentes entre 1 e um número inteiro informado pelo usuário.
36. Desenvolva um programa que faça a tabuada de um número qualquer inteiro que será digitado
pelo usuário, mas a tabuada não deve necessariamente iniciar em 1 e terminar em 10, o valor
inicial e final devem ser informados também pelo usuário, conforme exemplo abaixo:
a. Montar a tabuada de: 5
Começar por: 4
Terminar em: 7
Vou montar a tabuada de 5 começando em 4 e terminando em 7:
5 X 4 = 20
5 X 5 = 25
5 X 6 = 30
5 X 7 = 35

Obs: Você deve verificar se o usuário não digitou o final menor que o inicial.

  
37. Uma academia deseja fazer um senso entre seus clientes para descobrir o mais alto, o mais
baixo, a mais gordo e o mais magro, para isto você deve fazer um programa que pergunte a cada
um dos clientes da academia seu código, sua altura e seu peso. O final da digitação de dados deve
ser dada quando o usuário digitar 0 (zero) no campo código. Ao encerrar o programa também deve
ser informados os códigos e valores do clente mais alto, do mais baixo, do mais gordo e do mais
magro, além da média das alturas e dos pesos dos clientes


38. Um funcionário de uma empresa recebe aumento salarial anualmente: Sabe-se que:
a. Esse funcionário foi contratado em 1995, com salário inicial de R$ 1.000,00;
b. Em 1996 recebeu aumento de 1,5% sobre seu salário inicial;
c. A partir de 1997 (inclusive), os aumentos salariais sempre correspondem ao dobro do percentual
do ano anterior. Faça um programa que determine o salário atual desse funcionário. Após concluir
isto, altere o programa permitindo que o usuário digite o salário inicial do funcionário.

  
39. Foi feita uma estatística em cinco cidades brasileiras para coletar dados sobre acidentes de
trânsito. Foram obtidos os seguintes dados:
a. Código da cidade;
b. Número de veículos de passeio (em 1999);
c. Número de acidentes de trânsito com vítimas (em 1999). Deseja-se saber:
d. Qual o maior e menor índice de acidentes de transito e a que cidade pertence;
e. Qual a média de veículos nas cinco cidades juntas;
f. Qual a média de acidentes de trânsito nas cidades com menos de 2.000 veículos de passeio.
40. Faça um programa que receba o valor de uma dívida e mostre uma tabela com os seguintes
dados: valor da dívida, valor dos juros, quantidade de parcelas e valor da parcela.
a. Os juros e a quantidade de parcelas seguem a tabela abaixo:

Quantidade de Parcelas % de Juros sobre o valor inicial da dívida
1 0
3 10
6 15
9 20
12 25
Exemplo de saída do programa:
Valor da Dívida Valor dos Juros Quantidade de Parcelas Valor da Parcela
R$ 1.000,00 0 1 R$ 1.000,00
R$ 1.100,00 100 3 R$ 366,00
R$ 1.150,00 150 6 R$ 191,67

41. O cardápio de uma lanchonete é o seguinte:
a. Especificação Código Preço

Cachorro Quente 100 R$ 1,20
Bauru Simples 101 R$ 1,30
Bauru com ovo 102 R$ 1,50
Hambúrguer 103 R$ 1,20
Cheeseburguer 104 R$ 1,30
Refrigerante 105 R$ 1,00
Faça um programa que leia o código dos itens pedidos e as quantidades desejadas.
Calcule e mostre o valor a ser pago por item (preço * quantidade) e o total geral do
pedido. Considere que o cliente deve informar quando o pedido deve ser encerrado.

  
42. Em uma eleição presidencial existem quatro candidatos. Os votos são informados por meio de
código. Os códigos utilizados são:
a. 1 , 2, 3, 4 - Votos para os respectivos candidatos

(você deve montar a tabela ex: 1 - Jose/ 2- João/etc)
5 - Voto Nulo
6 - Voto em Branco

Faça um programa que calcule e mostre:

b. O total de votos para cada candidato;
c. O total de votos nulos;
d. O total de votos em branco;
e. A percentagem de votos nulos sobre o total de votos;
f. A percentagem de votos em branco sobre o total de votos. Para finalizar o conjunto de votos
tem-se o valor zero.

  
43. Desenvolver um programa para verificar a nota do aluno em uma prova com 10 questões, o
programa deve perguntar ao aluno a resposta de cada questão e ao final comparar com o gabarito
da prova e assim calcular o total de acertos e a nota (atribuir 1 ponto por resposta certa). Após
cada aluno utilizar o sistema deve ser feita uma pergunta se outro aluno vai utilizar o sistema.
Após todos os alunos terem respondido informar:
a. Maior e Menor Acerto;
b. Total de Alunos que utilizaram o sistema;
c. A Média das Notas da Turma.
