//4.Escribir un programa en JavaScript que use una estructura "while" para calcular el factorial de un número dado.
let numero = 1;
let factorial = 1;

while (numero <= 8) {
    factorial = factorial * numero;
    numero++;
}
console.log(factorial);