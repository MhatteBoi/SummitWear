import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class ProductCatalogComponent {
  products = [
    { id: 'PROD001', name: 'Summit Jacket', price: 1999, image: 'https://res.cloudinary.com/dm3vmtten/image/upload/v1735996358/DALL_E_2024-09-30_15.19.32_-_A_realistic_high-quality_outdoor_jacket_designed_for_rugged_use._The_jacket_is_practical_yet_stylish_made_of_water-resistant_and_breathable_fabric_w_vmi441.webp' },
    { id: 'PROD002', name: 'Thermal Base Layer', price: 499, image: 'https://res.cloudinary.com/dm3vmtten/image/upload/v1739971582/DALL_E_2025-02-19_14.25.39_-_A_professional_product_shot_of_high-performance_hiking_pants._The_pants_are_made_of_durable_waterproof_and_breathable_fabric_designed_for_extreme_o_o6jlds.webp' },
    { id: 'PROD003', name: 'Hiking Boots', price: 1499, image: 'https://res.cloudinary.com/dm3vmtten/image/upload/v1739971582/DALL_E_2025-02-19_14.24.42_-_A_professional_product_shot_of_a_rugged_winter_hiking_boot._The_boot_is_mid-cut_made_of_durable_leather_and_waterproof_materials_with_a_thick_insulat_bgtzvu.webp' }
  ];

  constructor(private router: Router) { }

  viewProduct(productId: string) {
    this.router.navigate(['/product', productId]); // Navigate to product detail page
  }
}
