 //escribe una funcion que reciba un numero como parametro y determine si es un numero primo .Devuelve true si es primo y false si no lo es 
//NO se puede usar operaciones del lenguaje que realicen esta tarea directamente


//let numero = Number(prompt("Ingrese un número "));
//
//function esPrimo(numero) {
//   if (numero < 1) {
//     return false;
//   }
//   for (let i = 1; i <= numero; i++) {
//     if (numero % i === numero) {
//       return false;
//     }
//   }
//   return true;
// }
// 
// console.log(esPrimo(numero));
// 



let numero = Number(prompt('Ingrese un numero'));

for (let i = 2; i <= numero; i++) {
  let esPrimo = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      esPrimo = false;
      
    };
  }

  if (esPrimo) {
    console.log(i);

  }
}




























