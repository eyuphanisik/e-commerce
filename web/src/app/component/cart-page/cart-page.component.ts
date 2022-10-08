import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/Cart';
import { carts } from 'src/app/model/Carts';
import { CartPageService } from 'src/app/service/cart-page.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cartItems:Cart[] = []
  constructor(private cartPageService:CartPageService) { }

  ngOnInit(): void {
    this.getCartItems()
  }
  getCartItems(){
    this.cartItems = carts;
  }
  deleteFromProduct(){
    return this.cartPageService.deleteFromProduct(this.cartItems)
  }
}
