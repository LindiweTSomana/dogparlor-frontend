import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/models/Booking';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private _url = "http://localhost:8080/booking/";

  constructor(private http: HttpClient) { }

  getBooking(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this._url + 'getall');
  }

  getBookingById(bookingID:any): Observable<any[]> {
    return this.http.get<any[]>( this._url + bookingID);
  }

  createBooking(booking: any): Observable<BookingService> {
    return this.http.post<BookingService>(this._url + 'create', booking);
  }
  updateBooking(booking: any): Observable<BookingService> {
    return this.http.post<BookingService>(this._url + 'update', booking);
  }

  deleteBooking(bookingID: string): Observable<boolean> {
    return this.http.delete<boolean>(this._url + "delete/" + bookingID);
  }
  
  getLatestDayDates():Observable<any> {
    return this.http.get<any>(this._url + 'get-dates');
  }

  getBookedDatesByMonth(date: Array<string>): Observable<string[]> {
    return this.http.post<string[]>(this._url + 'unavailable-dates', date);
  }
}
