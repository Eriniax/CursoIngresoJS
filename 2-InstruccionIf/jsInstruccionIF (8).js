function Mostrar()
{
//tomo la edad  

	var edad;

	var estadocivil;

	soltero = "Soltero";

	edad = document.getElementById('edad').value;

	estadocivil = document.getElementById('estadoCivil').value;

	

	if (edad>17&&estadocivil==soltero)
	{
		alert("Es soltero y no es menor");
	}


}//FIN DE LA FUNCIÓN