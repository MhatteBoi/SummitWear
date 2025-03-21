import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../../services/productService/product-service.service';

@Component({
  selector: 'app-edit-prod-card',
  standalone: false,
  templateUrl: './edit-prod-card.component.html',
  styleUrl: './edit-prod-card.component.css'
})
export class EditProdCardComponent {
  @Input() editedProduct: Product;
  @Output() saveChanges = new EventEmitter<Product>();
  @Output() cancel = new EventEmitter<void>();



  constructor() {
    this.editedProduct = {} as Product;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['editedProduct'] && changes['editedProduct'].currentValue) {
      this.editedProduct = { ...this.editedProduct, images: [...this.editedProduct.images] };
    }
  }

  onSave() {
    console.log('Product to save:', this.editedProduct);
    if (this.editedProduct.productId == null) {
      console.error('Product ID is missing!');
      return;
    }
    this.saveChanges.emit(this.editedProduct);
  }

  onCancel() {
    this.cancel.emit();
  }
}
