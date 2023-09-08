import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {CreateAccountComponent} from "./create-account/create-account.component";

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
    path: 'create-account',
    component: CreateAccountComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
