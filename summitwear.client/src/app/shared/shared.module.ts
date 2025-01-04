import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ImageGridComponent } from './components/image-grid/image-grid.component';



@NgModule({
  declarations: [NavbarComponent, ImageGridComponent], // Declare the NavbarComponent and other components so other features can get them
  imports: [CommonModule],
  exports: [NavbarComponent, ImageGridComponent], // Export it so other modules can use it
})
export class SharedModule { }
