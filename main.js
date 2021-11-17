const gaseosa = ['cola', 'sprite', 'fanta', 'gatorade'];
gaseosa.push('pritty');
console.log(gaseosa);

class Gaseosa {
    constructor(gaseosa) {
        this.marca = gaseosa.marca;
        this.sabor = gaseosa.sabor;
        this.tamanio = gaseosa.tamanio;
        this.precio = gaseosa.precio;
        this.estado = gaseosa.estado;
        this.stock = gaseosa.stock;

    }

    abrirCerrar() {
        if (this.estado == "cerrado") {
            this.estado = "abierta";

        } else {

            this.estado = "cerrada";
        }
    }

    agregarIVA() {

        this.precio = (this.precio * 0.21) + this.precio;
    }

    venderGaseosa(cantidad) {


        if (cantidad <= this.stock) {


            this.stock = this.stock - cantidad

        } else {

            console.log("No está disponible la cantidad que quiere comprar")
        }
    }

    enOferta(descuento) {

        this.precio = this.precio - (this.precio * descuento)
    }

}


const fanta = new Gaseosa({
    marca: "fanta",
    sabor: "naranja",
    tamanio: "2l",
    precio: 350,
    estado: "cerrada",
    stock: 20
});

const compraUsuario = parseInt(prompt("Cuántas fantas desea?"));

fanta.agregarIVA();

fanta.venderGaseosa(compraUsuario);

fanta.enOferta(0.5);

console.log(fanta);