import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private _url = "http://localhost:8080/customer/";

  constructor(private http: HttpClient) { }

  getCustomers(contact: any): Observable<Customer> {
    return this.http.post<Customer>(this._url + "login", contact);
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this._url + "create", customer);
  }

}
