/*
Velazco Thomas Ivan DIV E 

IF ej5
*/


function mostrar()
{
	//tomo la edad  

	var edad;

	//tomo los datos por 'ID'

	edad = txtIdEdad.value;

	edad = parseInt(edad);	


	//si la edad es menor a 13 y  mayor a 17 muestra  un mensaje 

	if(edad < 13 || edad > 17)

	{
		alert("La persona no es un adolescente");
	}


}//FIN DE LA FUNCIÓN