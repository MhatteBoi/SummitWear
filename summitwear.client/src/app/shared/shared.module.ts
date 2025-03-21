import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ImageGridComponent } from './components/image-grid/image-grid.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLink, RouterLinkActive } from '@angular/router';




@NgModule({
  declarations: [NavbarComponent, ImageGridComponent, FooterComponent], // Declare the NavbarComponent and other components so other features can get them
  imports: [CommonModule, RouterLink, RouterLinkActive],
  exports: [NavbarComponent, ImageGridComponent, FooterComponent], // Export it so other modules can use it
})
export class SharedModule { }
