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

  // Imprime el resultado de la cotizacion
  mostrarResultado(resultado, moneda, crypto){

    const datosMoneda = resultado[crypto][moneda];

    console.log(datosMoneda)

    // recortar digitos de precio
    let precio = datosMoneda.PRICE.toFixed(2),
        porcentaje = datosMoneda.CHANGEPCTDAY.toFixed(2),
        actualizado = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-CL');

    //construir el template
    let templateHTML = `
      <div class="card bg-warning">
        <div class="card-body text-light">
          <h2 class="card-title">Resultado:</h2>
          <p>El Precio de ${datosMoneda.FROMSYMBOL} a ${datosMoneda.TOSYMBOL} es de: $ ${precio}</p>
          <p>Variación último día: % ${porcentaje}</p>
          <p>Última actualización: ${actualizado}</p>
        </div>
      </div>
    `;

    // insertar el resultado
    document.querySelector('#resultado').innerHTML = templateHTML;
  }

}