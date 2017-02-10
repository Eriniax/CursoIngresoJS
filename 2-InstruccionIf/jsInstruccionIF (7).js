function Mostrar()
{
//tomo la edad  

	var edad;

	soltero = "Soltero"; //Soltero es una palabra, no una VARIABLE, ya que no cambia

	var estadocivil;

	edad = document.getElementById('edad').value;

	estadocivil = document.getElementById('estadoCivil').value;

	//Esta var la saque del <option value="Soltero"> Soltero </option> para dejarla como texto

	if (edad<18&&estadocivil!=soltero)
	{
		alert("Es muy pequeño para No ser soltero");
	}


}//FIN DE LA FUNCIÓN