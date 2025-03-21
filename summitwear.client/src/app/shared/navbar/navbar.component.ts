import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { CartService } from '../../services/cartService/cart-service.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'], // Fixed typo: styleUrl -> styleUrls
  standalone: false
})
export class NavbarComponent implements OnInit {

  /*cartItemCount$ = this.cartService.cartItemCount$;*/
  isAdmin = false;
  isLoggedIn = false;
  username: string | null = null;
  isMenuOpen: boolean = false; // Tracks the state of the menu
  isScrolled: boolean = false; // Tracks whether the page is scrolled

  constructor(private authService: AuthService, private cartService: CartService) { }

  ngOnInit(): void {
    this.authService.authStatus$.subscribe(status => {
      this.isLoggedIn = status;
      this.username = this.authService.getUsername(); // Get updated username
      this.isAdmin = this.authService.getUserRole() === 'Admin';
    });
    //this.cartService.cartItemCount$.subscribe(count => {
    //  this.cartItemCount = count;
    //});
  }

  logout(): void {
    this.authService.logout();
    window.location.reload(); // Reload the page to update the UI
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen; // Toggle the menu state
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollY > 350; // Add a threshold for when the navbar should shrink
  }
}
