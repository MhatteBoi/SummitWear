import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CartService } from '../../../services/cartService/cart-service.service';


interface CartItem {
  productId: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrl: './checkout.component.css',
    standalone: false
})
  //oninit
export class CheckoutComponent implements OnInit {

  checkoutForm = {
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  };

  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  shippingInfo = {
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
  };


  constructor(
    private cartService: CartService,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getCart();
    this.totalPrice = this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getTotalPricePS(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity) + 5, 0);
  }

  completePurchase() {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No authentication token found!');
      return;
    }
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };

    const orderData = {
      orderDate: new Date().toISOString(),
       // Ensure this function returns a valid ID
      orderItems: this.cartItems.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
        unitPrice: item.price,
      })),
    };

    this.http.post('https://localhost:7037/api/Order/CreateOrder', orderData, headers).subscribe(
      (response) => {
        console.log('Order placed successfully:', response);
        this.cartService.clearCart();
        this.router.navigate(['/order-confirmation']); // Redirect to confirmation page, maybe make a pop-up
      },
      (error) => {
        console.error('Order failed:', error);
      }
    );
  }
}
