function mostrar()
{
/*al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."*/
	//tomo el mes
	let mesDelAño =txtIdMes.value;
	if(mesDelAño == "Enero"){
		alert("que comiences bien el año!!!.")
	}
	else if(mesDelAño == "Marzo"){
		alert("a clases!!!.")
	}
	else if(mesDelAño == "Julio"){
		alert("se vienen las vacaciones!!!.")
	}
	else if(mesDelAño == "Diciembre"){
		alert("Felices fiesta!!!.")
	}
	else{
		alert(txtIdMes.value);
	}
}//FIN DE LA FUNCIÓN