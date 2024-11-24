export interface OrderItem {
  orderItemId: string;
  orderId: string; // Foreign key for Order
  productId: string; // Foreign key for Product
  quantity: number;
  unitPrice: number;
}
