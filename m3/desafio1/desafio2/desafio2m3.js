let tablaInteres = document.getElementById('tablaInteres');


let planesCredito = [];
for(i = 1; i<tablaInteres.rows.length; i++){
tomarValorFila (tablaInteres, planesCredito, i);
} 




let plan1= [];
tomarValorFilaTd(tablaInteres,plan1,1);
calcInteres(plan1);
console.log(plan1);
let plan2= [];
tomarValorFilaTd(tablaInteres,plan2,2);
calcInteres(plan2)
console.log(plan2);
let plan3= [];
tomarValorFilaTd(tablaInteres,plan3,3);
calcInteres(plan3)
console.log(plan3);



function tomarValorFila (nombreTabla, nombreLista, numeroFila){
    const fila = nombreTabla.rows[numeroFila].cells;
        for(const celda of fila) {
            nombreLista.push(celda.innerHTML);
        } 
    }

function tomarValorFilaTd(nombreTabla, nombreLista, numeroFila){
    const fila = nombreTabla.rows[numeroFila].getElementsByTagName("td");
        for (const celda of fila) {
                nombreLista.push(Number(celda.innerHTML))
        }
    }
function calcInteres (nombreLista){
  const capital = nombreLista[0];
  const plazo = nombreLista[1];
  const tasa = (nombreLista[2]);
  const valor = ('Para este plan, de modelo Capital/Plazo(dias)/Tasa(%), se calcula un interés total de $' + ((capital * plazo * (tasa / 100)) / 100));
        nombreLista.push(valor);
}