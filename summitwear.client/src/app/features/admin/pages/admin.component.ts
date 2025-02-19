import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  adminLinks = [
    { path: 'dashboard', label: 'Dashboard' },
    { path: 'products', label: 'Manage Products' },
    { path: 'orders', label: 'Orders' },
    { path: 'users', label: 'Users' },
  ];
}
