import { Component, HostListener, OnInit } from '@angular/core';
import { WeatherService } from '../../../../services/weatherService/weather.service';


interface ClothingItem {
  name: string;
  image: string;
  price: number;
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  smallScreen: boolean = false; // Tracks if the screen size is small
  weatherData: any;
  city: string = 'London';
  errorMessage: string = '';
  suggestedClothing: ClothingItem[] = [
    { name: 'Warm Jacket', image: 'https://placehold.co/250x250.png', price: 89.99 },
    { name: 'Waterproof Boots', image: 'https://placehold.co/250x250.png', price: 79.99 },
    { name: 'Thermal Gloves', image: 'https://placehold.co/250x250.png', price: 24.99 },
    // Add more items as needed make it dynamic and get items from db!
  ];

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    this.smallScreen = window.innerWidth < 640; // Example breakpoint (sm in Tailwind)
  }

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather();
    this.checkScreenSize(); // Check screen size on component load
  }

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe(
      data => {
        this.weatherData = data;
        console.log(this.weatherData);
        this.errorMessage = '';
      },
      error => {
        console.error('Error fetching weather data:', error);
        this.errorMessage = 'Failed to fetch weather data. Please try again later.';
      }
    );
  }
}
