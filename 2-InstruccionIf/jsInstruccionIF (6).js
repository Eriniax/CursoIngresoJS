function Mostrar()
{
//tomo la edad  

	var edad;

	edad = document.getElementById('edad').value;

	if (edad<18 && edad>12)
	{
		
		alert("Adolescente");
		
	}

	if (edad>17)
	{
		alert("Mayor de edad");
	}

	if (edad<13)
	{
		alert("Niño");
	}

}//FIN DE LA FUNCIÓN