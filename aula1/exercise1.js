console.log("Minha idade é 25 anos");
console.log(6);
/*
  esse é um comentário de bloco;
*/
let idade = 24;
idade = idade + 1;
console.log(idade);

let today = new Date();
let qqrnome = today.getFullYear();
let moonShot = new Date(1969);
let timeStamp = today - moonShot; 
console.log(`fazem ${qqrnome - moonShot} anos que o homem foi a lua`);

console.log(65/240);
console.log(0.2708 * 100);

console.log('hello ' + 'world');
let phrase = 'Teaching the world how to code';
console.log(phrase.length);

let teacherName = 'Professor Kaian Novais';
console.log(teacherName.toUpperCase());
console.log(teacherName.trim());
console.log(Math.random()*100);
let randomNumber = (43.8);
console.log(Math.ceil(randomNumber));
console.log(Number.isInteger(2017));