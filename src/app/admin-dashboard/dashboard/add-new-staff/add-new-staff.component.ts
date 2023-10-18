import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Role } from 'src/app/models/role';
import { Staff } from 'src/app/models/staff';
import { RoleService } from 'src/app/services/role/role.service';
import { StaffService } from 'src/app/services/staff/staff.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-new-staff',
  templateUrl: './add-new-staff.component.html',
  styleUrls: ['./add-new-staff.component.css']
})
export class AddNewStaffComponent implements OnInit {

  roles:Array<Role> = [];

  constructor(private roleService: RoleService, private staffService: StaffService) {
  }

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles() {
    this.roleService.getRoles().subscribe(data => this.roles = data);
  }

  addStaff(addForm: NgForm): void {
    
    const staff: Staff = {
      firstName: addForm.value.fname,
      lastName: addForm.value.lname,
      speciality: addForm.value.speciality,
      role: [
        {
          roleID: addForm.value.role.split(',')[0],
          name: addForm.value.role.split(',')[1]
        }
      ]
    }

    this.staffService.addStaff(staff).subscribe((result) => {
      if (result != null) {
        Swal.fire(
          'Successful!',
          'You added a new staff member',
          'success'
        )
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Staff was not successfully added, try again later!'
        })
      }
    });
  }

}

