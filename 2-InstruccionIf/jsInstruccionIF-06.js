/*
Velazco Thomas Ivan DIV E 

IF ej6
*/


function mostrar()
{
	var edad;

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	if(edad >= 18)
	{
	alert("La persona es mayor de edad");
	}
	else if(edad >= 13 && edad <= 17)
	{
	alert("La persona es un adolescente");
	}
	else 
	{
	alert("La persona es un niño");
	}



}//FIN DE LA FUNCIÓN