function mostrar()
{
	/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
	"EXCELENTE" para notas igual a 9 o 10,
	"APROBÓ" para notas mayores a 4,
	"Vamos, la proxima se puede" para notas menores a 4*/


	let nroRandom;
	nroRandom = Math.floor(Math.random() * 10) + 1;
	if(nroRandom == 9 || nroRandom == 10){
		alert("EXCELENTE");
	}
	else if(nroRandom >= 4){
		alert("APROBÓ");
	}
	else{
		alert("Vamos, la proxima se puede");
	}
}//FIN DE LA FUNCIÓN