import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://your-api-url.com/api/auth'; // Change to match your API
  private tokenKey = 'token';

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { email, password }).subscribe({
      next: (response) => {
        localStorage.setItem(this.tokenKey, response.token);
        this.router.navigate(['/']); // Redirect after login
      },
      error: (err) => console.error('Login failed', err)
    });
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getUserRole(): string | null {
    const token = this.getToken();
    if (!token) return null;

    const decoded: any = jwtDecode(token);
    return decoded.role || null;
  }

  isAuthenticated(): Observable<boolean> {
    return this.http.get<{ message: string }>('/api/auth/validate').pipe(
      map(() => true),
      catchError(() => of(false)) // If validation fails, return false
    );
  }
}
