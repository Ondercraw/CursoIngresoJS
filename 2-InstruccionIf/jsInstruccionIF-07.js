/*
Velazco Thomas Ivan DIV E 

IF ej7
*/


function mostrar()
{
	var edad;
	var estadoCivil;

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	estadoCivil = document.getElementById("estadoCivil").value;

	if(edad < 18 && estadoCivil != "Soltero")

		{
			alert("Es muy pequeño para NO ser soltero");
		}

}//FIN DE LA FUNCIÓN