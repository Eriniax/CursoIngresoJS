/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	

	var importe;

	var resultado;

	importe = parseInt(importe);

	resultado = parseInt(resultado);

	importe = document.getElementById('importe').value;

	resultado = importe * 0.75;	

	document.getElementById("resultado").value = resultado;



	//Igual que el ejercicio 9 pero aca se aplica un descuento
	//Buscar la forma matematica la cual se llega al 1.10 y al 0.75 como incremento del 10% y descuento del 75% respectivamente

}
