import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any;

  products = [
    { id: 'PROD001', name: 'Summit Jacket', price: 1999, image: 'https://res.cloudinary.com/dm3vmtten/image/upload/v1735996358/DALL_E_2024-09-30_15.19.32_-_A_realistic_high-quality_outdoor_jacket_designed_for_rugged_use._The_jacket_is_practical_yet_stylish_made_of_water-resistant_and_breathable_fabric_w_vmi441.webp', description: 'A waterproof jacket for all seasons.' },
    { id: 'PROD002', name: 'Functional Pants', price: 499, image: 'https://res.cloudinary.com/dm3vmtten/image/upload/v1739971582/DALL_E_2025-02-19_14.25.39_-_A_professional_product_shot_of_high-performance_hiking_pants._The_pants_are_made_of_durable_waterproof_and_breathable_fabric_designed_for_extreme_o_o6jlds.webp', description: 'A lightweight thermal base layer.' },
    { id: 'PROD003', name: 'Hiking Boots', price: 1499, image: 'https://res.cloudinary.com/dm3vmtten/image/upload/v1739971582/DALL_E_2025-02-19_14.24.42_-_A_professional_product_shot_of_a_rugged_winter_hiking_boot._The_boot_is_mid-cut_made_of_durable_leather_and_waterproof_materials_with_a_thick_insulat_bgtzvu.webp', description: 'Durable and comfortable hiking boots.' }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    this.product = this.products.find(p => p.id === productId);
  }
}
