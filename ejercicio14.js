//Crear una función que reciba una cadena. Si esta cadena tiene el carácter “i” contar la cantidad de veces que se encuentra la palabra “perro”.
function buscarPerro(cadena) {
    
    let palabra = "perro"

    let index_i = cadena.indexOf("i");
    let index_p = cadena.indexOf(palabra);

    let contador= 0;

    if (index_i !== -1) {
        console.log("hay una letra 'i'");
        while (index_p !== -1) {
            index_p = cadena.indexOf(palabra, index_p+1)
            contador++;
        }
        console.log(`La palabra 'perro' se repite ${contador} veces`);
    }else{
        console.log("No hay letra 'i'");
    }
}
buscarPerro("Mi perro es gordo perro perro perro");
