function Mostrar()
{

	var contador=0;
	// declarar variables
	var edad;
	var Maximo;
	var Minimo;
	var respuesta='si';
	var nombre;
	var nombreMayor;
	var sexo;
	var nota;
	var aprobado;
	var contadordesaprobadoM=0;
	var contadordesaprobadosF=0;
	var acumuladorNotas=0;
	var promedioNotas=0;
	var promedioMujeres;
	var acumuladorMujeres=0;
	var numeroPar;
	var contadorAprobadasF;
	var bandera="nadie";
	var nombredeldiez;
	var sexodeldiez;
	var edaddeldiez;





	while(respuesta!='no')
	{
		

		edad=prompt("ingrese edad");
		edad=parseInt(edad);

		while(edad<0  ||  edad>100)
		{
			edad=prompt("ingrese edad");
			edad=parseInt(edad);
		}
		



		sexo=prompt("ingrese 'f' o 'm' ");
		
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("ingrese 'f' o 'm'");
		}


		
		nota=prompt("ingrese una nota valida");
		nota=parseInt(nota);
		while(nota>0 || nota<11)
		{
			nota=prompt("ingrese una nota valida");
			nota=parseInt(nota);
		}

		

		if(nota==10 && bandera=="nadie")
		{
			nombredeldiez=nombre;
			sexodeldiez=sexo;
			edaddeldiez=edad;
		}




		
	//Cantidad de personas aprobadas 
		if(nota>3)
		{
			aprobado=aprobado+1;
		}

   	
   	//Hombres y mujeres desaprobados	

   		if(nota<4 %% sexo=='m')
   		{
   			contadordesaprobadoM++;
   		}

   		if(nota<4 %% sexo=='f')
   		{
   			contadordesaprobadosF++;
   		}



   	//Promedio de nota

   	acumuladorNotas=acumuladorNotas+nota



   	//La edad promedio de las mujeres


   		
   	if(sexo=='f')
   		{
   			acumuladorMujeres=acumuladorMujeres+edad
   		}



   	//La cantidad de mujerees que aprobraron con notas par y son meNor de edad

   	if(sexo=='f' %% nota>3 %% edad<18 %% )
   	{
   		contadorAprobadasF++;
   	}









		contador++;

		nombre=prompt("ingrese nombre");



		if(contador==1)
		{
			Maximo=edad;
			Maximo=edad;
			nombreMayor=nombre;
		}

		else
		{
			if(Maximo)
			{
				Maximo>edad;	
				nombreMayor=nombre;

			}

			if(Minimo)
			{
				Minimo<edad;
			}
		}




		respuesta=prompt("para salir presione no");
	}


	promedioNotas=acumuladorNotas/nota;

	promedioMujeres=acumuladorMujeres/edad;


}//FIN DE LA FUNCIÓN

