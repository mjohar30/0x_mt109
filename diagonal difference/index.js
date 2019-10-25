var matrix = [ 
    [1, 2, 3], 
    [4, 5, 6], 
    [9, 8, 9] ]
// Si se quiere hacer otra prueba, comenta la variable matrix de arriba y usa la siguiente variable: 
// var matrix = [ 
//     [1, 2, 3, 3], 
//     [4, 5, 6, 3], 
//     [9, 8, 9, 3],
//     [9, 8, 9, 3] ]
function diagonalDifference(matrix){
    var leftToRight = 0
    var rightToLeft = 0
    // -leftToRight: se va obteniendo el número correspondiente pasando por la posición 0 del arreglo 0 de la matriz(matrix), luego la posición 1 del arreglo 1
    //     y así sucesivamente, y al mismo tiempo se van sumando para tener la suma de la diagonal.
    // -rightToLeft: es el mismo procedimiento con la diferencia que será la diagonal contraria, y que para obtener la posición del arreglo se tiene que hacer la siguiente operación:
    //     longitud de la matrix - i - 1
    //  Donde la longitud de la matriz, javascript la empezará a contar a partir de 1.
    //  La variable i empezará en 0 e irá incrementanado
    //  Y siempre se le restará 1 por la inconsistencia que se tiene al sacar la longitud de la matriz, dado que no empieza la longitud en 0
    for (i = 0; i < matrix.length; i++) {
        leftToRight += matrix[i][i]
        rightToLeft += matrix[i][matrix.length - i - 1]
    }
    console.log(`La diferencia de la suma de las diagonales es ${Math.abs(leftToRight - rightToLeft)}`)
}

diagonalDifference(matrix)
