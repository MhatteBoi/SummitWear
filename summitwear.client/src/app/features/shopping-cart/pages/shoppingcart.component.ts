import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cartService/cart-service.service'
interface CartItem {
  productId: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

@Component({
    selector: 'app-shoppingcart',
    templateUrl: './shoppingcart.component.html',
    styleUrl: './shoppingcart.component.css',
    standalone: false
})



export class ShoppingcartComponent implements OnInit{
  cartItems: any[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getCart();
  }

  clearCart() {
    this.cartService.clearCart();
    this.loadCart();
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
    this.loadCart();
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  increaseQuantity(item: CartItem): void {
    item.quantity += 1;
  }

  decreaseQuantity(item: CartItem): void {
    if (item.quantity > 1) {
      item.quantity -= 1;
    }
  }

  removeItem(item: CartItem): void {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.productId);
  }

  checkout(): void {
    alert('Proceeding to checkout...');
  }
}


