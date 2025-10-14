// Variáveis;
let nomeHeroi = 'Superman';
let su = 1;
let classif = '';

//Estrutura de repetição
do {
  if (su < 0) {
    //se a variável su for menor que 0, o código irá encerrar com a seguinte mensagem;
    console.log(
      'Su inválido! Mude a opção Su para um valor maior ou igual a 0',
    );
    break;
  }
  // Se a variável for maior ou igual a 0 será verificado em qual das opções a variável su se encaixaa;
  if (su <= 1000) {
    classif = 'Ferro';
  } else if (su >= 1001 && su <= 2000) {
    classif = 'Bronze';
  } else if (su >= 2001 && su <= 6000) {
    classif = 'prata';
  } else if (su >= 6001 && su <= 7000) {
    classif = 'Ouro';
  } else if (su >= 7001 && su <= 8000) {
    classif = 'Platina';
  } else if (su >= 8001 && su <= 9000) {
    classif = 'Ascedente';
  } else if (su >= 9001 && su <= 1000) {
    classif = 'Imortal';
  } else {
    classif = 'Radiante';
  }

  // Mensagem final se a variável su for maior ou igual a zero, a classificação será de acordo com a qtd de su;
  console.log('O Herói' + nomeHeroi + ' está no nível' + classif);
  break;

  //Fim da estrututa de repetição:
} while (su >= 0);
