import { ShoppingCart } from "../domain/shoppingCart";

export class Usuario{

    username: string
    shoppingCart: ShoppingCart;
    saldo: number
    
    constructor(username: string){
      this.username = username
    }

    static fromJSON(usuarioJson): Usuario {
      var usuario = new Usuario(usuarioJson.username)
      usuario.saldo = usuarioJson.saldo
      usuario.shoppingCart = ShoppingCart.fromJSON(usuarioJson.shoppingCart)
      return usuario
    }

    getSaldo(): number {
      return this.saldo;
    }

    descontarSaldo(descontarSaldo: number): void {
      this.saldo = this.saldo - descontarSaldo;
    }

    getShoppingCart(): ShoppingCart {
      return this.shoppingCart;
    }

}