import { Component } from '@angular/core';

@Component({
  selector: 'app-staffnav',
  templateUrl: './staffnav.component.html',
  styleUrls: ['./staffnav.component.css']
})
export class StaffnavComponent {

  username = ''

  constructor() {
    this.username = JSON.parse(atob((localStorage.getItem('token') || '{}').split('.')[1])).staff.user.username;
  }

}
