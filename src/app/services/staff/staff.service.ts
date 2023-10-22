import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Staff } from 'src/app/models/staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  _url = "http://localhost:8080/staff/";
  _token = "";
  _head_obj: HttpHeaders;

  constructor(private http: HttpClient) { 
    this._token = localStorage.getItem('token') || '';
    this._head_obj = new HttpHeaders({"Authorization": "bearer " + this._token});
    console.log(this._head_obj);
  }

  getStaff(): Observable<Staff[]> {
    return this.http.get<Staff[]>(this._url + 'getall');
  }

  addStaff(data: Staff): Observable<Staff> {
    return this.http.post<Staff>(this._url + 'create', data);
  }

  updateStaff(data: Staff): Observable<Staff> {
    return this.http.post<Staff>(this._url + 'update', data);
  }

}
