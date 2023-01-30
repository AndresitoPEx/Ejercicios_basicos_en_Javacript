// Crear una funcion que reciba un numero entre 0 y 20 y retorne la letra adecuada segun la siguiente tabla:
// A	 16 - 20
// B	 13 - 15
// C	 10 - 12
// D	 0 -  9
function saberNota(nota) {
    

    if (nota>=16 & nota < 20) {
        console.log("Tu nota es A");
    }
    else if (nota>=13 & nota < 16) {
        console.log("Tu nota es B");
    }
    else if (nota>=10 & nota < 12) {
        console.log("Tu nota es C");
    }
    else if (nota>=0 & nota < 10) {
        console.log("Tu nota es D");
    }else{
        console.log("Ingrese una nota  valida");
    }
}
saberNota(14);