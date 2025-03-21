import { Component } from '@angular/core';

@Component({
    selector: 'app-order-manage',
    templateUrl: './order-manage.component.html',
    styleUrl: './order-manage.component.css',
    standalone: false
})
export class OrderManageComponent {
  searchQuery: string = '';

  // Fake order data
  orders = [
    { id: 'ORD001', customerName: 'John Doe', status: 'Shipped', totalPrice: 1999, orderDate: new Date('2025-02-01') },
    { id: 'ORD002', customerName: 'Jane Smith', status: 'Pending', totalPrice: 2999, orderDate: new Date('2025-02-02') },
    { id: 'ORD003', customerName: 'Mike Johnson', status: 'Delivered', totalPrice: 1499, orderDate: new Date('2025-02-03') },
    { id: 'ORD004', customerName: 'Sara Lee', status: 'Cancelled', totalPrice: 499, orderDate: new Date('2025-02-04') },
    { id: 'ORD005', customerName: 'Emily Davis', status: 'Pending', totalPrice: 899, orderDate: new Date('2025-02-05') },
    { id: 'ORD006', customerName: 'David Williams', status: 'Shipped', totalPrice: 1799, orderDate: new Date('2025-02-06') },
    { id: 'ORD007', customerName: 'Alice Brown', status: 'Delivered', totalPrice: 1299, orderDate: new Date('2025-02-07') }
  ];

  // Filter orders based on the search query
  filteredOrders() {
    return this.orders.filter(order =>
      order.id.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      order.customerName.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Get class for status color
  getStatusClass(status: string): string {
    switch (status) {
      case 'Shipped': return 'text-blue-500';
      case 'Pending': return 'text-yellow-500';
      case 'Delivered': return 'text-green-500';
      case 'Cancelled': return 'text-red-500';
      default: return '';
    }
  }
}
