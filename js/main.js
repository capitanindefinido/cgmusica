class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre; 
        this.precio = precio; 
    }
}

const arosCG = new Producto(0, "ArosCG", 4000); 
const arosEstrella = new Producto(1, "ArosEstrella", 4000);
const bagNiñx = new Producto(2, "BagNiñx", 6000);
const bagQSALT = new Producto(3, "BagQSALT", 6000);
const idealesPrimaveras = new Producto(4, "IdealesPrimaveras", 8000);

const productosArray = [arosCG, arosEstrella, bagNiñx, bagQSALT, idealesPrimaveras];

let precio = 0;
let cantidad = 0;
let carrito = [];

function agregarAlCarrito(productoId){
    cantidad = prompt("¿Cuantos artículos desea comprar?");
    if ( cantidad < 0 || cantidad > 10){
        alert("No hay stock para esa cantidad...")
    }else {
        let total = cantidad * productosArray[productoId].precio;
        carrito = [total];
    }
    console.log("Agregado al carrito con éxito: " + carrito);
}

function tienda(){
    alert("Bienvenido a la tienda CG");
    alert("En la consola podrás revisar los precios...");
    productosArray.forEach(producto => {
        console.log(producto);
    });
    let productoId = prompt("Elija el id del producto que desea comprar: ")
    if ( productoId < 0){
        alert("Elija un ID de producto válido");
    } else if ( productoId > productosArray.length ){
        alert("Elija un ID de producto válido");
    }else {
        agregarAlCarrito(productoId);
    }
    
}

tienda();

/* const contenedorProductos = document.querySelector("#contenedorProductos");

function cargarProductos() {
    productosArray.forEach(productosArray => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img src="${productosArray.imagen}" alt="${productosArray.titulo}" class="productos">
            <p class="titulo-producto">${productosArray.titulo}</p>
            <div class="container3">
                <p><em>${productosArray.precio}</em></p>
            </div>
            <a href="">
                <button class="tienda-btn" id="${producto.id}"><b>Comprar </b><i class="fa fa-shopping-bag" aria-hidden="false"></i></button>
            </a>
        `;
        contenedorProductos.append(div);
    })
}

cargarProductos(); */