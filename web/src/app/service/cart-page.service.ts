import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../model/Cart';
import { carts } from '../model/Carts';

@Injectable({
  providedIn: 'root'
})
export class CartPageService {

  constructor(private httpClient: HttpClient) { }

  deleteFromProduct(cartItems: Cart[]) {
    cartItems.forEach((element, index) => {
      if (element.product.unitsInStock > element.quantity) {
        carts.splice(index, 1)
        this.setQuantity(element)
        console.log(index + " " + element.product.productName)
      } else if (element.product.unitsInStock == element.quantity) {

        carts.splice(index, 1)
      }
      else {

      }
    });
  }
  setQuantity(cart:Cart){
    return this.httpClient.delete("http://localhost:8085/api/products/setStock/" + cart.product.id + "/" + cart.quantity)
  }
}
