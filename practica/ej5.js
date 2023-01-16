//5.-Crear una función que reciba una cadena. Esta función debe retornar la misma cadena pero las letras iniciales de cada palabra deben estar en mayúsculas y las demás en minuscular.
function capitalizarPalabras(cadena) {
    let palabras = cadena.split(" ");
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i][0].toUpperCase() + palabras[i].slice(1).toLowerCase();
    }
    return palabras.join(" ");
}
console.log(capitalizarPalabras("hOla mUndO"));
