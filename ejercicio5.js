//5.Escribir un programa en JavaScript que use una estructura "do-while" para imprimir los elementos de un arreglo dado.
let arreglo = [1,2,3,4,5,"hola mundo"];
let index = 0;

do{
    console.log(arreglo[index]);
    index++
}
while(index<arreglo.length);
