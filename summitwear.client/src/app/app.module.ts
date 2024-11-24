import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { Error404Component } from './components/error404/error404.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    UserComponent,
    AdminComponent,
    ShoppingCartComponent,
    NavbarComponent,
    FooterComponent,
    ReviewsComponent,
    PromotionsComponent,
    Error404Component,
    OrderHistoryComponent,
    CheckOutComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
