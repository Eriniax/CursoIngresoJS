/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	
	/*var Resultado;

	Resultado = 2 % 10;

	alert(Resultado);

	Resultado = 10 % 2;

	alert(Resultado);*/	

	var dividendo;

	var divisor;

	var resultado;
 
	dividendo = document.getElementById('numeroDividendo').value;

	divisor = document.getElementById("numeroDivisor").value;
 
	dividendo = parseInt(dividendo);

	divisor = parseInt(divisor);

	resultado = dividendo % divisor;

	alert("El resto es " + resultado);


	/*Coloque 
	
	dividendo = parseInt(dividendo);

	divisor = parseInt(divisor);

	pero no es necesario pasar a numero dado que es una cuenta, aunque en el ejercisio se pide. Tambien se puede colocar adelante
	de document.get pero se debe respetar lo que el enunciado dice.
	
	*/
















}
