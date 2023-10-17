import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Dog } from 'src/app/models/Dog';
import { DogService } from 'src/app/services/dog/dog.service';
import { SharedService } from 'src/app/shared/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-popup-dog-details',
  templateUrl: './popup-dog-details.component.html',
  styleUrls: ['./popup-dog-details.component.css']
})
export class PopupDogDetailsComponent implements OnInit {

  oldDog: any;

  constructor(private shared: SharedService, private dogService: DogService) {}
  
  ngOnInit(): void {
    this.oldDog = this.shared.getMessage();
  }

  editDetails(dog: NgForm) {
    
    console.log(dog.value.dogSize);
    console.log(dog.value.hairLength);

    const newDog: Dog = {
      dogTag: this.oldDog.dogTag,
      customer: this.oldDog.customer,
      dogName: !dog.value.dogName ? this.oldDog.dogName : dog.value.dogName,
      breed: !dog.value.breed ? this.oldDog.breed : dog.value.breed,
      age: !dog.value.age ? this.oldDog.age : dog.value.age,
      dogSize: !dog.value.dogSize ? this.oldDog.dogSize : dog.value.dogSize,
      hairLength: !dog.value.hairLength ? this.oldDog.hairLength : dog.value.hairLength
    }

    this.dogService.updateDog(newDog).subscribe(resultData => {
      if (resultData !== null) {
        Swal.fire(
          'Successful!',
          'Dog updated',
          'success'
        ).then((result) => {
          location.reload();
        });        
      } else {
        Swal.fire(
          'Error!',
          'An error occurred',
          'error'
        );
      }
    });
  }

}
