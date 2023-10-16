import { Injectable } from '@angular/core';
import { GroomService } from '../models/groomservice';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  message: any = {};

  constructor() { }

  setMessage(data: any) {
    this.message = data;
  }

  getMessage() {
    return this.message;
  }
}
