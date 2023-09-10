import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GroomService } from 'src/app/models/groomservice';

@Injectable({
  providedIn: 'root'
})
export class GroomserviceService {

  private _url = "http://localhost:8080/groomservice/";

  constructor(private http: HttpClient) { }

  getServices(): Observable<GroomService[]> {
    return this.http.get<GroomService[]>(this._url + 'getall');
  }
}
