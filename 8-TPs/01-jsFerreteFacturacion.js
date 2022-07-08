/*Lucas Leonardo Palacios Bulige
Entregado
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	Ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar ()
{
	let nro1;
	let nro2;
    let nro3;
	let suma;
	nro1 = parseInt(document.getElementById("txtIdPrecioUno").value);
	nro2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    nro3 = parseInt(document.getElementById("txtIdPrecioTres").value);
	suma = nro1 + nro2 + nro3;

	alert("la suma de los precios es: " + suma);
}
function Promedio ()
{
	let nro1;
	let nro2;
    let nro3;
    let promedio;

	nro1 = parseInt(document.getElementById("txtIdPrecioUno").value);
	nro2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    nro3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    promedio = (nro1+nro2+nro3)/3;

    alert("El promedio es: "+promedio)

}
function PrecioFinal ()
{
	let nro1;
	let nro2;
    let nro3;
	let suma;
    let iva;
    let precioFinal;
	nro1 = parseInt(document.getElementById("txtIdPrecioUno").value);
	nro2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    nro3 = parseInt(document.getElementById("txtIdPrecioTres").value);
	suma = nro1 + nro2 + nro3;
    iva = 0.21;
    precioFinal = suma +(suma * iva)

	alert("el precio final es: " + precioFinal);
}