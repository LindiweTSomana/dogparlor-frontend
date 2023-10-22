import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking/booking.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-booking-history-table',
  templateUrl: './customer-booking-history-table.component.html',
  styleUrls: ['./customer-booking-history-table.component.css']
})
export class CustomerBookingHistoryTableComponent implements OnInit {
  bookings: Array<any> = [];


  constructor(private bookingService: BookingService){
    this.getBookings();
  }

  ngOnInit(): void {
   
  }

  getBookings() {
    this.bookingService.getBooking().subscribe(data => {
      this.bookings = data
    });
  }

  deleteBooking(bookingID:any){

    Swal.fire({
      title: 'Are you sure you want to delete?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No, it was a mistake`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.bookingService.deleteBooking(bookingID).subscribe(res => {
          if (res) {
            Swal.fire('Deleted!', '', 'success').then((response) => {
              location.reload();
            });
          } else {
            Swal.fire('Something went wrong', '', 'error')
          }
        });
      } else if (result.isDenied) {
        Swal.fire('Canceled', '', 'info')
      }
    })

  }

}

  


