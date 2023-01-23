//Crear una función que reciba una cadena. Esta función debe retornar la misma cadena pero las letras iniciales de cada palabra deben estar en mayúsculas y las demás en minuscular.
let cadena  = "Tengo un perro chill, perro perro perro";
let tiene_i = false;
for (let i = 0; i < cadena.length; i++) {
    if (cadena[i]==="i") {
       tiene_i = true;
    }
}
if (tiene_i) {
    console.log("El texto tiene una 'i'");
    let index = 0;
    let contador = 0;
    while (true) {
        index = cadena.indexOf("perro", index);
        if (index === -1) {
            break;
        }
        contador++
        //console.log("Hay perro en el index",index, contador);
        index++;   
    }
    console.log(`La palabra 'perro' se repite: ${contador} veces`);
    
}else{
    console.log("El texto NO tiene una 'i'");
}