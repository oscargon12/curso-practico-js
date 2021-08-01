function calcularPrecioConDescuento(precio, descuento){
    const porcentajeDeDescuento = 100 - descuento; // Este descuento está en %
    const precioConDescuento = (precio * porcentajeDeDescuento) / 100;

    console.log({
        precio,
        descuento,
        porcentajeDeDescuento,
        precioConDescuento,
    })

    return precioConDescuento;
    
}

calcularPrecioConDescuento(1500, 50);

/* Cupones */
const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice"); //Capturo el precio
  const priceValue = inputPrice.value;
  
  const inputCoupon = document.getElementById("InputCoupon"); // Capturo el cupón de descuento
  const couponValue = inputCoupon.value;

  const priceResult = document.getElementById("priceResult"); // Donde imprimo el descuento

  if (!coupons.includes(couponValue)) { // If con los cupones de descuento
   priceResult.innerText = `Tu cupón no es válido`
} else if (couponValue === "JuanDC_es_Batman") {
   descuento = 15;
} else if (couponValue === "pero_no_le_digas_a_nadie") {
   descuento = 30;
} else if (couponValue === "es_un_secreto") {
   descuento = 25;
}

  const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

  console.log(`El precio con escuento es $ ${precioConDescuento}`);

  
  priceResult.innerText = `Tu descuento es del ${descuento}%, El precio final es ${precioConDescuento}`

}