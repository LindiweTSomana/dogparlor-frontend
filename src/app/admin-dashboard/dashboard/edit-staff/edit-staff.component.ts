/* edit-staff.component.ts
Edit staff for the admin dashboard where the logic is defined.
Author: Byron Young (218155077)
Date:16 October 2023
*/

import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role';
import { Staff } from 'src/app/models/staff';
import { RoleService } from 'src/app/services/role/role.service';
import { StaffService } from 'src/app/services/staff/staff.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.css']
})
export class EditStaffComponent implements OnInit  {
  staffList: Array<any> = [];
  roles:Array<Role> = [];

  staffToUpdate:Staff = {
    user: {},
    firstName: "",
    lastName: "",
    speciality: "",
    role: [
        {
            roleID: "",
            name: ""
        }
    ]

  }




  constructor(private staffService: StaffService,private roleService: RoleService) {
  }
  ngOnInit(): void {
    this.getStaff();
    this.getRoles();
  }

  getStaff() {
    this.staffService.getStaff().subscribe(data => this.staffList = data);
  }

  editStaff(staff:any){
    //staff.role
    this.staffToUpdate = staff;
    console.log(staff);

  }

  getRoles() {
    this.roleService.getRoles().subscribe(data => this.roles = data);
  }

  onSelectRole(event:any){

    let role = JSON.parse(event.target.value);
    this.staffToUpdate.role[0] = role;

    console.log(role);

  }

  updateStaff(){
    this.staffService.updateStaff(this.staffToUpdate).subscribe((result) => {
      if (result != null) {
        Swal.fire(
          'Successful!',
          'Staff member successfully updated',
          'success'
        ).then(() => {

          location.reload();

      });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Staff was not successfully updated, try again later!'
        })
      }
    });
    console.log(this.staffToUpdate);

  }


  deleteStaff(staffNumber:any){

    Swal.fire({
      title: 'Are you sure you want to delete?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No, it was a mistake`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.staffService.deleteStaff(staffNumber).subscribe(res => {
          if (res) {
            Swal.fire('Deleted!', '', 'success').then((response) => {
              location.reload();
            });
          } else {
            Swal.fire('Something went wrong', '', 'error')
          }
        });
      } else if (result.isDenied) {
        Swal.fire('Canceled', '', 'info')
      }
    })

  }
}
