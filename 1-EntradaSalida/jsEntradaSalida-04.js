/* 
Velazco Thomas Ivan DIV E
E/S ej4
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//defino variable
	var nombreIngresado;

	//toma el dato por prompt
	nombreIngresado = prompt("Ingrese su nombre");

    //muestro el dato por 'ID'
	txtIdNombre.value = nombreIngresado

    //muestra el dato
	alert(nombreIngresado);
}


/*

Declaro variable

entrada:
-prompt
-id

proceso:


salida:
-alert

*/
