const numeritos = [0,9,1,2,54,1,2,1,1,1,1,1,1,1,]
/* let numerito = 0;
for(let index = 0; index < numeritos.length; index++){
    numerito = numeritos[index];
    console.log({index, numerito});
} */
function recursiva(numerosArray){
    if (numerosArray.length !=0) {
        //llamados recursivos
        const firstNum = numerosArray[0];
        console.log(firstNum);
        numerosArray.shift();
        /* eliminamos el primer elemento */
        recursiva(numerosArray)
    }else{
        /* llamados normales sin recursividad */
    }
}