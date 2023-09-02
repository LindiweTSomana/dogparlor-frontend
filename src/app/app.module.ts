import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatsComponent } from './dashboard/stats/stats.component';
import { ChartComponent } from './dashboard/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent,
    DashboardComponent,
    StatsComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
