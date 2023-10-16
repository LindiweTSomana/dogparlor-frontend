import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupUserDetailsComponent } from './popup-user-details.component';

describe('PopupUserDetailsComponent', () => {
  let component: PopupUserDetailsComponent;
  let fixture: ComponentFixture<PopupUserDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupUserDetailsComponent]
    });
    fixture = TestBed.createComponent(PopupUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
