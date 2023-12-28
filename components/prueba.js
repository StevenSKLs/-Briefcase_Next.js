// const array = ['pera', 'apio', 'manzana'];
// const arreglo = array.sort();
// console.log(array);
// var texto = 'Hola, mundo!';
// var textoInvertido = texto.split('').reverse().join('');
// console.log(textoInvertido);

// function name(palabra, letra) {
//   const array = [];

//   const buscador = palabra.split('');
//   for (let i = 0; i < buscador.length; i++) {
//     const encontrar = buscador.indexOf(letra);

//     return array.push(encontrar);
//   }

//   return array;
// }
// console.log(name('hola mundo', 'a'));

function contarRepeticionesLetra(texto, letra) {
  const caracteres = texto.split('');

  const repeticiones = caracteres.filter(function (caracter) {
    return caracter === letra;
  });

  return repeticiones.length;
}

const texto2 = 'Holaoo, mundo!';
const letraBuscada = 'o';

const repeticiones = contarRepeticionesLetra(texto2, letraBuscada);
console.log(repeticiones);

const palabras = 'hola    mundo    como , ,  holas con , ,  hola      '

const filtrado = palabras.split(' ')
const elementoEliminar = ','
const elementoEliminar2 = ''

const arraySinElemento = filtrado.filter( elemento => {
  return elemento !== elementoEliminar;
});

const arraySinElemento2 = arraySinElemento.filter( elemento => {
  return elemento !== elementoEliminar2;
});

console.log(arraySinElemento2)
console.log(arraySinElemento2.length)

// const texto3 = "Hola, mundo!";
// const textoSinEspacios3 = texto.replace(/\s/g, "");
// console.log(textoSinEspacios3);


var texto = "Hola, mundo! Adiós, mundo!";
var palabraEliminar = "mun";

var textoSinPalabra = texto.replace(new RegExp(palabraEliminar, "gi"), "");
console.log(textoSinPalabra)
// const elemt1 = 4
// const arrayS = arreglos.filter( elemento => {
//   return elemento === elemt1;
// });

// console.log(arrayS) 
// console.log(arrayS.length ) 

const arreglos = [4, 5, 2, 4, 5, 9, 9, 4, 4]
// contiene(arreglo, 4, 5) Regresa false;
// contiene(arreglo, 4, 4) Regresa true;


function numeroRepetido(array, num, min) {
const repit = array.filter( element => {
  return element === num;
});

  return repit.length >= min
}

console.log(numeroRepetido(arreglos, 4, 5) )
console.log(numeroRepetido(arreglos, 4, 4) )
console.log(numeroRepetido(arreglos, 4, 3) )
console.log(numeroRepetido(arreglos, 9, 2) )


const array = [ 6, 22, 16, 29, 23 ]

function difference(element){
    return Math.max(...element) - Math.min(...element)
}

console.log(difference(array))




function numberCheck(array) {
const magnitude = array[1] - array[0];
  for (var i = 2; i < array.length; i++) {
if (array[i] - array[i - 1] !== magnitude) {
      return false;
     } 
     return (magnitude === array[array.length -1] - array[array.length -2]) === true ? true: false
  }
  return true;
}

const array1 = [1, 8];
const resultado1 = numberCheck(array1);
console.log(numberCheck(array1));

const array2 = [ 54, 55, 7, 7, 6, 5, 6, 7];
console.log(numberCheck(array2)); 

const array3 = [3, 2, 1, 2, 3, 4, 3];
console.log(numberCheck(array3)); 
