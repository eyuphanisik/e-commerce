import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../model/Cart';
import { carts } from '../model/Carts';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCartList(){
    return carts;
  }

  addToCard(product:Product){
    let item = carts.find(p=> p.product.id == product.id)
    if(!item){
      let quantity = 1;
      carts.push({
        product, quantity
      })
    }
    else{
      item.quantity += 1;
    }
  }
  removeFromCart(cart:Cart){
    let item: Cart = carts.find(c=>{
      c.product == cart.product
    })!

    if(cart.quantity == 1){
      carts.splice(carts.indexOf(item),1)
    }
    else{
      carts.filter(c=>{
        if(c.product == cart.product) c.quantity -= 1;
      })
    }
  }
}
