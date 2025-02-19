import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.component.html',
  styleUrls: ['./product-manage.component.css']
})
export class ProductManageComponent {
  products: Product[] = [
    { id: 1, name: 'Summit Jacket', price: 1499, stock: 10 },
    { id: 2, name: 'Trail Pants', price: 899, stock: 15 },
    { id: 3, name: 'Thermal Gloves', price: 399, stock: 30 }
  ];

  private visibleCategories: Set<string> = new Set();

  toggleCategory(categoryId: string): void {
    if (this.visibleCategories.has(categoryId)) {
      this.visibleCategories.delete(categoryId);
    } else {
      this.visibleCategories.add(categoryId);
    }
  }

  isCategoryVisible(categoryId: string): boolean {
    return this.visibleCategories.has(categoryId);
  }

  newProduct: Product = { id: 0, name: '', price: 0, stock: 0 };

  addProduct() {
    if (this.newProduct.name && this.newProduct.price && this.newProduct.stock) {
      this.newProduct.id = this.products.length + 1;
      this.products.push({ ...this.newProduct });
      this.newProduct = { id: 0, name: '', price: 0, stock: 0 };
    }
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  }

  updateStock(id: number, stock: number) {
    const product = this.products.find(p => p.id === id);
    if (product) product.stock = stock;
  }
}
