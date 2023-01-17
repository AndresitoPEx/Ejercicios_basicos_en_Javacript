let mascota={
    tipo:"gato",
    nombre:"Manchas",
    raza:"angora"
}

Object.entries(mascota).forEach(([propiedad, valor])=>{console.log(`${propiedad} -> ${valor}`);
});