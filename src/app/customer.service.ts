import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}


  deleteCustomer(customerId: string): Observable<boolean> {
    return this.http.delete<boolean>('http://localhost:8080/customer/delete/' + customerId);
  }

  getAllCustomers(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/customer/getall');
  }
}


