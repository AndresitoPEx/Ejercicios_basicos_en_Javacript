//Escribir una función que determine si una palabra es un palíndromo.
function esPalidromo(palabra) {

    palabra = palabra.toLowerCase().replace(/\s/g,'');
    console.log(palabra);

    let palabraInvertida = palabra.split('').reverse().join('');
    console.log(palabraInvertida);

    if (palabra === palabraInvertida) {
        console.log("Es palindromo");
    }else{
        console.log("No Es palindromo");
    }
}
esPalidromo("Somos o no somos");