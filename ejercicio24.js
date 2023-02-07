//Crea una funcion para calcular el costo total de una comida incluyendo propina e impuestos.
function costoComida(pComida) {
    let propina = pComida * 10/100;
    let impuestos = pComida * 18/100;

    let costoTotal = pComida+propina+impuestos
    console.log(`
    subtotal = ${pComida}
    propina = ${propina}
    impuestos = ${impuestos}
    TOTAL = ${costoTotal}`);
}

costoComida(100);








