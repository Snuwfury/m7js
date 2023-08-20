let flujoCaja = [];

tomarValoresFlujoCaja (flujoCaja);
devolverFlujoDeCaja(flujoCaja);
















function tomarValoresFlujoCaja (nombreArray){
    let duracionFlujo;
    do{
    duracionFlujo = Number(prompt(`Inserte cantidad de meses a analizar`));
    }while(!duracionFlujo);
    for (i=0;i<duracionFlujo;i++){
    let primerValor = Number(prompt(`Ingrese el ingreso del mes ${(i+1)}`));
    let segundoValor = Number(prompt(`Ingrese el egreso del mes ${(i+1)}`));
    nombreArray.push((primerValor - segundoValor));
}
}
function devolverFlujoDeCaja (nombreArray){
    let totalFlujo = 0;
    for(let a of flujoCaja) totalFlujo += a;
    if (totalFlujo>0){
         alert('1');
    }else if (totalFlujo<0){
        alert('-1');
    }else if (totalFlujo === 0){
        alert('0');
    }
}
