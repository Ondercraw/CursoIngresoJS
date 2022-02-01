/*
Velazco Thomas Ivan DIV E
E/S ej8
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{

	//defino las variables
	var numeroDividendo;
	var numeroDivisor;
	var resto;

	//tomo los numeros por 'ID'

    numeroDividendo = txtIdNumeroDividendo.value;

    numeroDivisor = txtIdNumeroDivisor.value;

    //transforma la variable de texto a numero

    numeroDividendo = parseInt(numeroDividendo);

	numeroDivisor = parseInt(numeroDivisor);

	//divide los dos numeros y da el resto

	resto = numeroDividendo % numeroDivisor;

	alert("El resto es: " + resto);
}



/*

Declaro variable

Entrada:
-ID
-parseInt

proceso:

Salida:
-alert

*/
