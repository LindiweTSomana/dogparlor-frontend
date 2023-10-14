import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffnavComponent } from './staffnav.component';

describe('StaffnavComponent', () => {
  let component: StaffnavComponent;
  let fixture: ComponentFixture<StaffnavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffnavComponent]
    });
    fixture = TestBed.createComponent(StaffnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
