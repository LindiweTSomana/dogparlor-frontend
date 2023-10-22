import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logStatus: string = 'Login';

  constructor() {}

  ngOnInit(): void {
    this.checkIfSomeoneLoggedIn();
  }

  checkIfSomeoneLoggedIn() {
    const res = localStorage.getItem('token');
    if (res !== null) {
      this.logStatus = 'Logout';
    }
  }

  logOut() {
    localStorage.removeItem('customer');
    localStorage.removeItem('token');
  }
}
