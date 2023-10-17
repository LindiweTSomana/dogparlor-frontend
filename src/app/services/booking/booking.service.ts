import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private _url = "http://localhost:8080/booking/";

  constructor(private http: HttpClient) { }

  getBooking(): Observable<BookingService[]> {
    return this.http.get<BookingService[]>(this._url + 'getall');
  }

  createBooking(booking: any): Observable<BookingService> {
    return this.http.post<BookingService>(this._url + 'create', booking);
  }

  getLatestDayDates():Observable<any> {
    return this.http.get<any>(this._url + 'get-dates');
  }

  getBookedDatesByMonth(date: Array<string>): Observable<string[]> {
    return this.http.post<string[]>(this._url + 'unavailable-dates', date);
  }
}
