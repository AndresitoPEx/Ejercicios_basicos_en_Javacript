//Crear una funcion que muestre el valor de la posicion "n" en la secuencia fibonacci.
// 0 + 0 = 0
// 0 + 1 = 1
// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5
// 3 + 5 = 8
// 5 + 8 = 13
// 8 + 13 = 21
// 13 + 21 = 34
function fibonacci(n) {

let [preFib, fib] = [0,1];
  for (let i = 2; i <= n; i++) {
    console.log(`La suma de ${preFib} + ${fib} = ${preFib+fib}`);
    [preFib, fib] = [fib, preFib+fib];
  }
console.log(fib);
}
fibonacci(7);
