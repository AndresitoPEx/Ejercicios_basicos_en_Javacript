//6.Escribir un programa en JavaScript que use la estructura "for-of" para iterar sobre un objeto e imprimir sus propiedades y valores.
 let persona = {
    nombre: "Juan",
    edad: 30,
    trabajo: "Medico"
 };

 let entradas = Object.entries(persona);

 for (const [propiedad, valor] of entradas){
    console.log(`${propiedad}: ${valor}`);
 }