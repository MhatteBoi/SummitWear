import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-image-grid',
    templateUrl: './image-grid.component.html',
    styleUrl: './image-grid.component.css',
    standalone: false
})
export class ImageGridComponent {
  scrollPosition = 0;

  images = [
    {
      url: 'https://res.cloudinary.com/dm3vmtten/image/upload/v1735996358/DALL_E_2024-09-30_15.19.32_-_A_realistic_high-quality_outdoor_jacket_designed_for_rugged_use._The_jacket_is_practical_yet_stylish_made_of_water-resistant_and_breathable_fabric_w_vmi441.webp',
      alt: 'Nature Image 1'
    },
    {
      url: 'https://res.cloudinary.com/dm3vmtten/image/upload/v1739971582/DALL_E_2025-02-19_14.24.42_-_A_professional_product_shot_of_a_rugged_winter_hiking_boot._The_boot_is_mid-cut_made_of_durable_leather_and_waterproof_materials_with_a_thick_insulat_bgtzvu.webp',
      alt: 'Nature Image 2'
    },
    {
      url: 'https://res.cloudinary.com/dm3vmtten/image/upload/v1735996323/DALL_E_2024-09-30_15.24.31_-_A_realistic_high-quality_outdoor_jacket_designed_for_rugged_use_now_in_a_nice_dark_blue_color._The_jacket_is_made_of_water-resistant_and_breathable_rn1exe.webp',
      alt: 'Nature Image 3'
    },
    {
      url: 'https://res.cloudinary.com/dm3vmtten/image/upload/v1739971582/DALL_E_2025-02-19_14.25.39_-_A_professional_product_shot_of_high-performance_hiking_pants._The_pants_are_made_of_durable_waterproof_and_breathable_fabric_designed_for_extreme_o_o6jlds.webp',
      alt: 'Nature Image 4'
    }
  ];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.scrollPosition = window.scrollY;
  }

  getTranslation(index: number): number {
    // Each image will float at a different speed
    const speed = (index + 1) * 0.2;
    return -this.scrollPosition * speed;
  }
}
