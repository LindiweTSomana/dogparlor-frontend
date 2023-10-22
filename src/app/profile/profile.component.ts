import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;
  isUserPopupOpened: boolean = false;
  isDogPopupOpened: boolean = false;
  isAddDogPopupOpened: boolean = false;
  data: any = {};
  value: any = {};

  constructor(private dialog: MatDialog, private router: Router) {
    this.value = this.data;
    console.log(this.value);

    let token = localStorage.getItem('token') || '';
    console.log(token.split('.')[1]);
    let data = JSON.parse(atob(token.split('.')[1]));
    console.log(data);

    const timestamp = data.exp; // 
    const date = new Date(timestamp * 1000); // date of token expiration

    // Compare the target date with the current date
    if (date < new Date()) {
      localStorage.removeItem('token');
      Swal.fire(
        'Session expired',
        'Please log in again to continue',
        'info'
      ).then((error) => {
        this.router.navigate(['login']);
      });
    }

    console.log(date);
  }

  ngOnInit(): void {
    let token = localStorage.getItem("token") || "{}";
    console.log(token);
    let extractedToken = token.split('.')[1];
    let atobdata = atob(extractedToken);
    console.log(atobdata);
    let user = JSON.parse(atobdata).customer; 
    console.log(user);
    
    this.user = user;
  }

  openUserDialog() {
    this.isUserPopupOpened = true;
  }

  openDogDialog() {
    this.isDogPopupOpened = true;
  }

  activateAddDogPopup() {
    this.isAddDogPopupOpened = true;
  }

  closeDialog() {
    this.isDogPopupOpened = false;
    this.isUserPopupOpened = false;
    this.isAddDogPopupOpened = false;
  }

}
