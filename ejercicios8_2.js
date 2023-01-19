//8.Escribir un programa en JavaScript que use una estructura "for" para determinar si una letra dada es una vocal o no.
let letra = "X";
let vocales = "aeiouAEIOU";
let esVocal = false;

for(let i = 0; i<vocales.length; i++){
    if(letra === vocales[i]){
        esVocal = true;
        break;
    }
}

if(esVocal){
    console.log(`${letra} es una vocal`);
}else{
    console.log(`${letra} NO es una vocal`);
}