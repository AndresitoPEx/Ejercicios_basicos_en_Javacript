//Tabular los valores de Y para la siguiente función y= x^2+3(x-5) cuando 3 < x < 56

let y = 0;

for (let x = 4; x < 56; x++) {
    if(y=(Math.pow(x,2)+(3*x)-15)){
        console.log(`El valor de Y es: ${y} cuando X = ${x}`); 
    }      
}
