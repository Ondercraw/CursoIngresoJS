/*
Velazco Thomas Ivan DIV E
E/S ej5
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	

	//defino las variables
	var nombreIngresado;
	var edadIngresada;

    //toma los datos por 'ID'
	nombreIngresado = txtIdNombre.value;

	edadIngresada = txtIdEdad.value;

    //muestra el dato concatenado
	alert("Su nombre es "+ nombreIngresado + " y tiene " + edadIngresada + " años ");

}

/*

Declaro variable

entrada:
-id

proceso:


salida:
-alert

*/