let listaDeCompras = ["pan", "huevos", "jamon", "queso", "lechuga", "tomate"];
let catalogo = ["cebolla", "manteca", "leche", "morron"]
askAgain = true;

alert(`Esta es tu lista de compras actualmente: ${listaDeCompras}.`);

let pregunta = confirm("¿Te olvidaste de agregar algo?");

if (pregunta === true) {
    do {
        productoAgregado = prompt(`Elija el producto deseado: ${catalogo}`);
        if (catalogo.includes(productoAgregado)) {
            alert(`El producto ${productoAgregado} ha sido agregado correctamente.`);
            listaDeCompras.push(productoAgregado);
        } else {
            alert("No eligió un producto de nuestro catalogo")
        }
        let repregunta = confirm("desea mas productos?")
        if (repregunta === true) {
            askAgain=true
        }
        else {
            askAgain=false
        }
    } while (askAgain);

    alert(`Tu lista de compras final contiene: ${listaDeCompras}.`);

} else {
    alert(`Tu lista de compras final contiene: ${listaDeCompras}.`);
}