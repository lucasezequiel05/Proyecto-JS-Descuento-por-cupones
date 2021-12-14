// Desarrollo de fórmulas

// const precioOriginal = 10000;
// Cupones disponibles
// const cupones = [
//     {nombre: "segunda compra", valor: 15},
//     {nombre: "lunes", valor: 10},
//     {nombre: "mayor $3000", valor: 15},
//     {nombre: "blackfriday", valor: 25},
// ];
// Aplicación del descuento
// const cupon = cupones[1];
// const descuento = cupon.valor;
// const precioFinal = ( precioOriginal * (100-descuento) ) / 100;
// console.log({
//     precioOriginal,
//     cupon.nombre,
//     descuento,
//     precioFinal
// })

// Cupones disponibles
const cupones = [
    {nombre: "segunda compra", valor: 15},
    {nombre: "lunes", valor: 10},
    {nombre: "mayor $3000", valor: 15},
    {nombre: "blackfriday", valor: 25},
];

// Encapsulamiento:

// Ingresar precio de producto
function ingresarPrecio(){
    var input = document.getElementById("inputPrecio");
    const precioOriginal = Number(input.value);
    return precioOriginal;
}

// Ingresar cupón a utilizar por el usuario
function ingresarCuponUsuario(){
    var input = document.getElementById("inputCupon");
    const cuponUsuario = input.value;
    return cuponUsuario;
}

// Verificar si el cupón es valido.
function verificarCupon(cuponUsuario){

    const pos =cupones.findIndex(elemento => {

        return elemento.nombre === cuponUsuario;
    });

    return pos >= 0 ? true : false ;
}

// Obtener el descuento del cupón correspondiente
function obtenerValorDescuento(cuponUsuario){
    
    function validar (elemento) {
        return elemento.nombre === cuponUsuario;
    }
    
    const cupon = cupones.find(validar);
    return cupon.valor;
}

// Procesar descuento
function procesarDescuento(precioOriginal, valorDescuento){
    const precioFinal = ( precioOriginal * (100-valorDescuento) ) / 100;
    return precioFinal;
}

// Generar mensaje de aprobación
function mensajeCuponAprobado(precioFinal, valorDescuento){
    const mensaje = document.getElementById("mensaje");
    mensaje.innerText = `Se aplica un descuento del ${valorDescuento}%. El precio final es de $ ${precioFinal}.`;
}

// Generar mensaje de rechazo
function mensajeCuponRechazado(cuponUsuario){
    const mensaje = document.getElementById("mensaje");
    mensaje.innerText = `El cupón "${cuponUsuario}" ingresado no tiene validez.`;
}

// Programa principal
function onClickButtonProcesarCupones(){

    const precioOriginal = ingresarPrecio();

    const cuponUsuario = ingresarCuponUsuario();

    if(verificarCupon(cuponUsuario)){
        
        const valorDescuento = obtenerValorDescuento(cuponUsuario);
        
        const precioFinal = procesarDescuento(precioOriginal, valorDescuento);
        
        mensajeCuponAprobado(precioFinal, valorDescuento);

    } else{
        mensajeCuponRechazado(cuponUsuario);
    }
}