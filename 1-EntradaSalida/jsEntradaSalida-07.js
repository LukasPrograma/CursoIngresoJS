/*Lucas Leonardo Palacios Bulige
entregado
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar()
{
	let nro1;
	let nro2;
	let suma;
	nro1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	nro2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	suma = nro1 + nro2;

	alert("la suma es " + suma);

}

function restar()
{
	let nro1;
	let nro2;
	let resta;
	nro1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	nro2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	resta = nro1 - nro2;

	alert("la resta es " + resta);
}

function multiplicar()
{
	let nro1;
	let nro2;
	let multiplicacion;
	nro1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	nro2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	multiplicacion = nro1 * nro2;

	alert("la multiplicación es " + multiplicacion);
}

function dividir()
{
	let nro1;
	let nro2;
	let division;
	nro1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	nro2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	division = nro1 / nro2;

	alert("la división es " + division);
}