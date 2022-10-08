import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/model/Cart';
import { productList } from 'src/app/model/Products';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';
import { Product } from '../../model/Product';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute
    ,private cart:CartService) { }
  products: Product[] = []

  filterText = ""

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.setCurrentCategory(params["id"])
      }
      else{
        this.getProduct()
      }
    }) 
  }

  getProduct(){
    return this.productService.getProduct().subscribe((response)=>{
      this.products = response.data;
    });
  }

  addToCard(product:Product){
    return this.cart.addToCard(product);
  }
  setCurrentCategory(id:number){
    return this.productService.setCurrentCategory(id).subscribe(response=>{
      this.products = response.data
    });
  }
}
