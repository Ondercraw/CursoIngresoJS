/*
Velazco Thomas Ivan DIV E 

IF ej4
*/


function mostrar()
{
	//tomo la edad  

	var edad;

	//tomo los datos por 'ID'

	edad = txtIdEdad.value;

	edad = parseInt(edad);


	//si la edad es igual o mayor a 13 e igual o menor a 17 muestra un mensaje 

	if(edad >= 13 && edad <= 17)

	{
		alert("La persona es un adolescente");
	}

	
}//FIN DE LA FUNCIÓN