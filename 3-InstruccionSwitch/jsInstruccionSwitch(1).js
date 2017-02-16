function Mostrar()
{
//tomo la edad  

var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {
    case "Enero":
        mesDelAño = alert("Que comiences bien el año!!!");
        break;
    
    case "Marzo":
        mesDelAño = alert("A clases!!!.");
        break;
       
    case "Julio":
        mesDelAño = alert("Se vienen las vacaciones!!!");
        break;
       

    case "Diciembre":
        mesDelAño = alert("Felices fiesta!!!");
        break;
   

 	default: 
 	break;

}


}//FIN DE LA FUNCIÓN