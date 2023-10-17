import { Component, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg, DatesSetArg } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { BookingService } from '../services/booking/booking.service';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-date',
  templateUrl: './booking-date.component.html',
  styleUrls: ['./booking-date.component.css']
})
export class BookingDateComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // MUST ensure `this` context is maintained
    events: [],
    datesSet: this.handleDateChange.bind(this),
    plugins: [dayGridPlugin, interactionPlugin],
  };

  chosenDay: String = '';
  dates: Array<Date> = [];
  currentMonth: string = '';
  currentYear: string = '';
  dateSessionObject: string = '';

  constructor(private bookingService: BookingService, private router: Router) {
  }

  ngOnInit(): void {
  }

  handleDateChange(arg: DatesSetArg) {
    // Extract the current start date and update currentMonth and currentYear
    const startDate = arg.view.currentStart;
    this.currentMonth = startDate.toLocaleString('default', { month: 'long' });
    this.currentYear = startDate.getFullYear().toString();
    
    let date: Array<string> = [this.currentMonth, this.currentYear];
    this.getBookedDatesByMonth(date);
  }

  getBookedDatesByMonth(date: Array<string>): void {
    this.bookingService.getBookedDatesByMonth(date).subscribe(dates => {
      let finalDates: any[] = [];

      Object.keys(dates).forEach((key: any) => {
        let value: number = Number.parseInt(dates[key]);
        if (value > 9) {
          key = key.toString().replaceAll(',', '-');
          let date = {
            title: "Fully Booked",
            date: key
          }
          finalDates.push(date);
        }
      });

      this.calendarOptions.events = finalDates;
      console.log(finalDates);
    });
  }

  hadDatePassed(date: string) {
    const givenDateString = date;
    const givenDate = new Date(givenDateString);
    const currentDate = new Date();

    if (givenDate < currentDate) {
        return ('passed');
    } else if (givenDate > currentDate) {
        return ('not passed');
    } else {
        return ('current');
    }
  }

  handleDateClick(arg: any): void {
    let dateChosen = arg.dateStr;
    let status = this.hadDatePassed(dateChosen)

    if (status === 'passed') {
      Swal.fire({
        title: '<strong>This date has passed already</u></strong>',
        icon: 'info',
        showCloseButton: true,
        focusConfirm: false,
      })
    } else if (!arg.dayEl.innerText.includes('Fully Booked')) {
      let dateSelected = arg.dateStr;

      let date = new Date(dateSelected);
      this.chosenDay = date.toString().split('02:00:00')[0]; // only interested in the day, date, month and year

      let formattedTimeStamp = this.formatDateStringToTimestamp(date.toString());
      this.dateSessionObject = formattedTimeStamp;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'This day is fully booked',
      })
    }
  }

  formatDateStringToTimestamp(dateString: string): string {
    let date = new Date(dateString);

    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDate()).padStart(2, '0');

    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');
    let milliseconds = String(date.getMilliseconds()).padStart(3, '0');

    let formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;

    return formattedDate;
  }

  confirm() {
    sessionStorage.setItem('date', this.dateSessionObject);

    if (this.dateSessionObject) {
      this.router.navigate(['/booking']);
    } else {
      Swal.fire({
        title: '<strong>Please select date</u></strong>',
        icon: 'info',
        showCloseButton: true,
        focusConfirm: false,
      })
    }
  }

}
