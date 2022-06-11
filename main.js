let preguntarDeVuelta = false;
do {
    let pregunta = prompt("¿De què color es el semaforo?").toLowerCase();
    switch (pregunta) {
        case "verde":
            alert("Puede pasar");
            break;
        case "amarillo":
            alert("Casi puede pasar");
            preguntarDeVuelta = true;
            break;
            case "rojo":
                alert("no puede pasar");
                break;
        default:
            alert("Ha ingresado un valor no valido");
            preguntarDeVuelta = true;
            break;
    }
} while (preguntarDeVuelta);

// let costoTotal = 0;
// let precio = 0;
// let seguirComprando = false;
// let cantidad = 0;
// let productos = "";

// do {
//     productos = prompt(`leche, harina y huevos`);
//     cantidad = prompt("elija cantidad");

//     switch (productos) {
//         case "leche":
//             alert("eligio leche")
//             precio = 150;
//             break;
//         case "harina":
//             alert("eligio harina")
//             precio = 100;
//             break;
//         case "huevos":
//             alert("eligio huevos")
//             precio = 200;
//             break;
//         default:
//             alert("error")
//             cantidad = 0;
//             precio = 0;
//             break;
//     }
//     seguirComprando = confirm("desea seguir comprando?")
//     costoTotal += precio * cantidad;
// } while (seguirComprando);
// alert(`el valor total es ${costoTotal}`);