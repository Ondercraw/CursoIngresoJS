/*
Velazco Thomas Ivan DIV E
E/S ej7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    //defino las variables
	var numeroUno;
	var numeroDos;
	var resultado;

	//tomo los numeros por 'ID'

    numeroUno = txtIdNumeroUno.value;

    numeroDos = txtIdNumeroDos.value;

    //transforma la variable de texto a numero

    numeroUno = parseInt(numeroUno);

	numeroDos = parseInt(numeroDos);

	//suma los valores de los dos variables
	resultado = numeroUno + numeroDos;

	//muestra el resultado de la suma

	alert("El resultado de la suma es: " + resultado);	
}


//REPITO EL MISMO PROCESO CON SUS DIFERENTES OPERACIONES ARITMETICAS


function restar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

    numeroUno = txtIdNumeroUno.value;

    numeroDos = txtIdNumeroDos.value;

    numeroUno = parseInt(numeroUno);

	numeroDos = parseInt(numeroDos);

	resultado = numeroUno - numeroDos;

	alert("El resultado de la resta es: " + resultado)
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var resultado;

    numeroUno = txtIdNumeroUno.value;

    numeroDos = txtIdNumeroDos.value;

    numeroUno = parseInt(numeroUno);

	numeroDos = parseInt(numeroDos);

	resultado = numeroUno * numeroDos;

	alert("El resultado de la multiplicacion es: " + resultado);
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var resultado;

    numeroUno = txtIdNumeroUno.value;

    numeroDos = txtIdNumeroDos.value;

    numeroUno = parseInt(numeroUno);

	numeroDos = parseInt(numeroDos);

	resultado = numeroUno / numeroDos;

	alert("El resultado de la division es: " + resultado)
}

/*

Declaro variable

entrada:
-ID
-parseInt

proceso:


salida:
-alert

*/