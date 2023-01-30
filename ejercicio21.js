//Crear una funcion que compare 2 arreglos de numeros enteros y asignarle un punto al usuario A o usuario B por cada valor superior al otro en su respectivo orden y devolver los puntos ganados en un arreglo.
function sumaDePuntos(A, B) {
    
    let puntosA = 0;
    let puntosB = 0;

    for (let i = 0; i < A.length && B.length; i++) {
        if (A[i] > B[i]) {
            puntosA++;
        }else if(A[i] < B[i]){
            puntosB++;
        }
        
    }
    return [`A: ${puntosA} B: ${puntosB}`];
}
let puntos = sumaDePuntos([1,2,3,4,5],
                          [2,3,1,4,5]);

console.log(puntos);






