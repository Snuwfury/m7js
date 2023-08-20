let inversiones = [{"plan": 1,'capital':150000, 'plazo': 30, 'tasa':15},{'plan': 2, 'capital':300000, 'plazo':180, 'tasa':10},{'plan': 3, 'capital':485000, 'plazo':60, 'tasa':23}];
let rendimiento = [];


console.log(inversiones);
tomarValorArray(inversiones, rendimiento);
console.log( rendimiento);







function tomarValorArray(arrayInversiones, rendimientoArray){
let valor0;
let valor1;
let valor2;
let valor3;
let texto;
let i = 0
while(i<arrayInversiones.length){
texto  = arrayInversiones[i].plan;
valor0 = arrayInversiones[i].capital;
valor1 = arrayInversiones[i].plazo;
valor2 = arrayInversiones[i].tasa;
valor3 = ((valor0 * valor1 * (valor2 / 100)) / 100);
rendimientoArray.push(`Plan: ${texto}`,`Capital: $${valor0}`, `Plazo: ${valor1} dias`,`Tasa: ${(valor2)}%`, `Interés: $${valor3}`);
i++;
}
}

