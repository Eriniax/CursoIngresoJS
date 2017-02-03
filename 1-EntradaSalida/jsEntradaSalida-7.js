/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	
	var numeroUno;
	var numeroDos;

	numeroUno = document.getElementById('numeroUno').value;

	numeroDos = document.getElementById('numeroDos').value;

	alert(("La Suma es") + (" ") + (parseInt(numeroUno) + parseInt(numeroDos))); 


}

function restar()
{
	
	
	var numeroUno;
	var numeroDos;

	numeroUno = document.getElementById('numeroUno').value;

	numeroDos = document.getElementById('numeroDos').value;

	alert(("La Resta es") + (" ") + ((numeroUno) - (numeroDos))); 


}

function multiplicar()
{ 
	

	var numeroUno;
	var numeroDos;

	numeroUno = document.getElementById('numeroUno').value;

	numeroDos = document.getElementById('numeroDos').value;

	alert(("La Multiplicacion es") + (" ") + ((numeroUno) * (numeroDos))); 


}

function dividir()
{
	
	var numeroUno;
	var numeroDos;

	numeroUno = document.getElementById('numeroUno').value;

	numeroDos = document.getElementById('numeroDos').value;

	alert(("La Division es") + (" ") + ((numeroUno) / (numeroDos))); 


}


//Solo la suma se usa parseInt dado que el simbolo + tambien se usa para concatenar 	