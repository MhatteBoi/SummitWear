import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCatalogRoutingModule } from './product-catalog-routing.module';
import { ProductCatalogComponent } from './pages/catalog.component';


@NgModule({
  declarations: [
    ProductCatalogComponent
  ],
  imports: [
    CommonModule,
    ProductCatalogRoutingModule
  ]
})
export class ProductCatalogModule { }
