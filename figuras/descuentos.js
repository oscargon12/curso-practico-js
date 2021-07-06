const precioOriginal = 100;
const descuento = 15;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento; // Este descuento está en %
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

/* console.log({
    precioOriginal,
    descuento,porcentajePrecioConDescuento,
    precioConDescuento,
})
 */