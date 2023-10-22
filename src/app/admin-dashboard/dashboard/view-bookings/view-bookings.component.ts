import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking/booking.service';
import { StaffService } from 'src/app/services/staff/staff.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent implements OnInit {
  staffList: Array<any> = [];
  bookings: Array<any> = [];

 
  constructor(private staffService: StaffService, private bookingService: BookingService) {
  }
  ngOnInit(): void {
    this.getStaff();
    this.getBookings();
    let c = localStorage.getItem('token') || '{}';
    console.log(c)
    console.log(this.bookings);
  }

  getStaff() {
    this.staffService.getStaff().subscribe(data => this.staffList = data);
    
  }
  getBookings() {
    this.bookingService.getBooking().subscribe(data => {
      console.log(data[0].dog);
      this.bookings = data
    });
  }

 assignStaff(booking:any , staff:any){

booking.staffList.push(JSON.parse(staff));

 const uniqueStaffList: any = [];

const seen = new Set();


booking.staffList.forEach((staff:any) => {

    const staffString = JSON.stringify(staff);

    if (!seen.has(staffString)) {

        seen.add(staffString);

        uniqueStaffList.push(staff);

    }

});

booking.staffList = uniqueStaffList;


  this.bookingService.updateBooking(booking).subscribe(data => {
    console.log(data);
    if (data !== null){
      Swal.fire(
        'Successful!',
        'You have successfully assigned a new staff member',
        'success'
      )
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Staff was not successfully added, try again later!'
      })


    }
  })


 }

 
  
}
