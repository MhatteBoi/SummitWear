import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { AuthService } from '../../../core/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    standalone: false
})
export class LoginComponent {
  email = '';
  password = '';
  confirmPassword = '';
  isRegisterMode = false;
  fullName = '';


  constructor(private http: HttpClient, private router: Router, private authService: AuthService,) { }
  toggleMode() {
    this.isRegisterMode = !this.isRegisterMode;
  }

  login() {
    if (!this.email || !this.password) {
      console.error('Email or password is missing');
      return;
    }

    this.authService.login(this.email, this.password);
    
  }

  logout() {
    this.authService.logout();
  }

  register() {
    if (this.password !== this.confirmPassword) {
      console.error('Passwords do not match!');
      return;
    }

    const registerData = {
      fullName: this.fullName,
      email: this.email,
      password: this.password
    };

    this.authService.register(registerData).subscribe({
      next: () => {
        console.log('Registration successful');
        this.isRegisterMode = false; // Switch back to login
      },
      error: err => console.error('Registration failed:', err)
    });
  }

}
