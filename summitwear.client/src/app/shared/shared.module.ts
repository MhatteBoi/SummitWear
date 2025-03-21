import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ImageGridComponent } from './components/image-grid/image-grid.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DelConfCardComponent } from './components/del-conf-card/del-conf-card.component';
import { EditProdCardComponent } from './components/edit-prod-card/edit-prod-card.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    NavbarComponent,// Declare the NavbarComponent and other components so other features can get them
    ImageGridComponent,
    FooterComponent,
    DelConfCardComponent,
    EditProdCardComponent
  ], 
  imports: [CommonModule,
    RouterLink,
    RouterLinkActive,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    ImageGridComponent,
    FooterComponent,
    DelConfCardComponent,
    EditProdCardComponent
  ], // Export it so other modules can use it
})
export class SharedModule { }
