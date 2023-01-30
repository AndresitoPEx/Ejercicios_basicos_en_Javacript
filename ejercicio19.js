// Escribir un programa que muestre en pantalla los números del 1 al 100,
//  Sustituir los multiplos de 3 por "fizz"
//  Sustituir los multiplois de 5 por "buzz"
//  Sustituir los multiplos de 3 y 5 por "fizzbuzz"
for (let i = 1; i <= 100; i++) {
    if(i%3===0 & i%5===0){
        console.log("fizzBuzz");
    }
    else if(i%5===0){
        console.log("buzz");
    }
    else if (i%3===0) {
        console.log("Fizz");
    }
    else{
        console.log(i);
    }
    
}