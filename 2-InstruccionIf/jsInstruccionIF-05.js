function mostrar()
{
	/*Lucas Leonardo Palacios Bulige
	Div X
	no entregado
	Al ingresar una edad solo debemos informar si la persona NO es adolescente.*/

	//Declaro variable
	let edad;

	//Ingreso variable
	edad = document.getElementById("txtIdEdad").value;
	//Parseo el dato
	edad = parseInt(edad);
	//Procesamiento de datos
	if(edad<18){
		alert("La persona no es adolescente.");
	}

}//FIN DE LA FUNCIÓN