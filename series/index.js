var numbers = "0123456789"
var digit = 4
/* La función serie recibe 2 parámetros: 
    -string, que será la cadena de números
    -digit, que servirá para saber de que tamaño será la serie
*/
function series (string,digit) {
    if (digit > string.length) {
        console.log('Error: No se puede generar la serie. La cadena de números es mayor al dígito proporcionado para la generación de la serie.')
    }
    /* El método substr sirve para extraer una parte del string, en donde le pasamos como parámetro el número de posición en 
    donde empezará (i) y el número en donde terminará (digit). 
    El ciclo for permite que el número de posición en donde empezará aumente en cada iteración y pueda recorrer todo el string */
    for (i = 0; i < string.length; i++) {
        var res = string.substr(i,digit)
        if (res.length === digit) {
            console.log(res)
        }
    }
}

series(numbers, digit)


