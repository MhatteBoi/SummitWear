import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    const roles = this.authService.getUserRole();
    if (roles && roles.includes('Admin')) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
