//Crear una funcion que permita calcular el factorial de un numero entero
function factorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado = resultado * i;
        console.log(`El factorial de ${i} es : ${resultado}`);
        
    }
}
factorial(5);
