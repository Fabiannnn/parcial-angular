import { Injectable } from '@angular/core';
import { Usuario } from '../domain/usuario';
import { Producto } from '../domain/producto';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() { }

  getUsuarioLogueado() {
      var jsonUsuario = {
        "username": "jackNapier",
        "shoppingCart": {productos: []},
        "saldo": 40000.00
      }

      return Usuario.fromJSON(jsonUsuario)
  }

  getProductos() {
      var jsonProductos = [
        {"titulo": "Samsung Galaxy s9", "descripcion": "Galaxy s9", "precioUnitario": 33999, "urlImagen": "assets/images/galaxy-s9.png"},
        {"titulo": "Smart Tv Led 49 Full Hd Lg Lj5500", "descripcion": "Led TV 49 pulgadas - 4k", "precioUnitario": 19999, "urlImagen": "assets/images/lgtv.png"},
        {"titulo": "Consola Nintendo Switch 32gb", "descripcion": "Nintendo switch con un juego a elección", "precioUnitario": 16700, "urlImagen": "assets/images/switch.png"},
        {"titulo": "Google Chromecast 2da Generación", "descripcion": "Chromecast. Youtube y Netflix en tu TV", "precioUnitario": 1899, "urlImagen": "assets/images/chromecast.png"},
        {"titulo": "Cargador Portatil Power Bank Tp Link Pb 15600", "descripcion": "Cargador portatil 15600mah", "precioUnitario": 1395, "urlImagen": "assets/images/tplink.png"}
      ]

      return jsonProductos.map ( prod => {return Producto.fromJSON(prod)})
  }

}
