//2.-Crear una funcion que permita calcular el factorial de un numero entero ** 5! = 1*2*3*4*5; 2! = 1*2;
function factorial(n){
	let total = 1; 
	for(index = 1; index <= n; index++){
		total = total * index; 
	}
	console.log(total); 
}
factorial(5);
