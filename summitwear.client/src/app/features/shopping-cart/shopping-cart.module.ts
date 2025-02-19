import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingcartComponent } from './pages/shoppingcart.component';


@NgModule({
  declarations: [
    ShoppingcartComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule
  ]
})
export class ShoppingCartModule { }
