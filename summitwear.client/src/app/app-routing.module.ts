import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'admin', loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule) },
  { path: 'product', loadChildren: () => import('./features/product/product.module').then(m => m.ProductModule) },
  { path: 'privacy', loadChildren: () => import('./features/privacy/privacy.module').then(m => m.PrivacyModule) },
  { path: 'checkout', loadChildren: () => import('./features/checkout/checkout.module').then(m => m.CheckoutModule) },
  { path: 'cart', loadChildren: () => import('./features/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule) },
  { path: 'catalog', loadChildren: () => import('./features/product-catalog/product-catalog.module').then(m => m.ProductCatalogModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
