function mostrar()
{
	/*Lucas Leonardo Palacios Bulige
	Div X
	Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .*/

	//Declaro variable
	let edad;

	//Ingreso variable
	edad = document.getElementById("txtIdEdad").value;
	//Parseo el dato
	edad = parseInt(edad);

	//Procesamiento de datos
	if(edad>=13 && edad <=17){
		alert("la persona es adolescente.");
	}



}//FIN DE LA FUNCIÓN