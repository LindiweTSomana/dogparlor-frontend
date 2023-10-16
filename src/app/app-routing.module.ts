import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BookingComponent } from './booking/booking.component';
import { CreateAccountComponent } from "./create-account/create-account.component";
import { LoginComponent } from './login/login.component';
import { ExtraServicesComponent } from './extra-services/extra-services.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import {RolesComponent} from "./admin-dashboard/dashboard/roles/roles.component";


const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: AdminDashboardComponent
  },

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'booking',
    component: BookingComponent
  },
  {
    path: 'create-account',
    component: CreateAccountComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'extra-service',
    component: ExtraServicesComponent
  },
  {
    path: 'staff',
    component: StaffDashboardComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'roles',
    component: RolesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
