import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { ProductComponent } from './component/product/product.component';

const routes: Routes = [
  {path: "", pathMatch:"full", component:ProductComponent},
  {path:"products/category/:id", component:ProductComponent},
  {path:"cart/show", component:CartPageComponent},
  {path: "products/setStock/:id/:quantity", component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
