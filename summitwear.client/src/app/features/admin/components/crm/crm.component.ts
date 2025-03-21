import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-crm',
    templateUrl: './crm.component.html',
    styleUrl: './crm.component.css',
    standalone: false
})
export class CrmComponent {
  searchQuery: string = '';
  users: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<any[]>('https://localhost:7037/api/users').subscribe({
      next: (data) => (this.users = data),
      error: (err) => console.error('Error fetching users', err)
    });
  }

  assignAdminRole(userId: string): void {
    this.http.post(`https://localhost:7037/api/users/${userId}/assign-admin`, { userId, role: 'Admin' })
      .subscribe({
        next: () => {
          alert('User has been assigned the Admin role!');
          this.fetchUsers(); // Refresh the user list
        },
        error: (err) => {
          console.error('Error assigning admin role:', err);
          alert('Failed to assign Admin role.');
        }
      });
  }

  // Filter users based on the search query
  filteredUsers() {
    return this.users.filter(user =>
      user.id.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Get class for status color
  getStatusClass(status: string): string {
    switch (status) {
      case 'Active': return 'text-green-500';
      case 'Inactive': return 'text-yellow-500';
      case 'Banned': return 'text-red-500';
      default: return '';
    }
  }
}

