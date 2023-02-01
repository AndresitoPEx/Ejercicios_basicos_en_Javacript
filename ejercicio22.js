//En este desafío, debes calcular e imprimir la suma de los elementos en una matriz, teniendo en cuenta que algunos de esos números enteros pueden ser bastante grandes. Ej. 1000001, 1000002, 1000003, 1000004, 1000006.
let x = [1000001,1000002,1000003,1000004,1000006];
let suma = 0;
for (let i = 0; i < x.length; i++) {
    suma = suma + x[i];
    
}
console.log (suma);
