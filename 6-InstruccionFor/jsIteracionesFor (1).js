function Mostrar()
{
   var contador=0;
   var contador1=0;
   var contador2=0;
   var contador3=0;
   var contador4=0;
   var contador5=0;
   var contador6=0;
   var contador7=0;
   var contador8=0;
   var contador9=0;
   var contador10=0;


       

		/*for(; ;)
   		{
   			alert("Numero:"+contador);
   			contador++;

   			if(contador==5)
   			{
   				break;
   			} */



   		for( ;contador<1000;contador++)
   		{
   			
   			var numerorandom = Math.floor((Math.random() * 10) + 1);
   			
   			
   			switch(numerorandom)
   			{
   				case 1:
   				contador1++;
   				break;

   				case 2:
   				contador2++;
   				break;
   				
   				case 3:
   				contador3++;
   				break;
   				
   				case 4:
   				contador4++;
   				break;
   				
   				case 5:
   				contador5++;
   				break;
   				
   				case 6:
   				contador6++;
   				break;
   				
   				case 7:
   				if(contador7 == 7)
   				{
   					continue
   				}
   				contador7++;
   				break;
   				
   				case 8:
   				contador8++;
   				break;
   				
   				case 9:
   				contador9++;
   				break;

   				case 10:
   				contador10++;
   				break;
   			}

   		
   		


   		}




   		console.log("La cantidad de uno es " +contador1 /contador*100+"%");

   		console.log("La cantidad de dos es " +contador2/contador*100+"%");

   		console.log("La cantidad de tres es " +contador3/contador*100+"%");

   		console.log("La cantidad de cuatro es " +contador4/contador*100+"%");

   		console.log("La cantidad de cinco es " +contador5/contador*100+"%");

   		console.log("La cantidad de seis es " +contador6/contador*100+"%");

   		console.log("La cantidad de siete es " +contador7/contador*100+"%");

   		console.log("La cantidad de ocho es " +contador8/contador*100+"%");

   		console.log("La cantidad de nueve es " +contador9/contador*100+"%");

   		console.log("La cantidad de diez es " +contador10/contador*100+"%");

   		






   		} 
