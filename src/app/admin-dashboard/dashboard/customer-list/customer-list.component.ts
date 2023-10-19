
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../customer.service';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {

  _customers: any[] = []

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customerService.getAllCustomers().subscribe((data: any[]) => {
      this._customers = data;
    });
  }

  deleteCustomer(customerId: string) {
    console.log(customerId);
    this.customerService.deleteCustomer(customerId).subscribe(() => {
      this.loadCustomers();
    });
  }
}

