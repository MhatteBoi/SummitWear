import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [NavbarComponent], // Declare the NavbarComponent
  imports: [CommonModule],
  exports: [NavbarComponent], // Export it so other modules can use it
})
export class SharedModule { }
