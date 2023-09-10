import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer/customer.service';
import { NgForm } from '@angular/forms';
import { Customer } from '../models/Customer';
import { Contact } from '../models/Contact';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private customerService: CustomerService, private router: Router) {}

  ngOnInit(): void {
    
  }

  createAccount(createdUser: NgForm) {
    let email: Contact = {
      contactValue: createdUser.value.email,
      contactType: {
        isEmail: true,
        isPhone: false
      }
    }

    let phone: Contact = {
      contactValue: createdUser.value.phone,
      contactType: {
        isEmail: false,
        isPhone: true
      }
    }

    let customer: Customer = {
      firstName: createdUser.value.firstName,
      lastName: createdUser.value.lastName,
      contacts: [],
      addresses: []
    }

    if (createdUser.value.phone === '' && createdUser.value.email !== '') {
      customer.contacts.push(email);
    } else if (createdUser.value.phone !== '' && createdUser.value.email === '') {
      customer.contacts.push(phone);
    } else if (createdUser.value.phone === '' && createdUser.value.email === '') {
      // put something bro tf
    } else {
      customer.contacts.push(email);
      customer.contacts.push(phone);
    }

    this.customerService.createCustomer(customer).subscribe(data => {
      if (data !== null) {
        Swal.fire(
          'Successful!',
          'Account successfully created',
          'success'
        );
      }
      this.router.navigate(['/login']);
    });

  }

}
