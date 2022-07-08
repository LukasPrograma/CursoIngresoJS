/*Lucas Leonardo Palacios Bulige
entregado
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let nro1;
	let nro2;
	let resto;

	nro1 = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	nro2 = parseInt(document.getElementById("txtIdNumeroDivisor").value);

	resto = nro1%nro2;
	alert("el resto es "+resto);
}