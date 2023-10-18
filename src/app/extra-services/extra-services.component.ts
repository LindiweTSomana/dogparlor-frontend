import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ExtraServiceService } from '../services/extraservice/extra-service.service';
import { ExtraService } from '../models/ExtraService';
import { Router } from '@angular/router';
import { Dog } from '../models/Dog';
import { DogService } from '../services/dog/dog.service';
import { Customer } from '../models/Customer';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-extra-services',
  templateUrl: './extra-services.component.html',
  styleUrls: ['./extra-services.component.css']
})
export class ExtraServicesComponent implements OnInit {
  selectedService: any = { serviceId: '', name: '', description: '', serviceDuration: '', price: 34, image: '' };
  dogList: Array<Dog> = [];
  extraServices: Array<ExtraService> = [];
  totalPrice: number = 0;
  selectedExtraServices: Array<ExtraService> = []
  selectedDog: any = {};
  previous: number = 0;

  constructor(private extraServiceService: ExtraServiceService, private dogService: DogService, private router: Router) {
  }

  ngOnInit(): void {
    this.getExtraServices();
    this.displayDogDropdownIfLoggedIn();
    let id: any = sessionStorage.key(0);
    let selectedService = JSON.parse(sessionStorage.getItem(id) || '{}');
    this.selectedService = selectedService;
    this.totalPrice = selectedService.price;
  }

  getExtraServices() {
    this.extraServiceService.getExtraServices().subscribe(data => {
      this.extraServices = data;
    });
  }

  checkboxChanged(event: any, extraService: any) {
    if (event.target.checked) {
      this.selectedExtraServices.push(extraService);
      this.addToTotal();
    } else {
      let arrWithoutDeletedValue = this.selectedExtraServices.filter(current => current !== extraService);
      this.selectedExtraServices = arrWithoutDeletedValue;
      this.subtractUnchecked(extraService);
    }
  }

  addToTotal() {
    this.totalPrice = this.selectedService.price + this.previous;
    this.selectedExtraServices.forEach(element => {
      this.totalPrice += element.price;
    });
  }

  addToCart(dog: any) {
    if (this.selectedDog.keys === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please select dog'
      });
    } else {
      const dogTag = JSON.parse(dog).dogTag;
      if (localStorage.getItem('customer')) {
        sessionStorage.setItem('extra_services', JSON.stringify(this.selectedExtraServices));
        sessionStorage.setItem('total', JSON.stringify(this.totalPrice));
        sessionStorage.setItem('dog', dogTag);
        alert('Items added to cart');
        this.router.navigate(['/booking-date']);
      } else {
        this.router.navigate(['/login']);
      }
    }
  }

  setPriceByDogSize(size: String): number {
    let total: number = 0;
    // TODO: put the remaining code in a separate function
    if (size === 'Small') {
      total += 10;
    } else if (size === 'Medium') {
      total += 15;
    } else if (size === 'Large') {
      total += 20;
    }

    return total;
  }

  onSelectDog(event: any) {
    if(event.target.value !== '') {
      const selectedValue = event.target.value;
      this.selectedDog = JSON.parse(selectedValue);
      let total = 0;

      if (this.selectedDog.hairLength === 'Short') {
        this.totalPrice -= this.previous;
        total += (20 + this.setPriceByDogSize(this.selectedDog.dogSize));
        this.previous = total;
      } else if (this.selectedDog.hairLength === 'Medium') {
        this.totalPrice -= this.previous;
        total += (35 + this.setPriceByDogSize(this.selectedDog.dogSize));
        this.previous = total;
      } else if (this.selectedDog.hairLength === 'Long') {
        this.totalPrice -= this.previous;
        total += (50 + this.setPriceByDogSize(this.selectedDog.dogSize));
        this.previous = total;
      }

      this.totalPrice += total;
    } 
  }

  displayDogDropdownIfLoggedIn() {
    let customer: Customer = JSON.parse(localStorage.getItem('customer') || '{}');
    if (customer) {
      this.dogService.getAllDogsByCustomer(customer).subscribe(dogs => {
        this.dogList = dogs;
        console.log(dogs);
      })
    }
  }

  subtractUnchecked(extraService: any) {
    this.totalPrice = this.totalPrice - extraService.price;
  }

}
