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
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import {RolesComponent} from "./admin-dashboard/dashboard/roles/roles.component";
import { DeleteStaffMemberComponent } from './admin-dashboard/dashboard/delete-staff-member/delete-staff-member.component';
import { StaffTaskComponent } from './admin-dashboard/dashboard/staff-task/staff-task.component';
import { BookingDateComponent } from './booking-date/booking-date.component';


const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full',
  },
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
  }, 
  {
    path: "delete",
    component: DeleteStaffMemberComponent
  },
  {
    path: "task",
    component: StaffTaskComponent
  },
  {
    path: 'booking-date',
    component: BookingDateComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
