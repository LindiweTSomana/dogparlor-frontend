import { Injectable } from '@angular/core';
import { GroomService } from '../models/groomservice';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  message = {};

  constructor() { }

  setMessage(data: GroomService) {
    this.message = data;
  }

  getMessage() {
    return this.message;
  }
}
