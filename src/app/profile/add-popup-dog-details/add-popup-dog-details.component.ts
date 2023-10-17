import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/models/Customer';
import { Dog } from 'src/app/models/Dog';
import { DogService } from 'src/app/services/dog/dog.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-popup-dog-details',
  templateUrl: './add-popup-dog-details.component.html',
  styleUrls: ['./add-popup-dog-details.component.css']
})
export class AddPopupDogDetailsComponent implements OnInit {

  customer: Customer;
  isValid: boolean = true;
  errors: any = {
    dogTag: { isError: false, message: 'dog tag' },
    dogName: { isError: false, message: 'dog name' },
    breed: { isError: false, message: 'breed' },
    age: { isError: false, message: 'age' },
    dogSize: { isError: false, message: 'dog size' },
    hairLength: { isError: false, message: 'hair length' }
  }

  constructor(private dogService: DogService) {
    this.customer = JSON.parse(localStorage.getItem('customer') || '{}');
  }

  ngOnInit(): void {
  }

  isEmpty(dogParam: any) {
    let error = 'This field can\'t be empty';
    let isThereError = false;

    if (!dogParam.dogTag) {
      this.errors.dogTag.isError = true;
      this.errors.dogTag.message = 'dog tag - ' + error;
      isThereError = true;
    }
    if (!dogParam.dogName) {
      this.errors.dogName.isError = true;
      this.errors.dogName.message = 'dog name - ' + error;
      isThereError = true;
    }
    if (!dogParam.breed) {
      this.errors.breed.isError = true;
      this.errors.breed.message = 'breed - ' + error;
      isThereError = true;
    }
    if (!dogParam.age) {
      this.errors.age.isError = true;
      this.errors.age.message = 'age - ' + error;
      isThereError = true;
    }
    if (!dogParam.dogSize) {
      this.errors.dogSize.isError = true;
      this.errors.dogSize.message = 'dog size - ' + error;
      isThereError = true;
    }
    if (!dogParam.hairLength) {
      this.errors.hairLength.isError = true;
      this.errors.hairLength.message = 'hair length - ' + error;
      isThereError = true;
    }

    return isThereError;
  }

  removeRedFieldBorder(seconds: number) {
    setTimeout(() => {
      Object.keys(this.errors).forEach((key) => {
        this.errors[key].isError = false;
      });
    }, seconds * 1000);
  }

  addDetails(dogParam: NgForm) {
    const isThereAnEmptyField = this.isEmpty(dogParam.value);

    if (isThereAnEmptyField) {
      this.removeRedFieldBorder(3); // will remove after 3
    } else {
      let dog: Dog = {
        dogTag: dogParam.value.dogTag,
        customer: this.customer,
        dogName: dogParam.value.dogName,
        breed: dogParam.value.breed,
        age: dogParam.value.age,
        dogSize: dogParam.value.dogSize,
        hairLength: dogParam.value.hairLength
      }

      this.dogService.addDog(dog).subscribe(result => {
        if (result !== null) {
          Swal.fire(
            'Successful!',
            'Dog added',
            'success'
          ).then((res) => {
            location.reload();
          });
        }
      });
    }
  }

}
