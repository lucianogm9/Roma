/*let nombre= prompt("Ingresa tu nombre de usuario");
if(nombre == "Luciano"){
    alert("Bienvenido" +" "+ nombre)
}
else if(nombre != "Luciano"){
    alert("Usuario no encontrado")
}

const multi  = (a,b) => a * b
const resta = (a,b) => a - b
const descuento= 200
let precioProducto = 500
let cantidad= prompt("ingresar cantidad")
let nuevoPrecio =(resta(multi(precioProducto, cantidad), descuento))
console.log (nuevoPrecio) */

const productos = [
    {  nombre: "taza", precio: 1200 },
    {  nombre: "botella", precio: 900 },
    {  nombre: "termo", precio: 3500 },];

    let carrito = []

    let seleccionarProd = prompt("agregar al carrito? si/no")
    while(seleccionarProd !="si" && seleccionarProd != "no"){
        alert("ingresar si o no")
    seleccionarProd= prompt("desea agregar productos a su carrito?si/no")
    }
    if (seleccionarProd=="si"){
        alert("Nuestros productos")
        let todosLosProductos = productos.map(productos => productos.nombre + " " + productos.precio + " $")
        alert(todosLosProductos.join(" - "))
    } else if (seleccionarProd=="no") {
        alert("nos vemos pronto!")
    }
    while(seleccionarProd != "no"){
        let producto = prompt("agrega un producto")
        let precio = 0
        if(producto=="taza" || producto=="botella" || producto=="termo"){
            switch(producto){
                case "taza":
                precio= 1200;
                break;
                case "termo":
                precio= 3500;
                break;
                case "botella":
                precio= 900;
                break;
                default:
                    break;
            }
            let unidades = parseInt(prompt("ingresar cantidad"))
            carrito.push({producto,unidades,precio})
        }
        seleccionarProd = prompt("desea seguir agregando productos?")
        while(seleccionarProd == "no"){
            alert("gracias por tu compra")
            carrito.forEach((carritoFinal)=>{
                console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},total a pagar ${carritoFinal.unidades * carritoFinal.precio}`)
            })
            break;
        }
    }

    const total= carrito.reduce((acc,el)=> acc + el.precio * el.unidades, 0)
    console.log(`el total de su compra es: ${total}`)

    
