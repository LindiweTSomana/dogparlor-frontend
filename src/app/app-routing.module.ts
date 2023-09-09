import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ExtraServicesComponent } from './extra-services/extra-services.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminDashboardComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'extra-services',
    component: ExtraServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
