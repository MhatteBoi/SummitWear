import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

type Season = 'fall' | 'winter' | 'spring' | 'summer';

@Component({
  selector: 'app-look-book',
  templateUrl: './look-book.component.html',
  styleUrls: ['./look-book.component.css'],
  animations: [
    trigger('fadeRotate', [
      state('visible', style({ opacity: 1, transform: 'rotateY(0deg)' })),
      state('hidden', style({ opacity: 0, transform: 'rotateY(180deg)' })),
      transition('visible <=> hidden', [
        animate('0.5s ease-in-out')
      ])
    ])
  ]
})
export class LookBookComponent {
  seasonsList: Season[] = ['fall', 'winter', 'spring', 'summer'];


  // Add animation direction tracking
  autoPlayIntervals: Record<Season, any> = {
    fall: null,
    winter: null,
    spring: null,
    summer: null
  };


  seasons: Record<Season, { src: string; alt: string }[]> = {
    fall: [
      { src: 'https://res.cloudinary.com/dm3vmtten/image/upload/v1735830650/samples/man-on-a-street.jpg', alt: 'Fall Look 1' },
      { src: 'https://res.cloudinary.com/dm3vmtten/image/upload/v1735830651/samples/dessert-on-a-plate.jpg', alt: 'Fall Look 2' }
    ],
    winter: [
      { src: 'https://res.cloudinary.com/dm3vmtten/image/upload/v1735830648/samples/shoe.jpg', alt: 'Winter Look 1' },
      { src: 'https://res.cloudinary.com/dm3vmtten/image/upload/v1735830650/samples/outdoor-woman.jpg', alt: 'Winter Look 2' }
    ],
    spring: [
      { src: 'https://res.cloudinary.com/dm3vmtten/image/upload/v1735830644/samples/animals/kitten-playing.gif', alt: 'Spring Look 1' },
      { src: 'https://res.cloudinary.com/dm3vmtten/image/upload/v1735830646/samples/two-ladies.jpg', alt: 'Spring Look 2' }
    ],
    summer: [
      { src: 'https://res.cloudinary.com/dm3vmtten/image/upload/v1735830643/samples/ecommerce/leather-bag-gray.jpg', alt: 'Summer Look 1' },
      { src: 'https://res.cloudinary.com/dm3vmtten/image/upload/v1735830643/samples/food/spices.jpg', alt: 'Summer Look 2' }
    ]
  };

  currentPositions: Record<Season, number> = {
    fall: 0,
    winter: 0,
    spring: 0,
    summer: 0
  };

  isHovered: Record<Season, boolean> = {
    fall: false,
    winter: false,
    spring: false,
    summer: false
  };

  private animationFrames: Record<Season, number> = {
    fall: 0,
    winter: 0,
    spring: 0,
    summer: 0
  };

  ngOnInit() {
    this.seasonsList.forEach(season => this.startAnimation(season));
  }

  ngOnDestroy() {
    this.seasonsList.forEach(season => this.stopAnimation(season));
  }

  startAnimation(season: Season) {
    this.stopAnimation(season); // Clear existing interval
    this.autoPlayIntervals[season] = setInterval(() => {
      if (!this.isHovered[season]) {
        this.currentPositions[season] -= 100 / this.seasons[season].length;
      }
    }, 6000); // Adjust speed
  }

  stopAnimation(season: Season) {
    if (this.autoPlayIntervals[season]) {
      clearInterval(this.autoPlayIntervals[season]);
      this.autoPlayIntervals[season] = null;
    }
  }

  onMouseEnter(season: Season) {
    this.isHovered[season] = true;
    this.stopAnimation(season);
  }

  onMouseLeave(season: Season) {
    this.isHovered[season] = false;
    this.startAnimation(season);
  }

  trackByFn(index: number, item: any): number {
    return index;
  }
}
