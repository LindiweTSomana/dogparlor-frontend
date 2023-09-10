import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ExtraServiceService } from '../services/extraservice/extra-service.service';
import { ExtraService } from '../models/ExtraService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-extra-services',
  templateUrl: './extra-services.component.html',
  styleUrls: ['./extra-services.component.css']
})
export class ExtraServicesComponent implements OnInit {
  selectedService: any = { serviceId: '', name: '', description: '', serviceDuration: '', price: 34, image: '' };
  extraServices: Array<ExtraService> = [];
  totalPrice: number = 0;
  selectedExtraServices: Array<ExtraService> = []

  constructor(private extraServiceService: ExtraServiceService, private router: Router) {
  }

  ngOnInit(): void {
    this.getExtraServices();
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
    this.totalPrice = this.selectedService.price;
    this.selectedExtraServices.forEach(element => {
      this.totalPrice += element.price;
    });
  }

  addToCart() {
    if (localStorage.getItem('customer')) {
      sessionStorage.setItem('extra_services', JSON.stringify(this.selectedExtraServices));
      sessionStorage.setItem('total', JSON.stringify(this.totalPrice));
      alert('Items added to cart');
      this.router.navigate(['/booking']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  subtractUnchecked(extraService: any) {
    this.totalPrice = this.totalPrice - extraService.price;
  }

}
