class Producto{
    constructor(id,nombre,precio,descripcion){
    this.id=id;
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion=descripcion;
}}
const producto1 = new Producto(1,"Lemon pie",200,"Relleno de crema de limon decorada con merengue italiano");
const producto2 = new Producto(2,"Pasta Frola",150,"Rellena de dulce de membrillo, decorada con coco rallado");
const producto3 = new Producto(3,"Tarta de frutilla",250,"Rellena de crema pastelera con trozos de frutilla y descorada con coco");
const producto4 = new Producto(4,"bizcochitos",300,"El precio corresponde a 1/4kg");
const producto5 = new Producto(5,"pepas",350,"el precio corresponde a 1/4kg");
const producto6 = new Producto(6,"scons",370,"el precio corresponde a 1/4kg");
const producto7 = new Producto(7,"alfajor chocolate blanco",420,"relleno de dulce de leche bañado en chocolate blanco");
const producto8 = new Producto(8,"alfajor de merengue",450,"relleno de dulce de leche, bañado en merengue");

const productos = [producto1, producto2, producto3, producto4,producto5,producto6,producto7,producto8];

localStorage.setItem("productos", JSON.stringify(productos));

const listaProductos = document.getElementById("listaProductos");
productos.forEach((producto) => {
const sectionProducto = document.createElement('section');
sectionProducto.classList.add('card', 'col-xl-3', 'col-md-10', 'col-sm-12');
sectionProducto.innerHTML = `
<section>
<img src="../imagenes/pasta frola.jpg"class="img-fluid rounded-start" alt="...">
</div>
<div class="col-md-8">
<div class="card-body text-center">
    <h5 class="card-title"> ${producto.nombre} </h5>
    <p class="card-text"> ${producto.descripcion} </p>
    <p class="card-text"><medium class="text-muted"> ${producto.precio}</medium></p>
    <button id="boton" type="button" class="btn btn-success">Añadir</button>
                <section />`
                listaProductos.append(sectionProducto)});

                let boton = document.getElementById("boton");
                const respuesta = () => {
                    console.log("agregado al carrito");
                };
boton.addEventListener("click",respuesta);



