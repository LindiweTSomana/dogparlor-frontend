import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/models/Booking';
import { BookingService } from 'src/app/services/booking/booking.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboardstaff',
  templateUrl: './dashboardstaff.component.html',
  styleUrls: ['./dashboardstaff.component.css']
})
export class DashboardstaffComponent {

  staffNumber: string;
  staffBookings: any;

  constructor(private bookings: BookingService, private router: Router) {
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

    this.staffNumber = JSON.parse(atob((localStorage.getItem('token') || '{}').split('.')[1])).staff.staffNumber;

    this.getBookings();
  }

  getBookings() {
    this.bookings.getBookingsByStaffNumber(this.staffNumber).subscribe(bookings => {
      this.staffBookings = bookings;
    });
  }

}
