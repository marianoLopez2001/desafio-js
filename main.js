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
