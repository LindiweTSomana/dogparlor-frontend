import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Staff } from 'src/app/models/staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  _url = "http://localhost:8080/staff/";

  constructor(private http: HttpClient) { }

  getStaff(): Observable<StaffService[]> {
    return this.http.get<StaffService[]>(this._url + 'getall');
  }

  addStaff(data: Staff): Observable<Staff> {
    return this.http.post<Staff>(this._url + 'create', data);
  }

  updateStaff(data: Staff): Observable<Staff> {
    return this.http.post<Staff>(this._url + 'update', data);
  }

}
