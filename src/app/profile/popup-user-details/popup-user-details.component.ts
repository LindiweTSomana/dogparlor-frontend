import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from 'src/app/models/Contact';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-popup-user-details',
  templateUrl: './popup-user-details.component.html',
  styleUrls: ['./popup-user-details.component.css']
})
export class PopupUserDetailsComponent {

  customer: Customer;

  constructor(private customerService: CustomerService) {
    this.customer = JSON.parse(localStorage.getItem('customer') || '{}');
  }

  editUser(user: NgForm) {
    let currentLoggedEmail = '';
    let currentLoggedPhone = '';

    this.customer.contacts.forEach(contact => {
      if (contact.contactValue !== null) {
        contact.contactValue.includes('@') ? currentLoggedEmail = contact.contactValue : currentLoggedPhone = contact.contactValue;
      }
    });

    const email: Contact = {
      contactValue: !user.value.email ? currentLoggedEmail : user.value.email,
      contactType: {
        isEmail: true,
        isPhone: false
      }
    }

    const phone: Contact = {
      contactValue: !user.value.phone ? currentLoggedPhone : user.value.phone,
      contactType: {
        isEmail: false,
        isPhone: true
      }
    }
    
    const updatedUser: Customer = {
      customerID: this.customer.customerID,
      firstName: !user.value.firstName ? this.customer.firstName : user.value.firstName,
      lastName: !user.value.lastName ? this.customer.lastName : user.value.lastName,
      contacts: [],
      addresses: []
    };

    if (email) {
      updatedUser.contacts.push(email);
    }

    if (phone) {
      updatedUser.contacts.push(phone);
    }

    this.customerService.updateCustomer(updatedUser).subscribe(data => {
      if (data !== null) {
        Swal.fire(
          'Successful!',
          'Information updated',
          'success'
        ).then((result) => {
          this.updateInLocalStorage(data);
          location.reload();
        });        
      } else {
        Swal.fire(
          'Error!',
          'Possible reason: customer id might be corrupted or removed',
          'error'
        );
      }
    });
  }

  updateInLocalStorage(customer: Customer) {
    localStorage.removeItem('customer');
    localStorage.setItem('customer', JSON.stringify(customer));
  }

}
