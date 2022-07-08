function mostrar()
{
	/*Lucas Leonardo Palacios Bulige
	Div X
	Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
	pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.''*/

	//Declaro variable
	let edad;
	let estadoCivil;

	//Ingreso variable
	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	//Parseo el dato
	edad = parseInt(edad);

	//Procesamiento de datos
	if(edad<18 && estadoCivil != "Soltero"){
		alert("No hacer nada.");
	}
	else{
		if(edad>=18 && estadoCivil == "Soltero"){
			alert("Es Soltero y no es menor.")
		}
	}


}//FIN DE LA FUNCIÓN