import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/Cart';
import { CartService } from 'src/app/service/cart.service';
import { carts } from '../../model/Carts';
import { Product } from '../../model/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Cart[] = []
  constructor(private cartService:CartService) { }
  
  ngOnInit(): void {
    this.getCarts()
    
  }

  addToCart(product:Product){
    return this.cartService.addToCard(product);
  }

  getCarts(){
    this.cartItems =  this.cartService.getCartList();
  }
  removeFromCart(cart:Cart){
    return this.cartService.removeFromCart(cart);
  }
}
