//Crear una función que reciba una cadena. Esta función debe retornar la misma cadena pero las letras iniciales de cada palabra deben estar en mayúsculas y las demás en minuscular.
function corregirPalabra(cadena){

    cadena = cadena.toLowerCase();
    let palabra = cadena.split(" ");

    for (let i = 0; i < palabra.length; i++) {
        palabra[i] = palabra[i][0].toUpperCase()+palabra[i].slice(1);
        
    }
    let palabraNueva =  palabra.join(" ");
    console.log(palabraNueva);
}

corregirPalabra("hOlA mUndO");