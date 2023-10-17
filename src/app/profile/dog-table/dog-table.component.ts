import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { Dog } from 'src/app/models/Dog';
import { DogService } from 'src/app/services/dog/dog.service';
import { SharedService } from 'src/app/shared/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dog-table',
  templateUrl: './dog-table.component.html',
  styleUrls: ['./dog-table.component.css']
})
export class DogTableComponent implements OnInit {

  public dogs: Array<Dog> = [];
  public customer: Customer = JSON.parse(localStorage.getItem('customer') || '{}');
  @Output() childEvent: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(private dogService: DogService, private shared: SharedService) {}

  ngOnInit(): void {
    this.getDogs();
  }

  getDogs() {
    this.dogService.getAllDogsByCustomer(this.customer).subscribe(data => {
      this.dogs = data;
    });
  }

  editDog(dog: Dog) {
    this.childEvent.emit(true);
    this.shared.setMessage(dog);
  }

  deleteDog(dogId: string) {
    Swal.fire({
      title: 'Are you sure you want to delete?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No, it was a mistake`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.dogService.deleteDog(dogId).subscribe(res => {
          if (res) {
            Swal.fire('Deleted!', '', 'success').then((response) => {
              location.reload();
            });
          } else {
            Swal.fire('Something went wrong', '', 'error')
          }
        });
      } else if (result.isDenied) {
        Swal.fire('Canceled', '', 'info')
      }
    })

  }

}
