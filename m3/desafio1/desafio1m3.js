let tablaFlujo = document.getElementById('tablaFlujo');


let ingresos=[];
tomarValorColumna(tablaFlujo, ingresos, 1);
console.log(ingresos);

let egresos=[];
tomarValorColumna(tablaFlujo, egresos, 2);
console.log(egresos);


console.log('La suma total de ingresos es de ' + calcTotalActividad(ingresos));
console.log('La suma total de egresos es de ' + calcTotalActividad(egresos));
console.log('La rentabilidad total del flujo es de ' + rentabilidadTotal(calcTotalActividad(ingresos),calcTotalActividad(egresos)));







function tomarValorColumna (nombreTabla, nombreLista, valorColumna){
    for(i=1; i<nombreTabla.rows.length; i++){
        nombreLista.push(parseInt(nombreTabla.rows[i].cells[valorColumna].innerHTML));
        }
}

function calcTotalActividad(actividad){
    let totalActividad = 0;
    for (let i of actividad) totalActividad+=i;
    return totalActividad;
}

function rentabilidadTotal(a,b){
    return (a-b);
}