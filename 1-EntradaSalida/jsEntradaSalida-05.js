/*Lucas Leonardo Palacios Bulige
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{
	let nombreIngresado;
	let edadIngresado;
	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadIngresado = document.getElementById("txtIdEdad").value;
	alert("Usted se llama " + nombreIngresado + " y tiene " + edadIngresado + " años");
}

