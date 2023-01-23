//metodo indexOf();
let frase = "Hola mundo mundo";
let palabra = "mundo";
let index = frase.indexOf(palabra);
console.log(index);
let contador = 0;

while (index !== -1) {
    contador++;
    index = frase.indexOf(palabra, index +1);
}
console.log(`La palabra ${palabra} se repite ${contador} en la frase ${frase}`);