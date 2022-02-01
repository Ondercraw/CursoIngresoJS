/*
Velazco Thomas Ivan DIV E
E/S ej9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	//defino las variables
	var sueldo;
	var resultado;

	//tomo los numeros por 'ID'

    sueldo = txtIdSueldo.value;

    //transforma la variable de texto a numero

    sueldo = parseInt(sueldo);

    //aumenta el sueldo en un 10%

	resultado = (sueldo + (sueldo / 10));

	//muestra el resultado en el cuadro de texto

	txtIdResultado.value = resultado;
}


/* 

Declaro variable

Entrada:
-ID
-parseInt

proceso:

salida:

-ID
*/

