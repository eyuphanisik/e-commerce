import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './component/product/product.component';
import { CategoryComponent } from './component/category/category.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProductSearchPipe } from './component/product/product-search.pipe';
import { UserComponent } from './component/user/user.component';
import { CartComponent } from './component/cart/cart.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { InputsModule } from '@progress/kendo-angular-inputs';





@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NavbarComponent,
    ProductSearchPipe,
    UserComponent,
    CartComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    BrowserAnimationsModule,
    InputsModule
  ],
  providers: [ProductComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
