const cotizador = new API('e2266026652ad3d0460d09852ba210348a18fcac6b3c6a1d66f01be4cffc34f9');
const ui = new Interfaz();


// Leer el formulario
const formulario = document.querySelector('#formulario');
// eventlistener
formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // leer la moneda seleccionada
  const monedaSelect = document.querySelector('#moneda');
  const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

  // leer la criptomoneda seleccionada
  const criptoMonedaSelect = document.querySelector('#criptomoneda');
  const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

  // comprobar que ambos campos tengan algo seleccionado
  if(monedaSeleccionada === '' || criptoMonedaSeleccionada === ''){
    // Arrojar una alerta de error
    ui.mostrarMensaje('Ambos campos son obligatorios', 'alert bg-danger text-center');
  }else{
    // todo bien, consultar la api
  }
})