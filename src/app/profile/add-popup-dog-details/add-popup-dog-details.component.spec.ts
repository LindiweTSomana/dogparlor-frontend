import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPopupDogDetailsComponent } from './add-popup-dog-details.component';

describe('AddPopupDogDetailsComponent', () => {
  let component: AddPopupDogDetailsComponent;
  let fixture: ComponentFixture<AddPopupDogDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPopupDogDetailsComponent]
    });
    fixture = TestBed.createComponent(AddPopupDogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
