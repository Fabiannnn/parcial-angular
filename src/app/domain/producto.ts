export class Producto {

    titulo: string
    descripcion: string
    precioUnitario: number
    urlImagen: string

    static fromJSON(jsonProducto): Producto {
        var prod = new Producto() 
        return Object.assign(prod, jsonProducto)
    }

}