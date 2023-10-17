import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/Booking';
import { BookingService } from 'src/app/services/booking/booking.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { forkJoin } from 'rxjs';
import { Staff } from 'src/app/models/staff';

@Component({
  selector: 'app-staff-task',
  templateUrl: './staff-task.component.html',
  styleUrls: ['./staff-task.component.css']
})
export class StaffTaskComponent implements OnInit {

  bookings: any[] = [];


  constructor(private bookingService : BookingService){}
  
  ngOnInit(): void {
    this.getBooking();
  }

  getBooking(){
    this.bookingService.getBooking().subscribe((data : any[]) =>
    {
      this.bookings = data;
    });
  }
}
