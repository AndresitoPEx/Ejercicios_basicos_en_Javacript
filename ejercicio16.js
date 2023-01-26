//Escribir una función que calcule la suma de los números pares en un rango dado.
function sumaDePares(valor1, valor2) {
    
    let suma = 0;

    for (let rango = valor1; rango <= valor2; rango++) {
        if (rango % 2 === 0) {
            suma = suma + rango;
        }
        
    }
console.log(`La suma de los pares es ${suma}`);
}
sumaDePares(1,5);