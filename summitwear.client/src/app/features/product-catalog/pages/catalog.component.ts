import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductService } from '../../../services/productService/product-service.service';

@Component({
    selector: 'app-product-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.css'],
    standalone: false
})
export class ProductCatalogComponent {
  products: Product[] = [];


  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      console.log('Loaded products:', this.products);
    });
  }

  viewProduct(productId: string) {
    this.router.navigate(['/product', productId]); // Navigate to product detail page
  }
}
