import { Component } from '@angular/core';

@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrl: './crm.component.css'
})
export class CrmComponent {
  searchQuery: string = '';

  // Fake user data
  users = [
    { id: 'USR001', name: 'John Doe', email: 'john.doe@example.com', status: 'Active', registrationDate: new Date('2025-01-01') },
    { id: 'USR002', name: 'Jane Smith', email: 'jane.smith@example.com', status: 'Inactive', registrationDate: new Date('2025-01-05') },
    { id: 'USR003', name: 'Mike Johnson', email: 'mike.johnson@example.com', status: 'Banned', registrationDate: new Date('2025-01-10') },
    { id: 'USR004', name: 'Sara Lee', email: 'sara.lee@example.com', status: 'Active', registrationDate: new Date('2025-01-15') },
    { id: 'USR005', name: 'Emily Davis', email: 'emily.davis@example.com', status: 'Inactive', registrationDate: new Date('2025-01-20') }
  ];

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

