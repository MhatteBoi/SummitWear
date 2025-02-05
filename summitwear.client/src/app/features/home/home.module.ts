// Import necessary modules from Angular core and other libraries
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Provides common Angular directives like ngIf, ngFor
import { HomeComponent } from './pages/home.component'; // The HomeComponent for this module
import { RouterModule, Routes } from '@angular/router'; // To handle routing within this module
import { HeroComponent } from './components/hero/hero.component'; // The HeroComponent, a child component used in the HomeComponent
import { SharedModule } from '../../shared/shared.module';
import { WeatherComponent } from './components/weather/weather.component';
import { FormsModule } from '@angular/forms';
import { PromotionComponent } from './components/promotion/promotion.component'; // Import this

// Define the routes for this module
const routes: Routes = [
  { path: '', component: HomeComponent } // Route that will render HomeComponent at the root path of this module
];

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    WeatherComponent,
    PromotionComponent], // Declare the components to be used within this module
  imports: [
    CommonModule, // Include the CommonModule for common directives and pipes
    RouterModule.forChild(routes), // Configure the router for this module using the defined routes
    SharedModule, // Import the SharedModule to make shared components/services available
    FormsModule,

  ]
})
export class HomeModule { } // The HomeModule class that encapsulates everything for the home page of the app
