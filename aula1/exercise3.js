// criação da constante kelvin;
const kelvin = 293;

// conversão da temp de kelvin p/ celsius;
const celsius = kelvin - 273;

// obtendo fahrenheit;
let fahrenheit = celsius * (9 / 5) + 32;

// arredondando a temperatura;
fahrenheit = Math.floor(fahrenheit);
console.log(`A temperatura é ${fahrenheit} graus Fahrenheit`);

const newton = Math.floor(celsius * (33 / 100));
console.log(`A temperatura é ${newton} graus Newton`);

/*
  falando sobre comentários no código é importante frisar que comentários não são para descrever "oq foi feito" e sim o "Por que" foi utilizado aquela forma e não de outra.
 Por exemplo quando decide que vai seguir o caminho de um algoritmo de média simples por x motivo e não algoritmo y, por tal motivo.

Do contrário seria como escrever uma receita de bolo e dizer o que está sendo feito, em cima da propria instrução.

----------------------
// falando para bater a massa até ficar homogênea;
"Bata a massa até que fique homogênea"
----------------------

Não faria muito sentido, afinal a instrução já deve dizer tudo, do contrário a instrução está mal escrita, da mesma forma é com código.Se faço:
let fahrennheit = Math.floor(fahrenheit);

E comento:
  //arredondando a temperatura;
É redundancia e polui o código.


Se alguém que fale a linguagem JS ler essa instrução ele tem que ler e entender, sem precisar de comentários.

Diferentemente seria se o comentário fosse algo como:
// vou usar fahrennheit devido a temperatura da cidade que usara o app.

Esse exlica o "por que" e não "oque" 

*/