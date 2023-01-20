//10.Escribir un programa en JavaScript que use una estructura "while" para buscar un elemento específico en un arreglo dado y devolver su posición en caso de encontrarlo, o -1 en caso contrario.
let buscar = 7;
let arreglo = [1,2,3,4,5,6,7,8,9];
let i = 0;

while (i<arreglo.length) {
    if (buscar === arreglo[i]) {
        console.log("El elemento ",buscar,"Se ecuentra el la posicion ->", arreglo[i]-1);
    }
    else{
        console.log(-1);
    }
    i++
}
