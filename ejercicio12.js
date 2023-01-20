//Crear una funcion que permita calcular el factorial de un numero entero
let numero = 10;
let factorial = 1;

for (let index = 1; index <= numero; index++) {
    factorial = factorial * index;
  
    
}
console.log(`El factorial de ${numero} es ${factorial}`);
