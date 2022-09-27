let nombre= prompt("Ingresa tu nombre de usuario");
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
console.log (nuevoPrecio) 