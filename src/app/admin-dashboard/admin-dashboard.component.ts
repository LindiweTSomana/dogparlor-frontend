import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  constructor(private router: Router) {
    let token = localStorage.getItem('token') || '';
    console.log(token.split('.')[1]);
    let data = JSON.parse(atob(token.split('.')[1]));
    console.log(data);

    const timestamp = data.exp; // 
    const date = new Date(timestamp * 1000); // date of token expiration

    // Compare the target date with the current date
    if (date < new Date()) {
      localStorage.removeItem('token');
      Swal.fire(
        'Session expired',
        'Please log in again to continue',
        'info'
      ).then((error) => {
        this.router.navigate(['login']);
      });
    }

    console.log(date);
  }

}
