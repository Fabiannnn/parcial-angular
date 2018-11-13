import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Producto } from 'src/app/domain/producto';
import { Usuario } from 'src/app/domain/usuario';
import { ShoppingCart } from 'src/app/domain/shoppingCart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  providers: [ShoppingCartService]
})

export class ShoppingCartComponent implements OnInit {

  productos: Producto[] = [];
  usuario: Usuario;
  saldoInsuficiente: boolean = false;

  constructor(private shoppingCartService: ShoppingCartService) {

  }

  ngOnInit(): void {
    this.getUsuario();
    this.getProductos();
  }

  getUsuario(): void {
    this.usuario = this.shoppingCartService.getUsuarioLogueado();
  }
  getProductos(): void {
    this.productos = this.shoppingCartService.getProductos();
  }

  getTotalCarrito(): number {
    return this.usuario.shoppingCart.getTotal();
  }

  agregarProducto(elProducto: Producto): void {
    this.usuario.shoppingCart.agregarProducto(elProducto);
  }

  quitarProducto(elProducto: Producto): void {
    this.usuario.shoppingCart.quitarProducto(elProducto);
  }

  validarCompra(): boolean {
    this.saldoInsuficiente = this.getTotalCarrito() > this.usuario.getSaldo();
    return this.saldoInsuficiente;
  }

  finalizarCompra(): void {
    if (!this.validarCompra()) {
      this.descontarSaldo();
      this.vaciarCarrito();
    }
  }

  descontarSaldo(): void {
    this.usuario.descontarSaldo(this.getTotalCarrito());
  }

  vaciarCarrito(): void {
    this.usuario.getShoppingCart().setProductos([]);
  }
}
