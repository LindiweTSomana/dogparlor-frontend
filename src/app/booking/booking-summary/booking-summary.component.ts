import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Customer } from 'src/app/models/Customer';
import { ExtraService } from 'src/app/models/ExtraService';
import { GroomService } from 'src/app/models/groomservice';
import { BookingService } from 'src/app/services/booking/booking.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.component.html',
  styleUrls: ['./booking-summary.component.css']
})
export class BookingSummaryComponent implements OnInit {
  service: GroomService = {
    serviceId: '',
    name: '',
    description: '',
    serviceDuration: '',
    price: 0,
    image: ''
  }

  extraServices: Array<ExtraService> = [{
    extraServiceId: '',
    extraServiceName: '',
    price: 0
  }]

  user: Customer = {
    firstName: '',
    lastName: '',
    contacts: [],
    addresses: []
  }

  total: number = 0;

  constructor(private bookingService: BookingService, private router: Router) {}

  ngOnInit(): void {
    this.getService();
    this.getExtraServices();
    this.getTotal();
    this.getLoggedInUser();
  }

  getService() {
    this.service = JSON.parse(sessionStorage.getItem('service') || '{}');
  }

  getExtraServices() {
    this.extraServices = JSON.parse(sessionStorage.getItem('extra_services') || '{}');
  }

  getTotal() {
    this.total = Number.parseFloat(sessionStorage.getItem('total') || '0');
  }

  getLoggedInUser() {
    this.user = JSON.parse(localStorage.getItem('customer') || '{}');
  }

  book() {
    let booking = {
      dog: {
        dogTag: sessionStorage.getItem('dog')
      },
      staffList: [],
      groomServices: [this.service],
      extraServices: this.extraServices,
      total: this.total
    }
    
    this.bookingService.createBooking(booking).pipe(
      catchError((error) => {
        if (error.status === 404) {
          console.error('Resource not found:', error);
          // Display a user-friendly "Not Found" message
          this.router.navigate(['/404']);
        } else {
          console.error('An error occurred:', error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Internal Server error occurred'
          })
        }
        return throwError(error);
      })
    ).subscribe(() => {
        // Handle successful response
        Swal.fire(
          'Successful!',
          'Booking has been successfully made',
          'success'
        )
        this.router.navigate(['/home']);
      }
    );
  }

  setAddress() {}

}
