// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if (x > y) {
    return x;
  }
  else {
    if (y > x) {
      return y;
    }
    else {
      return x;
    }
  }
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  var str;
  if (edad >= 18) {
    str = 'Allowed';
  }
  else
  {
    str = 'Not allowed';
  }
  return str;
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  var str;
  if (status == 1) {
    str = 'Online';
  }
  else {
    if (status == 2) {
      str = 'Away';
    }
    else {
      str = 'Offline';
    }
  }
  return str;
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  var str;
  if (idioma == 'aleman') {
    str = 'Guten Tag!';
  }
  else {
    if (idioma == 'mandarin') {
      str = 'Ni Hao!';
    }
    else {
      if (idioma == 'ingles') {
        str = 'Hello!';
      }
      else {
        str = 'Hola!';
      }
    }
  }
  return str
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  var str;
  switch (color) {
    case 'blue':
      str = 'This is blue';
      break;
    case 'red':
      str = 'This is red';
      break;
    case 'green':
      str = 'This is green';
      break;
    case 'orange':
      str = 'This is orange';
      break;
    default:
      str = 'Color not found';
  }
  return str;
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero == 10 || numero == 5) {
    return true;
  }
  else {
    return false;
  }
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero < 50 && numero > 20) {
    return true;
  }
  else {
    return false;
  }
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  var dec;
  dec = Math.floor(numero);
  if (numero == dec) {
    return true;
  }
  else {
    return false;
  }
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  var rest3, rest5, str;
  rest3 = numero % 3;
  rest5 = numero % 5;
  if (rest3 == 0) {
    if (rest5 == 0) {
      str = 'fizzbuzz';
    }
    else {
      str = 'fizz';
    }
  }
  else {
    if (rest5 == 0) {
      str = 'buzz';
    }
    else {
      str = numero;
    }
  }
  return str;
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  if (num1 < 0 || num2 < 0 || num3 < 0) {
    return 'Hay negativos';
  }
  else if (num1 === 0 || num2 === 0 || num3 === 0) {
    return 'Error';
  }
  else if (num1 > num2 && num1 > num3) {
    return 'Número 1 es mayor y positivo';
  }
  else if (num3 > num1 && num3 > num2) {
    var nuevo3 = num3 + 1;
    return nuevo3;
  }
  else {
    return false;
  }
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  var resto, primo;
  primo = true;
  if (numero < 2) {
    primo = false;
  }
  for (let i = 2; i < numero; i++) {
    resto = numero % i;
    if (resto === 0) {
      primo = false;
    }
  }
  return primo;
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if (valor === true) {
    return 'Soy verdadero';
  }
  else {
    return 'Soy falso';
  }
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  let tabla = [];
  for (let i = 0; i < 11; i++) {
    res = 6 * i;
    tabla.push(res);
  }
  return tabla;
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  if (numero >= 100 && numero < 1000) {
    return true;
  }
  else {
    return false;
  }
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var n, i;
  n = numero;
  i = 0;
  do {
    n = n + 5;
    i = i + 1;
  } while (i < 8);
  return n;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
