import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Working name getting from api 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7037/api/auth'; // Change to match your API
  private tokenKey = 'token';
  private readonly USERNAME_KEY = 'fullName';

  private authStatus = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));

  authStatus$ = this.authStatus.asObservable(); // Expose as observable


  constructor(private http: HttpClient, private router: Router) { }

  register(registerData: { fullName: string, email: string, password: string }) {
    return this.http.post('https://localhost:7037/api/auth/register', registerData);
  }

  login(email: string, password: string) {
    return this.http.post<{ token: string, fullName: string }>(`${this.apiUrl}/login`, { email, password }).subscribe({
      next: (response) => {

        localStorage.setItem(this.tokenKey, response.token);
        localStorage.setItem(this.USERNAME_KEY, response.fullName);

        this.authStatus.next(true);
        console.log('Token saved:', response.token);  // Log token for debugging
        console.log('Username saved:', response.fullName); 
        this.router.navigate(['/']); // Redirect after login
      },
      error: (err) => console.error('Login failed', err)
    });
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem('fullName');
    this.authStatus.next(false);
    this.router.navigate(['/login']);
  }

  getUsername(): string | null {
    return localStorage.getItem(this.USERNAME_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getUserRole(): string | null {
    const token = this.getToken();
    if (!token) return null;

    const decoded: any = jwtDecode(token);
    console.log('Decoded Token:', decoded); // Debugging

    const roleClaim = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";

    if (decoded[roleClaim]) {
      // If it's an array, return the first role or check for 'Admin' specifically
      const roles = Array.isArray(decoded[roleClaim]) ? decoded[roleClaim] : [decoded[roleClaim]];
      return roles.includes('Admin') ? 'Admin' : roles[0]; // Prioritize 'Admin' if it exists
    }

    return null;
  }

  isAuthenticated(): Observable<boolean> {
    return this.http.get<{ message: string }>('/api/auth/validate').pipe(
      map(() => true),
      catchError(() => of(false)) // If validation fails, return false
    );
  }
}
