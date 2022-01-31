/*
Velazco Thomas Ivan DIV E
E/S ej6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{


    //defino las variables
	var numeroUno;
	var numeroDos;
    var resultado;

    //toma los datos por 'ID'

    numeroUno = txtIdNumeroUno.value;

    numeroDos = txtIdNumeroDos.value;

    //transforma la variable de texto a numero

    numeroUno = parseInt(numeroUno);

	numeroDos = parseInt(numeroDos);

	//suma los dos valores de las variables

	resultado = numeroUno + numeroDos;

	//muestra el resultado de la suma

	alert("El resultado de la suma es: "+ resultado);
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