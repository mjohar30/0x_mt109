var numbers = [1,2,3,4,5]
var d = 4

function leftRotation(a,b){
    a = a.concat(a.splice(0,b))
    console.log(a)
}

leftRotation(numbers,d)