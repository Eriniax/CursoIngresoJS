/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{

 

	var numeroUno;

	var numeroDos;

	numeroUno= document.getElementById('numeroUno').value;

	numeroDos= document.getElementById('numeroDos').value;

	alert(("La suma es") + (" ") + (parseInt(numeroUno) + parseInt(numeroDos))); 

	/* Se abre parentesis de la alerta, se abre parentesis del dialogo que va a ir fijo entre comillas, se concatena con el + ("Aqui va el texto fijo o espacio")
	se concatena con un nuevo parentesis y el parseInt de la suma del numero uno y dos y se cierra parentesis. Luego se cierra el parentesis de la suma de los parseInt
	y el parentesis inicial. */

	//Alert (uno(dos)+(uno(dos))) Importante: Revisar bien los parentesis que se abren y los que cierran y que abren y que cierran
	
  

	


}

