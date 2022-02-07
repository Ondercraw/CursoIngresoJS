/*
Velazco Thomas Ivan DIV E 

IF ej10
*/

function mostrar()
{
	var nota;
	var numeroMinimo;
	var numeroMaximo;

	numeroMinimo = 1;

	numeroMaximo = 10;

	nota = Math.round(Math.random() * (numeroMaximo - numeroMinimo) + numeroMinimo);


	if(nota >= 9)
		{
			alert("Excelente, Nota: " + nota );
		}

	else if(nota >=4)
		{
			alert("Aprobo, Nota: " + nota);
		}

	else
		{
			alert("Vamos, la proxima se puede, Nota: " + nota);
		}




}//FIN DE LA FUNCIÓN