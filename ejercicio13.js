//Tabular los valores de Y para la siguiente función y= x^2+3(x-5) cuando 3 < x < 56
function tabular(){
    for (let x = 4; x < 56; x++) {
        let y = Math.pow(x,2)+3*(x-5);
        console.log(`Para el valor Y ${y} cuando X sea: ${x}`);
        
    }
}
tabular();