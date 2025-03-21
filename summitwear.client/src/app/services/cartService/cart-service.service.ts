import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<number>(0);
  cartItemCount$ = this.cartItems.asObservable();

  constructor() {
    this.loadCartFromLocalStorage();
  }

  private loadCartFromLocalStorage() {
    const cart = JSON.parse(localStorage.getItem('cart') ?? '[]');
    this.cartItems.next(cart.length);
  }

  addToCart(product: any) {
    let cart = JSON.parse(localStorage.getItem('cart') ?? '[]');

    // Check if product already exists
    const existingItem = cart.find((item: any) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1; // Increase quantity
    } else {
      cart.push({ ...product, quantity: 1 }); // Add new product
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    this.cartItems.next(cart.reduce((sum: any, item: { quantity: any; }) => sum + item.quantity, 0));
  }

  removeFromCart(productId: number) {
    let cart = JSON.parse(localStorage.getItem('cart') ?? '[]');
    cart = cart.filter((item: any) => item.productId !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    this.cartItems.next(cart.length);
  }
  clearCart() {
    localStorage.removeItem('cart');
    this.cartItems.next(0);
  }

  getCart() {
    return JSON.parse(localStorage.getItem('cart') ?? '[]');
  }
}
