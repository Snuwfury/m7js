
//MENSAJE DE BIENVENIDA E INTRODUCCION
alert("Bienvenido a la calculadora de punto de equilibrio");
alert("El Punto de equilibrio es la cantidad de ventas que debe tener un negocio de determinado producto para no perder dinero");
alert("A continuacion ingrese los valores solicitados");
/*DEFINO VARIABLES Y LES SUMO LA FUNCION DE INGRESAR EL 
VALOR CON EL TEXTO CORRESPONDIENTE A CADA UNA POR PARAMETRO*/

let costosFijos = ingresoMonto('costo fijo');
let precioVenta = ingresoMonto('precio de venta');
let costosVariables = ingresoMonto('costo variable');

//SI PASA LA VALIDACION DE LOS MONTOS, MUESTRA EL RESULTADO DE LA OPERACION

alert ('El punto de equilibrio es' + (costosFijos / (precioVenta - costosVariables)));



//FUNCIONES 
function ingresoMonto (texto) {
        monto = Number(prompt(`Ingrese el ${texto}`));
    while (!validacionMonto(0,monto)) {
        monto = Number(prompt(`Monto invalido. Ingrese nuevamente el ${texto}`));
    }
    return monto
}
function validacionMonto (min, monto) {
    return ( monto > min);
}
 