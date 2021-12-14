# Proyecto-JS-Descuento-por-cupones

### El fin de este proyecto es realizar prácticas con Javascript.
### Se implementa un sistema de descuento por cupones para una tienda ficticia.

1. Análisis y definición de las soluciones a aplicar:
    + Se contara con una lista implementada como un array de objetos donde se almacenaran los nombres de cupones y el valor a descontar que representan.

    + Luego de ingresar el precio original se ingresa el id o nombre del cupón que se desea verificar su validez.

    + La verificación se realiza mediante la lectura de los datos de cupones almacenados y la comprobación de la existencia del cupón ingresado, en caso de ser válido se procede a solicitar el objeto almacenado para pasar a procesar la operación mediante el precio original y los datos del cupón.
    
    + Se informa por pantalla el resultado de la operación, incluyendo precio final y el porcentaje de descuento que se utilizo, mediante la generación de un párrafo a través de la etiqueta mensaje.

2. Implementar las funciones en Javascript con valores constantes.

3. Encapsulamiento y creación de funciones para recibir parámetros.

    + ingresarPrecio e ingresarCuponusuario: Escuchan el input y obtienen el value mediante .getElementById("").
    
    + verificarCupon: Esta función retorna true o false mediante la comprobación de si el nombre ingresado esta almacenado en el array de cupones. Utilizo la función para recibir el nombre como parámetro y dentro de esta aplico el método .findIndex() con una función anónima que compara la propiedad nombre de cada elemento con el parámetro recibido.

    + obtenerValorDescuento: Retorna la propiedad valor del cupon almacenado en el array. Utilizo el método .find() pasando como parámetro la función validar para extraer el objeto deseado.

    + procesarDescuento: Recibe como parámetros el precio y el descuento a aplicar. Realiza la operación `( precioOriginal * (100-valorDescuento) ) / 100` retornando el precio final.
    
    + mensajeCuponAprobado y mensajeCuponRechazado: Realizan la captura de la etiqueta "mensaje" mediante `document.getElementById(" ")`, en la línea siguiente se procede a editar su contenido mediante `.innerText =`. 

4. Integración con HTML.

    + La integración con HTML se realiza a través del evento onclick sobre el botón con la leyenda procesar. Este ejecuta la función onClickButtonProcesarCupones.
