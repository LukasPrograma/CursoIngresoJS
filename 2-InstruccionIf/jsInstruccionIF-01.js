function mostrar()
{
	/*Lucas Leonardo Palacios Bulige
	Div X
	entregado
	Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".*/

	//Declaro variable
	let edad;

	//Ingreso variable
	edad = document.getElementById("txtIdEdad").value;
	//Parseo el dato
	edad = parseInt(edad);

	//Procesamiento de datos
	if(edad == 15){
		alert("niña bonita");
	}
}//FIN DE LA FUNCIÓN