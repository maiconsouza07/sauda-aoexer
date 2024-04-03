// Função Saudação
function saudacao(nome) {
    return `Olá, ${nome}! Como você está?`;
  }
  
  // Função Soma e Quadrado
  function somaQuadrado(num1, num2) {
    const soma = num1 + num2;
    const quadrado = soma * soma;
    return [soma, quadrado];
  }
  
  // Função Concatenação
  function concatenaPalavras(str1, str2) {
    return str1 + str2;
  }
  
  // Acesso a Caracteres
  function primeiroUltimoCaractere(str) {
    const primeiro = str.charAt(0);
    const ultimo = str.charAt(str.length - 1);
    return primeiro + ultimo;
  }
  
  // Função Comparação
  function comparacaoNumeros(num1, num2) {
    if (num1 > num2) {
      return `${num1} é maior que ${num2}`;
    } else if (num2 > num1) {
      return `${num2} é maior que ${num1}`;
    } else {
      return 'Os números são iguais';
    }
  }
  
  // Escopo de Variáveis
  let variavelFora = 'Variável fora da função';
  function escopoVariaveis() {
    let variavelDentro = 'Variável dentro da função';
    console.log(variavelFora); // Acessando variável fora da função
    console.log(variavelDentro); // Acessando variável dentro da função
  }
  console.log(variavelFora); // Acessando variável fora da função fora dela
  // console.log(variavelDentro); // Isso resultaria em um erro, pois a variável está dentro do escopo da função e não pode ser acessada aqui
  
  // Função Média
  function calcularMedia(numeros) {
    const soma = numeros.reduce((acc, curr) => acc + curr, 0);
    return soma / numeros.length;
  }
  
  // Função Fatorial
  function fatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * fatorial(numero - 1);
    }
  }
  
  // Callback Simples
  function executaCallback(callback) {
    callback();
  }
  
  // Função de Soma Dinâmica
  function somaDinamica(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
  }
  
  // Arrow Function para imprimir o valor de 'this' em diferentes contextos
  const imprimirThis = () => {
    console.log(this);
  }
  
  // Validação de Números
  function ehNumero(parametro) {
    return typeof parametro === 'number';
  }
  
  // Testando as funções
  console.log(saudacao('João'));
  console.log(somaQuadrado(3, 4));
  console.log(concatenaPalavras('Olá', 'Mundo'));
  console.log(primeiroUltimoCaractere('JavaScript'));
  console.log(comparacaoNumeros(5, 10));
  escopoVariaveis();
  console.log(calcularMedia([1, 2, 3, 4, 5]));
  console.log(fatorial(5));
  executaCallback(imprimirThis);
  console.log(somaDinamica(1, 2, 3, 4, 5));
  console.log(ehNumero(10));
  console.log(ehNumero('abc'));
  