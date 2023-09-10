import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GroomService } from 'src/app/models/groomservice';
import { GroomserviceService } from 'src/app/services/groomservice/groomservice.service';

@Component({
  selector: 'app-homesection',
  templateUrl: './homesection.component.html',
  styleUrls: ['./homesection.component.css']
})
export class HomesectionComponent implements OnInit {
  services: Array<GroomService> = [];

  constructor(private groomService: GroomserviceService) {}

  ngOnInit(): void {
    this.getServices();
  }

  getServices() {
    this.groomService.getServices().subscribe(data => {
      this.services = data;
    });
  }

  onServiceClick(service: GroomService) {
    sessionStorage.clear();
    sessionStorage.setItem('service', JSON.stringify(service));
  }
}
