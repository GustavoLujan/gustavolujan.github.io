alert('¡Bienvenido a PilotPc! Donde encontraras el Hardware mas avanzado para optimizar tu pc ')

alert("Ingrese la opcion del producto que desea llevar, para salir ingrese 0")
let seleccionarProductos = Number(prompt("1-Motherboard $3000 2-MemoriaRam $1500 3-Gabinete $5000 4-PlacaDeVideo $6000 "))
let seleccionarCantidad;
let total = 0;


const cantidad = (cant, precio) => {
    return cant * precio
}


while (seleccionarProductos != 0) {
    switch (seleccionarProductos) {
        case 1:
            seleccionarCantidad = Number(prompt("el producto seleccionado es Motherboard, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 3000)
            break;
        case 2:
            seleccionarCantidad = Number(prompt("el producto seleccionado es MemoriaRam, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 1500)
            break;
        case 3:
            seleccionarCantidad = Number(prompt("el producto seleccionado es Gabinete, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 5000)
            break;
        case 4:
            seleccionarCantidad = Number(prompt("el producto seleccionado es PlacaDeVideo, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 6000)
            break;

        default:
            break;
    }
    seleccionarProductos = Number(prompt("1-Motherboard $3000 2-MemoriaRam $1500 3-Gabinete $5000 4-PlacaDeVideo $6000 "))
}

alert("el total de la compra es de: " + total)


const envio = () => {
    if (total >= 10000) {
        alert("El envio es gratuito")
    } else {
        total += 1000
        alert("el costo de envio es de 1000, el total es: " + total)
    }
}

envio()

const metodoDePago = () => {
    let metodo = prompt("ingrese el metodo de pago, tarjeta o efectivo")
    if (metodo == "tarjeta") {
        total += 1000
        console.log(total);
        alert("tenes un recargo de 1000, el total es:" + total)
    } else if (metodo == "efectivo") {
        total -= 1000
        alert("tenes un descuento de 1000, el total es:" + total)
    }


}

metodoDePago()