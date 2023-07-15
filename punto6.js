//Escribe una funcion que reciba un numero como parametro y devuelva el factorial de ese numero. El factorial de un numero de obtiene multiplicando todos los numeros enteros desde 1 hasta el numero dado

let numero = Number(prompt('Ingresa un numero'));
let factorial = 1;

for( let i = 1; i <= numero; i++){
    factorial *= i
}
console.log(factorial);
