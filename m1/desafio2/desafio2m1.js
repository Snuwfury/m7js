alert('Bienvenido a ArgenFin!')
alert('Aqui desarrollaremos tu presupuesto con un modelo 50-30-20')
alert('Aqui vamos!')

let ingresoTotal = calcPresupuesto();


function calcPresupuesto(){
   let pres = Number(prompt('Ingrese aqui su presupuesto'));
            if (validacionMonto(0, pres)){
            return modctv(pres);
} while (!validacionMonto(0, pres)){
            pres = Number(prompt('Monto invalido. Ingrese nuevamente su presupuesto'));
}
return modctv(pres);
}

function validacionMonto (min, monto) {
    return ( monto > min);
}

 function calculoPorcentaje(prcnt, num){
return (prcnt / 100) * num;
 }
 function modctv (valor) {
    alert('50% Gastos necesarios: $' + (calculoPorcentaje(50, valor)) +', ' + '30% Gastos opcionales: $' + (calculoPorcentaje(30, valor)) +', ' + '20%  Ahorro e inversión: $' + (calculoPorcentaje(20, valor)) + '.' )
 }