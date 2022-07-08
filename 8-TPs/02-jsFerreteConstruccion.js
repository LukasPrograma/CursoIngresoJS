/*Lucas Leonardo Palacios Bulige
2.	Para el departamento de Construcción:
A.mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambrar con tres hilos de alambre.
B.mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo ()
{
    let largo;
    let ancho;
    let perimetro;

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);
    perimetro = (largo + ancho) * 2;

    alert("La cantidad de alambre a comprar son : " + (perimetro *3) + " metros");

}
function Circulo ()
{


    let radio;
    let alambre;

    /*const PI = 3.141592;
    Math.PI*/

    radio = parseInt(document.getElementById("txtIdRadio").value);
    alambre = ((radio*2)*Math.PI)*3;

    alert(" La cantidad de alambre a comprar: " +alambre.toFixed(2) + " metros");



}
function Materiales ()
{
	let largo;
    let ancho;
    let superficie;
    let bolsaCemento;
    let bolsaCal;

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);

    superficie = largo*ancho;
    bolsaCemento = superficie*2;
    bolsaCal = superficie*3;

    alert("Se necesitan "+bolsaCemento+" bolsas de cemento y "+bolsaCal+" bolsas de cal para cubrir toda la superficie del terreno, que mide "+superficie+" metros cuadrados");
}