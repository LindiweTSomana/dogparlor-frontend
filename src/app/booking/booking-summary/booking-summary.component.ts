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
    user: {},
    firstName: '',
    lastName: '',
    contacts: [],
    addresses: []
  }

  total: number = 0;

  dateChosen: string = (sessionStorage.getItem('date') || '').split(' ')[0];

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
    this.user = JSON.parse(atob((localStorage.getItem('token') || '{}').split('.')[1])).customer;
  }


  getBookingInformation() {
    const originalDate = new Date(sessionStorage.getItem('date')!);
    const isoDate = originalDate.toISOString();

    let booking = {
      dog: {
        dogTag: sessionStorage.getItem('dog'),
        customer: this.getLoggedInUser()
      },
      bookingDate: isoDate,
      staffList: [],
      groomServices: [this.service],
      extraServices: this.extraServices,
      total: this.total
    }

    console.log(booking);

    this.book(booking);
  }

  book(booking: any) {
  
    this.bookingService.createBooking(booking).pipe(
      catchError((error) => {
        if (error.status === 404) {
          console.error('Resource not found:', error);
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
        Swal.fire(
          'Successful!',
          'Booking has been successfully made',
          'success'
        ).then((res) => {
          this.router.navigate(['/home']);
        })
      }
    );
  }

  setAddress() {}

}
