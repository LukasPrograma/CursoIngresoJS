function mostrar()
{
	/*Lucas Leonardo Palacios Bulige
	Div X
	no entregado
	Al ingresar una edad debemos informar solo si la persona es mayor de edad*/

	//Declaro variable
	let edad;

	//Ingreso variable
	edad = document.getElementById("txtIdEdad").value;
	//Parseo el dato
	edad = parseInt(edad);

	//Procesamiento de datos
	if(edad >=18){
		alert("Es mayor de edad");
	}

}//FIN DE LA FUNCIÓN