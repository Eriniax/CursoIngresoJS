/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	var sueldo;

	var resultado;

	sueldo = parseInt(sueldo);

	resultado = parseInt(resultado);

	sueldo = document.getElementById('sueldo').value;
	
	resultado = sueldo * 1.10;
	
	document.getElementById('resultado').value = resultado;

	
	/*  Me equivocaba en escribir resultado=sueldo*1.10 despues del document.=resultado. Por lo que no tenia la operacion en cuenta.
		Doy las variables, los paso a numeros enteros, luego doy el sueldo, hago la operacion para el resultado y luego
		doy el resultado.

	*/
	




}
