import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/Customer';
import { Dog } from 'src/app/models/Dog';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  public url: string = "http://localhost:8080/dog/";

  constructor(private http: HttpClient) { }

  getAllDogsByCustomer(customer: Customer): Observable<Dog[]> {
    return this.http.post<Dog[]>(this.url + "getall-by-customer", customer);
  }
 
  updateDog(dog: Dog): Observable<Dog> {
    return this.http.post<Dog>(this.url + "update", dog);
  }

  addDog(dog: Dog): Observable<Dog> {
    return this.http.post<Dog>(this.url + "create", dog);
  }

  deleteDog(dogTag: string): Observable<boolean> {
    return this.http.delete<boolean>(this.url + "delete/" + dogTag);
  }

}
