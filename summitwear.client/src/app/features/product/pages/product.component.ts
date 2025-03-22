import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../services/cartService/cart-service.service'
import { Product, ProductService } from '../../../services/productService/product-service.service'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
    standalone: false
})

export class ProductComponent implements OnInit {
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService) { }

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');

    if (productId) {
      this.productService.getProduct(productId).subscribe((product) => {
        this.product = product;
        console.log("Product loaded:", this.product);
      });
    }
  }

  addToCart() {
    
    this.cartService.addToCart(this.product);
  }
}
