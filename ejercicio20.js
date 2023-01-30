//20. Escribir una funcion que sume los numeros de un array dado, usando For of.
function sumarNumeros(array) {
    let suma = 0;
    for (const iterator of array) {
        suma = suma + iterator
    }
    return suma;
}

let sumar = sumarNumeros([1,2,3,4,5]);
console.log(sumar);

