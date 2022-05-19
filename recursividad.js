let numerito = 0;

while (numerito < 5) {
    console.log(numerito);
    numerito++;
}

/* ahora con recursividad */
function recursiva(numerito) {
    console.log(numerito);
    if(numerito< 5) {
        return recursiva(numerito+1);
    }else {
        return 5;
    }
}
recursiva(0);