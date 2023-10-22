import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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
