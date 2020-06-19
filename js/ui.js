class Interfaz{

  constructor(){
    this.init();
  }
  init(){
    this.construirSelect();
  }

  construirSelect(){
    cotizador.obtenerMonedasAPI()
    .then(monedas => {

      // Crear un select de opciones
      const select = document.querySelector('#criptomoneda');

      // Iterar por los resultados de la api
      for( const [key,value] of Object.entries(monedas.monedas.Data) ){
        /* 
          Object.entries toma objetos y los convierte en arreglo mostrando llave y valor.
          Aunque utilice solo uno de los dos parametros siempre debo pasarle ambos, key y value.
        */

        // Añadir el Symbol y el Nombre como opciones
        const opcion = document.createElement('option');
        opcion.value = value.Symbol; 
        opcion.appendChild(document.createTextNode(value.CoinName));
        select.appendChild(opcion);
      }
    })
  }

  mostrarMensaje(mensaje, clases){
    const div = document.createElement('div');
    div.className = clases;
    div.appendChild(document.createTextNode(mensaje));

    //seleccionar mensajes
    const divMensaje = document.querySelector('.mensajes');
    divMensaje.appendChild(div);

    // mostrar contenido
    setTimeout(() => {
      document.querySelector('.mensajes div').remove();
    }, 3000);
  }

}