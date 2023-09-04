import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Staff } from 'src/app/models/staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  _url = "http://localhost:8080/staff/create";

  constructor(private http: HttpClient) { }

  getStaff(): Observable<Staff[]> {
    return this.http.get<Staff[]>(this._url);
  }

  addStaff(data: Staff): Observable<Staff> {
    return this.http.post<Staff>(this._url, data);
  }

}
