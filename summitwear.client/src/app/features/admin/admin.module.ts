import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // <-- Add this import
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './pages/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrderManageComponent } from './components/order-manage/order-manage.component';
import { ProductManageComponent } from './components/product-manage/product-manage.component';
import { CrmComponent } from './components/crm/crm.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { AdminManageComponent } from './components/admin-manage/admin-manage.component';
import { SharedModule } from '../../shared/shared.module'


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    OrderManageComponent,
    ProductManageComponent,
    CrmComponent,
    AnalyticsComponent,
    AdminManageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
