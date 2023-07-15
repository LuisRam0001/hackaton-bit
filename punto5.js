 //escribe una funcion que reciba un numero como parametro y determine si es un numero primo .Devuelve true si es primo y false si no lo es 
 //NO se puede usar operaciones del lenguaje que realicen esta tarea directamente
 
 
 let numeroPrimo = Number(prompt('Ingrese un numero'));
 
 function esPrimo(numero) {
    if (numero < 2) {
      return false;
    }
  
    for (let i = 2; i <= numero / 2; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(numeroPrimo); 
  
  


















































