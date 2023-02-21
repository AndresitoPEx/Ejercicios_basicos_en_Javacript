let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

for (let i = 0; i < arr.length; i++) {
    let tempSum = sum - arr[i];
    if (tempSum < min) {
        min = tempSum;
    }   
    if (tempSum > max) {
        max = tempSum;
    }
}

console.log(min + " " + max);