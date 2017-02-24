Parcial Entrada y Salida

//Ejercicio 1

function Mostrar()
{

	var perimetro;
	var base;

	

	base = document.getElementById('Base').value;
	

	perimetro = parseInt(perimetro);
	base = parseInt(medidaLados);

	
	perimetro = base * 4;



	alert("El perimetro es " + perimetro);

}

//Ejercicio 2


function Mostar()
{

	var importe;

	
	importe = prompt("Ingrese el importe"," ");

	
	importe = importe * 1.21;

	
	alert("El importe total es " + importe)



}



//Ejercicio 3

function Cuadrado()
{

	var parametro;
	var resultado;
	var largo = document.getElementById('Largo').value;
	var ancho = document.getElementById('Ancho').value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	parametro = (largo + ancho) * 2;

	resultado = parametro * 3

	alert("La cantidad que necesita es " + resultado);



}