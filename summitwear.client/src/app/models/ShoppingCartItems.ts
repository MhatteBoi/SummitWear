export interface ShoppingCartItem {
  cartItemId: string;
  cartId: string; // Foreign key for ShoppingCart
  productId: string; // Foreign key for Product
  quantity: number;
}
