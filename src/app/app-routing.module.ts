import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BookingComponent } from './booking/booking.component';
import { CreateAccountComponent } from "./create-account/create-account.component";
import { LoginComponent } from './login/login.component';
import { ExtraServicesComponent } from './extra-services/extra-services.component';
import { ViewBookingsComponent } from './admin-dashboard/dashboard/view-bookings/view-bookings.component';
import { EditStaffComponent } from './admin-dashboard/dashboard/edit-staff/edit-staff.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminDashboardComponent , children: [
      { path: 'view-bookings', component: ViewBookingsComponent }
    ]
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
    path: 'edit-staff',
    component: EditStaffComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
