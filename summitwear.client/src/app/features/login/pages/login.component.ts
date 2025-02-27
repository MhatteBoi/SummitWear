import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) { }

  login() {
    const loginData = { email: this.email, password: this.password };

    this.http.post('https://your-api-url.com/api/auth/login', loginData)
      .subscribe({
        next: (response: any) => {
          localStorage.setItem('token', response.token); // Store JWT
          this.router.navigate(['/']); // Redirect after login
        },
        error: err => console.error('Login failed', err)
      });
  }
}
