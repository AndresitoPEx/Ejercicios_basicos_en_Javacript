//8.Escribir un programa en JavaScript que use una estructura "switch-case" para determinar si una letra dada es una vocal o no.
let letra = "p";

switch (letra) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("es una vocal")
        break;

    default:
        console.log("No es una vocal")
        break;
}