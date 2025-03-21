import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent], // ✅ Declare it here
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: LoginComponent }, // ✅ Define route
    ])
  ]
})
export class LoginModule { }
