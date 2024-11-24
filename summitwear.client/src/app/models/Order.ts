
export interface Order {
  orderId: string;
  orderDate: string; // ISO string
  userId: string; // Foreign key for User
}
