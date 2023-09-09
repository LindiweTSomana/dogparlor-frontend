import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraServicesComponent } from './extra-services.component';

describe('ExtraServicesComponent', () => {
  let component: ExtraServicesComponent;
  let fixture: ComponentFixture<ExtraServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtraServicesComponent]
    });
    fixture = TestBed.createComponent(ExtraServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
