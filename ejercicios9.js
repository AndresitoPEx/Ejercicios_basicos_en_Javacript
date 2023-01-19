//9.Escribir un programa en JavaScript que use una estructura "for" para sumar los números pares de un arreglo dado.
let numeros = [1,2,3,4,5,6,7,8,9];
let suma = 0;

for (let index = 0; index < numeros.length; index++) {
   if (numeros[index]%2===0) {
    console.log(numeros[index]);
    suma = suma + numeros[index];
   }

}

console.log("Y la suma es ",suma);