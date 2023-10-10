import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupUserDetailsComponent } from './popup-user-details/popup-user-details.component';

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

  constructor(private dialog: MatDialog) {
    this.value = this.data;
    console.log(this.value);
  }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem("customer") || "{}");
    this.user = user;
    console.log(this.user);
    console.log(this.data);
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
