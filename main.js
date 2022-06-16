// const sumaProductos = function (a, b) {
//     return a + b;
// }

const multiplicacionCantidad = function (a, b) {
    return a * b;
}

const divisionCuotas = function (a, b) {
    return a / b;
}

const restarDescuento = function (a, b) {
    return a - b;
}
let repetirBucle = false;
let precioProductos;
let cantidadProductos;
let cuotas;

do {
    precioProductosPrompt = prompt(`Elija el producto deseado
    *Harina
    *Leche
    *Huevos`).toLowerCase();
    switch (precioProductosPrompt) {
        case "harina":
            alert("Eligió harina");
            precioProductos = 200;
            repetirBucle = false;
            break;
        case "leche":
            alert("Eligió leche");
            precioProductos = 150;
            repetirBucle = false;
            break;
        case "huevos":
            alert("Eligió huevos");
            precioProductos = 300;
            repetirBucle = false;
            break;
        case "esc":
            alert("Ha salido");
            repetirBucle = false;
            break;
        default:
            alert("error, ingrese un valor valido");
            repetirBucle = true;
            break;
    }
} while (repetirBucle);

do {
    cantidadProductos = prompt(`Elija la cantidad de productos
    *1 *2 *3 *4`) 
    switch (cantidadProductos) {
        case "1":
            alert(`eligió ${cantidadProductos} de su producto`)
            cantidadProductos = 1;
            repetirBucle = false;
            break;
        case "2":
            alert(`eligió ${cantidadProductos} de su producto`)
            cantidadProductos = 2;
            repetirBucle = false;
            break;
        case "3":
            alert(`eligió ${cantidadProductos} de su producto`)
            cantidadProductos = 3;
            repetirBucle = false;
            break;
        case "4":
            alert(`eligió ${cantidadProductos} de su producto`)
            cantidadProductos = 4;
            repetirBucle = false;
            break;

        case "esc":
            alert("ha salido");
            repetirBucle = true;
            break;

        default:
            alert("error, ingrese un valor valido");
            repetirBucle = true;
            break;
    }

} while (repetirBucle);

do {
    cuotas = prompt(`Especifique el número de cuotas
    *1 *3 *6 *12`)
    switch (cuotas) {
        case "1":
            cuotas = 1;
            alert(`Elegiste pagar en ${cuotas} cuotas`);
            break;
        case "3":
            cuotas = 3;
            alert(`Elegiste pagar en ${cuotas} cuotas`);
            break;
        case "6":
            cuotas = 6;
            alert(`Elegiste pagar en ${cuotas} cuotas`);
            break;
        case "12":
            cuotas = 12;
            alert(`Elegiste pagar en ${cuotas} cuotas`);
            break;

        case "esc":
            alert("ha salido");
            repetirBucle = true;
            break;

        default:
            alert("error, ingrese un valor valido");
            repetirBucle = true;
            break;
    }
} while (repetirBucle);

let descuento = confirm("¿Desea un descuento del 15%?")
let precioProductoYcantidad = multiplicacionCantidad (precioProductos, cantidadProductos);

if (descuento = true) {
    descuento = precioProductoYcantidad * 15 / 100;
} else {
    descuento = 0;
}


function precioFinal () {
    let precioFinal = restarDescuento (multiplicacionCantidad(precioProductos, cantidadProductos), descuento) 
    alert(`Su precio final es de ${precioFinal}$.`)};

function precioMensual() {
    let precioMensual = divisionCuotas (restarDescuento (multiplicacionCantidad(precioProductos, cantidadProductos), descuento), cuotas);
    alert(`Su precio mensual es ${precioMensual}$`);
};

precioFinal();
precioMensual();
//cuantas cuotas, tiene codigo de descuento, invocar funcion




