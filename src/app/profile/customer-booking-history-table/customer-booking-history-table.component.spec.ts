import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBookingHistoryTableComponent } from './customer-booking-history-table.component';

describe('CustomerBookingHistoryTableComponent', () => {
  let component: CustomerBookingHistoryTableComponent;
  let fixture: ComponentFixture<CustomerBookingHistoryTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerBookingHistoryTableComponent]
    });
    fixture = TestBed.createComponent(CustomerBookingHistoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
