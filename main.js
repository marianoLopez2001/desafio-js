const Catalogo = [
    {        id: 1,
        nombre: "Remera",
        marca: "nike",
        precio: 250,
        img: "./images/remera.webp",
        stock: 1,

    },
    {
        id: 2,
        nombre: "Buzo",
        marca: "adidas",
        precio: 600,
        img: "./images/buzo.webp",
        stock: 3
    },
    {
        id: 3,
        nombre: "Campera",
        marca: "adidas",
        precio: 700,
        img: "./images/campera.webp",
        stock: 1
    },
    {
        id: 4,
        nombre: "Pantalon",
        marca: "nike",
        precio: 400,
        img: "./images/pantalones.webp",
        stock: 2
    },
    {
        id: 5,
        nombre: "Zapatilla",
        marca: "nike",
        precio: 800,
        img: "./images/zapatilla.webp",
        stock: 1
    }
]

    for (const producto of Catalogo) {

        let padre = document.createElement("div");
    
        padre.innerHTML = `<div class="contenedor">
                               <h2>Nombre: ${producto.nombre}</h2>
                               <p>Precio: ${producto.precio}</p>
                               <img src="${producto.img}" alt="">
                            </div>
                            `;
    
        document.body.appendChild(padre)
    }