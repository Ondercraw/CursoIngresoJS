/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
/*

function mostrarDescuento()
{

	//defino las variables
	var importe;
	var resultado;

	//tomo los numeros por 'ID'

    importe = txtIdImporte.value;

    //transforma la variable de texto a numero

    importe = parseInt(importe);

    //descuenta el importe en un 25%

	resultado = (importe - ((importe * 25) / 100));

	//muestra el resultado en el cuadro de texto

	txtIdResultado.value = resultado;
	
}
*/
/*Declaro variable

Entrada:
-ID
-parseInt

proceso:

salida:

-ID
*/

function mostrarDescuento()
{

	var importe;
	var resultado;
	var descuento;
	var descuentoPorcentaje;

    importe = txtIdImporte.value;

    importe = parseInt(importe);
    
    descuentoPorcentaje = prompt("Ingrese el descuento");

	descuento = importe * descuentoPorcentaje / 100;
	
	resultado = importe - descuento;



	alert("Su importe es " + importe + ", el descuento es de " + descuento + " y su importe con descuento es " + resultado);
	
}