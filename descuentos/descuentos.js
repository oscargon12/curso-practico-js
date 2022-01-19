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
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice"); //Capturo el precio
  const priceValue = inputPrice.value;
  
  const inputCoupon = document.getElementById("InputCoupon"); // Capturo el cupón de descuento
  const couponValue = inputCoupon.value;

  const priceResult = document.getElementById("priceResult"); // Donde imprimo el descuento

  //Logica de cupones
  const isCouponValueValid = (pato) =>{ // El array (cualquiera, pero en este caso coupons) tiene un nombre igual a couponValue?
   return pato.name === couponValue;
  };

  const userCoupon = coupons.find(isCouponValueValid); // userCoupon = Si encuentra coincidencia de coupnValue en pato

  if(!userCoupon){ //Si no encuentra coincidencia ...
   alert("El cupón " + couponValue + " no es válido");
  } else {
     const descuento = userCoupon.discount;
     const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

     const priceResult = document.querySelector('#priceResult');
     priceResult.innerText = `El precio con descuento es $ ${precioConDescuento}`
  }

}