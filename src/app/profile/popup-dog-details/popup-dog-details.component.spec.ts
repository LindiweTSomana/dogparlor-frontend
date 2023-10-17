import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDogDetailsComponent } from './popup-dog-details.component';

describe('PopupDogDetailsComponent', () => {
  let component: PopupDogDetailsComponent;
  let fixture: ComponentFixture<PopupDogDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupDogDetailsComponent]
    });
    fixture = TestBed.createComponent(PopupDogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
