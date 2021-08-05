const precioOriginal = 100;
const descuento = 15;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/ 100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById('inputPrice');
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById('inputDiscount');
    const discountValue = inputDiscount.value;

    const inputCoupon = document.getElementById('inputDiscountCoupons');
    const couponValue = inputCoupon.value;

    let coupon;

    if (couponValue == 'platzi') {
        coupon = coupons[0];
    } else if (couponValue == 'expert') {
        coupon = coupons[1];
    } else if (couponValue == 'basic') {
        coupon = coupons[2];
    } else if (couponValue == 'expert+') {
        coupon = coupons[3];
    } else {
        coupon = 0;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const precioConDescuentoCoupon = calcularPrecioConDescuento(precioConDescuento, coupon);

    const resultBox = document.getElementById('resultBox');
    resultBox.innerText = 'El precio con descuento es: $ ' + precioConDescuentoCoupon + '.';
}

/* ============= Cupones de Descuento ============= */

const coupons =[ 8, 10, 5, 12];