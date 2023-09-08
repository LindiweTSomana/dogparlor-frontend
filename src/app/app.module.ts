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
import { AddNewStaffComponent } from './admin-dashboard/dashboard/add-new-staff/add-new-staff.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BookingComponent } from './booking/booking.component';
import { AddressFormComponent } from './booking/address-form/address-form.component';
import { BookingSummaryComponent } from './booking/booking-summary/booking-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent,
    DashboardComponent,
    StatsComponent,
    ChartComponent,
    AdminDashboardComponent,
    HomeComponent,
    AddNewStaffComponent,
    BookingComponent,
    AddressFormComponent,
    BookingSummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
