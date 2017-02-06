/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/



function Rectangulo () 

{
	var Largo;

	var Ancho;

	

	Largo = document.getElementById('Largo').value;

	Ancho = document.getElementById('Ancho').value;


	largo = parseInt(Largo);

	Ancho = parseInt(Ancho);


	alert((2*(parseInt(Largo) + parseInt(Ancho)))*3);



//sacar el perimetro 2 (a+b)


}



function Circulo () 


{
	
	var radio;

	
	radio = document.getElementById('Radio').value;


	radio = parseInt(radio);

	alert(2*(Math.PI)*radio);


}


function Materiales () 


{

	var largo;

	var ancho;

	var superficie;

	largo = document.getElementById("Largo").value;

	ancho = document.getElementById("Ancho").value;

	largo = parseInt(largo);

	ancho = parseInt(ancho);

	superficie = (largo * ancho);

	superficie = parseInt(superficie);

	alert("Se necesitan" + " " + (superficie*largo) +" " + "bolsas de cemento y" + " " + (superficie*ancho) + " " + "bolsas de cal");



}