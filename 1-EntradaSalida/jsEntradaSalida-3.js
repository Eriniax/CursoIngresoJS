/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	

	var nombre;

	nombre = document.getElementById('elNombre').value;

	//Lo que va dentro del document.getelementbyid va entre () y "". 
	//Aca se dice que la variable nombre es igual al documento.obtenerElementoPorID("ID texto") por lo que se toma el id del imput.
	//El .value lo que hace es valorar el codigo y devolver el objeto. 

	alert(nombre);





}


