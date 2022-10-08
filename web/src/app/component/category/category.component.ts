import { Component, OnInit, ɵsetCurrentInjector } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from '../../model/Category';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories : Category[] = []
  currentCategory : Category = {categoryId:0, categoryName:""}
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    return this.categoryService.getAll().subscribe(response=>{
      this.categories = response.data
    })
  }
  setCategory(category:Category){
    this.currentCategory = category;
  }

  getCurrrentCategory(id:number){
    if(this.currentCategory.categoryId == id)
      return "list-group-item active";
    else
      return "list-group-item";
  }
  getAllCategory(){
    if(this.currentCategory.categoryId == 0)
      return "list-group-item active";
    else 
      return "list-group-item";
  }
  setAllCategory(){
    this.currentCategory = {categoryId:0, categoryName:""};
  }
}
