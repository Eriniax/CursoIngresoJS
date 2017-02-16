function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch (mesDelAño)
	{
		case "Febrero":
		alert("si tiene 28 dias");
		break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Si tienen 31 Dias");
		break;

		default:
			alert("Si tiene 30 dias");
		break;
	}
	



}//FIN DE LA FUNCIÓN