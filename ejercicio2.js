//2.Escribir un programa en JavaScript que use una estructura "switch-case" para determinar a qué estación del año pertenece un mes dado.   
let mes = "noviembre";
let estacion;

switch (mes) {
    case "enero":
    case "febrero": 
    case "marzo":
        estacion = "primavera"   
        break;
    case "abril":
    case "mayo": 
    case "junio":
        estacion = "verano"   
        break;
    case "julio":
    case "agosto": 
    case "setiembre":
        estacion = "otoño"   
        break;
    case "octubre":
    case "noviembre": 
    case "diciembre":
        estacion = "invierno"   
        break;

    default:
        break;
}

console.log(estacion);