function mostrar()
{
	/*Lucas Leonardo Palacios Bulige
	Div X
	Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/

	//Declaro variable
	let edad;

	//Ingreso variable
	edad = document.getElementById("txtIdEdad").value;
	//Parseo el dato
	edad = parseInt(edad);

	//Procesamiento de datos
	if(edad<13){
		alert("es niño.")
	}
	else{
		if(edad <18){
			alert("es adolescente.")
		}
		else{
			alert("es mayor de edad.")
		}
	}

}//FIN DE LA FUNCIÓN