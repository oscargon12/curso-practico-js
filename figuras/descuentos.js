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


/* const coupons = [
    {
        name: cupon001,
        discount: 15,
    },
    {
        name: cupon002,
        discount: 30,
    },
    {
        name: cupon003,
        discount: 25,
    },
]


const isCuoponValueValid = function (cuopon) {
    return coupon.name === cuoponValue;
} // Se crea una variable [isUserCouponValueValid] con una función que valide si su parámetro 
  // [coupon] es igual a nuestra variable [userCouponValue]

  //  Y esta variable se envía como parámetro a la función array.find()
  const userCuopon = cuopons.find(isCuoponValueValid)

   */


const calcularDescuento = () =>{
    const InputPrice = document.querySelector('#InputPrice'); // Capturo el elemento del DOM input
    const userPrice = parseInt(InputPrice.value); // Asigno ese valor capturado a una variable
    
    const InputDiscount = document.querySelector('#InputDiscount');
    const userDiscount = parseInt(InputDiscount.value);

    /* const showDiscount = document.querySelector('#priceResult'); */

    const domDiscount = calcularPrecioConDescuento(userPrice, userDiscount); // Utilizo los valores capturados del DOM como argumentos de la variable
    // Asigno la función de calcular a una variable

    priceResult.innerText = `El precio final es $ ${domDiscount}` 
    //Inserto el precio final en el html
}

