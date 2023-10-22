import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {

  isAddressEmpty: boolean = false;
  userAddress = {addressValue: '', addressType: {}, city: '', suburb: '', zipcode: ''}
  editBtnClicked: boolean = false;

  ngOnInit(): void {
    this.checkAddressStatus();
    let addresses = JSON.parse(atob((localStorage.getItem('token') || '{}').split('.')[1])).customer.addresses;
    this.userAddress = addresses[0];
  }

  checkAddressStatus() {
    // let loggedUser = JSON.parse(atob((localStorage.getItem('token') || '{}').split('.')[1])).customer;
    let customer = JSON.parse(atob((localStorage.getItem('token') || '{}').split('.')[1])).customer;
    this.isAddressEmpty = customer.addresses.length === 0;
  }

  addAddress(addForm: NgForm) {
    let addresstype = addForm.value.addressType;

    // let loggedUser = JSON.parse(atob((localStorage.getItem('token') || '{}').split('.')[1])).customer;
    let customer = JSON.parse(atob((localStorage.getItem('token') || '{}').split('.')[1])).customer;

    let address: any = {
      addressValue: addForm.value.addressLine,
      addressType: {
        isApartment: addresstype === "apartment",
        isHome: addresstype === "home",
        isComplex: addresstype === "complex",
        isDuplex: addresstype === "duplex"
      },
      suburb: addForm.value.suburb,
      zipcode: addForm.value.zipcode,
      city: addForm.value.city
    }
    
    customer.addresses[0] = address;

    localStorage.setItem('customer', JSON.stringify(customer));
    location.reload();
  }

  editAddress() {
    this.editBtnClicked = true;
  }

}
