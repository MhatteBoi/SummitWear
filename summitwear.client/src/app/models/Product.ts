

export interface Product {
  productId: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: string; // Foreign key for Category
}
