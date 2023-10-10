import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogTableComponent } from './dog-table.component';

describe('DogTableComponent', () => {
  let component: DogTableComponent;
  let fixture: ComponentFixture<DogTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DogTableComponent]
    });
    fixture = TestBed.createComponent(DogTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
