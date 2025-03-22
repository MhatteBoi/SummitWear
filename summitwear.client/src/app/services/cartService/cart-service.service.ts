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
    const existingItem = cart.find((item: any) => item.productId === product.productId);
    if (existingItem) {
      existingItem.quantity += 1; // Increase quantity
    } else {
      cart.push({ ...product, quantity: 1 }); // Add new product
    }
    console.log("the cart: ", cart,"existingItem: " , existingItem, "product: " , product);

    localStorage.setItem('cart', JSON.stringify(cart));
    const totalItems = cart.reduce((sum: number, item: { quantity: number }) => sum + item.quantity, 0);
    this.cartItems.next(totalItems);
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
