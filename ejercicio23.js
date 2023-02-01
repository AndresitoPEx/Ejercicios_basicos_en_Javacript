//sumar las diagonales de un array de 3 dimensiones y dar como resultado la diferencia absoluta de las diagonales.
let array = [[-5,2,3],
             [4,5,6],
             [9,8,9]];
let suma1 = 0;
let suma2 = 0;

for (let i = 0; i < array.length; i++) {
    suma1 = suma1 + array[i][i];
    suma2 = suma2 + array[i][array.length - 1 -i];

}

console.log(suma1);
console.log(suma2);

let absoluto = Math.abs(suma1-suma2);

console.log(`La resta absoluta de ${suma1} menos ${suma2} es ${absoluto}`);
