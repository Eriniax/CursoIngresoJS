Parcial If y Else

//Ejercicio 1 If

function Mostrar()
{

	var numerouno = document.getElementById('numeroUno').value;
	var numerodos = document.getElementById('numeroDos').value;
	var resultado;

	numerouno = parseInt(numerouno)
	numerodos = parseInt(numerodos)

	numerouno = prompt("Ingrese primer numero", " ");
	numerodos = prompt("Ingrese segundo numero"," ");

	if (numerouno == numerodos) 
		{
			resultado = numerouno * numerodos
		} 

	else
		{
			
			if (numerouno > numerodos) 
		{
						
			resultado = numerouno - numerodos
		
		} 

	    }
	
	else
		{
			resultado = numerouno + numerodos
		}
			

		}

	
		document.write(resultado);



}



//Ejercicio Switch


function Mostrar()
{

	var diaSemana = document.getElementById('diaSemana').value;

	diaSemana = prompt("Ingrese un dia de la semana", " ");

	switch(diaSemana) 
		{
			case "Sabado":
			
			case "Domingo":
			
			alert("Fin de semana!!");
			break;

			default:
			alert("A trabajar!!");

		}



}