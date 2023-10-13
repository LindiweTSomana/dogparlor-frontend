import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStaffMemberComponent } from './delete-staff-member.component';

describe('DeleteStaffMemberComponent', () => {
  let component: DeleteStaffMemberComponent;
  let fixture: ComponentFixture<DeleteStaffMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteStaffMemberComponent]
    });
    fixture = TestBed.createComponent(DeleteStaffMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
