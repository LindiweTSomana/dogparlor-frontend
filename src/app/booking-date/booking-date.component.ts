import { Component, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg, DatesSetArg } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { BookingService } from '../services/booking/booking.service';
import * as moment from 'moment';

@Component({
  selector: 'app-booking-date',
  templateUrl: './booking-date.component.html',
  styleUrls: ['./booking-date.component.css']
})
export class BookingDateComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // MUST ensure `this` context is maintained
    events: [
      { title: 'Fully booked', date: '2023-10-01' },
      { title: 'Fully booked', date: '2023-10-02' }
    ],
    datesSet: this.handleDateChange.bind(this),
    plugins: [dayGridPlugin, interactionPlugin],
  };

  dateChoice: String = '';
  dates: Array<Date> = [];
  currentMonth: string = '';
  currentYear: string = '';

  constructor(private bookingService: BookingService) {
  }

  ngOnInit(): void {
    this.getDates();
    // console.log('jerwk');
  }

  handleDateChange(arg: DatesSetArg) {
    // Extract the current start date and update currentMonth and currentYear
    const startDate = arg.view.currentStart;
    this.currentMonth = startDate.toLocaleString('default', { month: 'long' });
    this.currentYear = startDate.getFullYear().toString();
    
    let date: Array<string> = [this.currentMonth, this.currentYear];
    this.getFullyBookedDatesByMonth(date);
  }

  getFullyBookedDatesByMonth(date: Array<string>) {
    // service
    this.bookingService.getFullyBookedDatesByMonth(date).subscribe(dates => {
      console.log(dates);
    });
  }

  handleDateClick(arg: any) {
    if (this.dates.length < 10) {
      alert('date click! ' + arg.dateStr)
    } else {
      alert('This day is fully booked')
    }
  }

  getDates() {
    this.bookingService.getLatestDayDates().subscribe(dates => {
      this.dates = dates;

      this.dates.forEach(date => {
        const formattedDate = new Date(date); 
        let day = (formattedDate.getDate());
        let month = (formattedDate.getMonth());
        let year = (formattedDate.getFullYear());
      });
    });
  }

}
