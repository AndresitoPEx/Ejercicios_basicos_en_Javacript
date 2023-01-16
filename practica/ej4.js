//4.-Crear una función que reciba una cadena. Si esta cadena tiene el carácter “i” contar la cantidad de veces que se encuentra la palabra “perro”.
function contar(string) {
    let contarLetra = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === "i") {
        contarLetra++;
      }
    }
    return contarLetra;
  }
  
  console.log(contar("perro"));
 
  