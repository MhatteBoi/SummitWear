import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../services/productService/product-service.service'; // Adjust path as needed Fix so you have one product interface

@Component({
  selector: 'app-del-conf-card',
  standalone: false,
  templateUrl: './del-conf-card.component.html',
  styleUrl: './del-conf-card.component.css'
})
export class DelConfCardComponent {
  @Input() product!: Product;
  @Output() confirmDelete = new EventEmitter<number>();  // Sends product ID to delete
  @Output() cancel = new EventEmitter<void>();  // Cancels deletion

  onDelete() {
    this.confirmDelete.emit(this.product.productId);
  }

  onCancel() {
    this.cancel.emit();

  }
}
