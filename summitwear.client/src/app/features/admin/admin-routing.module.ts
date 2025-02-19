import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin/pages/admin.component';
import { DashboardComponent } from '../admin/components/dashboard/dashboard.component';
import { ProductManageComponent } from '../admin/components/product-manage/product-manage.component';
import { OrderManageComponent } from '../admin/components/order-manage/order-manage.component';
import { CrmComponent } from '../admin/components/crm/crm.component';
import { AdminManageComponent } from '../admin/components/admin-manage/admin-manage.component';
import { AnalyticsComponent } from '../admin/components/analytics/analytics.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'adminManage', component: AdminManageComponent },
      { path: 'analytics', component: AnalyticsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductManageComponent },
      { path: 'orders', component: OrderManageComponent },
      { path: 'users', component: CrmComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
