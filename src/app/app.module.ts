import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NavComponent } from './admin-dashboard/nav/nav.component';
import { SidebarComponent } from './admin-dashboard/sidebar/sidebar.component';
import { DashboardComponent } from './admin-dashboard/dashboard/dashboard.component';
import { StatsComponent } from './admin-dashboard/dashboard/stats/stats.component';
import { ChartComponent } from './admin-dashboard/dashboard/chart/chart.component';
import { HomeComponent } from './home/home.component';
import { HomesectionComponent } from './home/homesection/homesection.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AddNewStaffComponent } from './admin-dashboard/dashboard/add-new-staff/add-new-staff.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BookingComponent } from './booking/booking.component';
import { AddressFormComponent } from './booking/address-form/address-form.component';
import { BookingSummaryComponent } from './booking/booking-summary/booking-summary.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraServicesComponent } from './extra-services/extra-services.component';
import { ViewBookingsComponent } from './admin-dashboard/dashboard/view-bookings/view-bookings.component';
import { EditStaffComponent } from './admin-dashboard/dashboard/edit-staff/edit-staff.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent,
    DashboardComponent,
    ExtraServicesComponent,
    StatsComponent,
    ChartComponent,
    AdminDashboardComponent,
    HomeComponent,
    HomesectionComponent,
    NavbarComponent,
    FooterComponent,
    AddNewStaffComponent,
    BookingComponent,
    AddressFormComponent,
    BookingSummaryComponent,
    CreateAccountComponent,
    LoginComponent,
    AddNewStaffComponent,
    ViewBookingsComponent,
    EditStaffComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
