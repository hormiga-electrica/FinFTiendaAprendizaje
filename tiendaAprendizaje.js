const nombrePlayera = 'Muerte Alada';


const talla = function() {
  const tallaSeleccionada = document.querySelector('input[id="tallaMediana"]:checked') || 
  document.querySelector('input[id="tallaGrande"]:checked') || 
  document.querySelector('input[id="tallaXGrande"]:checked');
  if (tallaSeleccionada) {
    return tallaSeleccionada.value;
  } else {
    return alert('Elige talla mi todo torta');
  }
}

let cantidadPlayeras = 0;
let precioPlayeras = 250;

const botonAgregar = document.querySelector('#botonAgregar');
//const botonAñadir = document.querySelector('#botonAñadir');//
const botonQuitar = document.querySelector('#botonQuitar');
const mostrador = document.querySelector('#mostrador');
const botonPagar = document.querySelector('#botonPagar');


let resultadoMostrador = () => mostrador.innerHTML = `
  -Agregaste: ${cantidadPlayeras} PLAYERA<br>
  "${nombrePlayera}"<br>
  Mediana: ${cantidadMediana}<br>
  Grande: ${cantidadGrande}<br>
  XGrande: ${cantidadXGrande}<br>
  -Total: $${precioPlayeras * cantidadPlayeras}
`;


function agregarPlayera() {
if (!talla()) {
  return;
}
cantidadPlayeras++;
añadirMediana();
añadirGrande();
añadirXGrande();
resultadoMostrador();
}
botonAgregar.addEventListener('click', agregarPlayera);


let cantidadMediana = 0;

function añadirMediana() { 
  if (document.querySelector('input[id="tallaMediana"]:checked')) {
    cantidadMediana++;
  }
}


const botonQuitarM = document.querySelector('#botonQuitarM');

function restarM() {
  if (añadirMediana > 0) {
    cantidadPlayeras--;
    cantidadMediana--;
}
  resultadoMostrador();
}
botonQuitarM.addEventListener('click', restarM);


let cantidadGrande = 0;

function añadirGrande() {
  if (document.querySelector('input[id="tallaGrande"]:checked')){
    cantidadGrande++;
  }
}


let cantidadXGrande = 0;

function añadirXGrande() {
  if (document.querySelector('input[id="tallaXGrande"]:checked')){
    cantidadXGrande++;
  }
}

/*function quitarPlayera() {
  if (cantidadPlayeras > 1) {
    cantidadPlayeras--;
  } else {
    cantidadPlayeras = 0;
}
  resultadoMostrador();
}
botonQuitar.addEventListener('click', quitarPlayera);*/


/*function añadirPlayera() {
  cantidadPlayeras++;
  resultadoMostrador();
}
botonAñadir.addEventListener('click', añadirPlayera);
*/