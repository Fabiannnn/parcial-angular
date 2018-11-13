import { Producto } from "../domain/producto";

export class ShoppingCart {

    productos: Array<Producto> = []

    constructor(productos: Array<Producto>) {
        this.productos = productos
    }

    agregarProducto(producto: Producto) {
        this.productos.push(producto)
    }

    quitarProducto(producto) {
        const index = this.productos.indexOf(producto, 0);
        if (index > -1) {
          this.productos.splice(index, 1);
        }
      }

    getTotal() {
        if (this.productos.length === 0) {
            return 0
        }
        return this.productos.map(it => it.precioUnitario).reduce((a, b) => a + b)
    }

    static fromJSON(prodructosJson): ShoppingCart {
        return new ShoppingCart(prodructosJson.productos)
    }

    setProductos(nuevosProductos: Producto[]): void {
        this.productos = nuevosProductos;
    }

}