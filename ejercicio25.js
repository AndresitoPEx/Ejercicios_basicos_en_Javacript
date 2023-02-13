//Crear una funcion que reciba un numero entero "n" y escriba una escalera de "#" con tantos pisos como "n"

function escalera(n) {
    for (let i = 1; i <= n; i++) {
        let espacio = " ".repeat(n-i);
        let caracter = "#".repeat(i);
        console.log(espacio + caracter);  
    } 
}
escalera(6);


