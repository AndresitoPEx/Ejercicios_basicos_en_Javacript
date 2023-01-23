//Crear una función que reciba una cadena. Si esta cadena tiene el carácter “i” contar la cantidad de veces que se encuentra la palabra “perro”.
let frase = "Tengo un perro chiquito perro perro perro perro perro perro";
let palabra = "perro";
let letra = "i";
let indice_i = frase.indexOf(letra);
let contador = 0;
let indice_perro = -1;

if (indice_i !== -1) {
    console.log("Hay letra 'i'");
    while ((indice_perro = frase.indexOf(palabra, indice_perro + 1)) !== -1) {
        contador++;
    }
    console.log(`la palabra perro aparece ${contador} veces`);
} else {
    console.log("no hay letra 'i'");
}


