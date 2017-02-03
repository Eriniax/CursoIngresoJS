/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	

	var nombre;

	nombre = prompt("Ingrese su nombre");

	document.getElementById('elNombre').value = nombre;

	//El codigo se lee de arriba hacia abajo, por lo que es importante que el codigo este estructurado de manera logica.

	

}

