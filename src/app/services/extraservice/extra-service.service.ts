import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExtraService } from 'src/app/models/ExtraService';

@Injectable({
  providedIn: 'root'
})
export class ExtraServiceService {

  private _url = "http://localhost:8080/extra-service/"

  constructor(private http: HttpClient) { }

  getExtraServices(): Observable<ExtraService[]> {
    return this.http.get<ExtraService[]>(this._url + 'getall');
  }
}
