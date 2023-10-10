import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Role } from 'src/app/models/role';
import { RoleService } from 'src/app/services/role/role.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-new-role',
  templateUrl: './add-new-role.component.html',
  styleUrls: ['./add-new-role.component.css']
})
export class AddNewRoleComponent {

  constructor(private roleService: RoleService) { 
  }
  addRole(addRoleForm: NgForm): void {
    const role: Role = {
         roleID: addRoleForm.value.role.split(',')[0],
         name: addRoleForm.value.role.split(',')[1]
    }

    this.roleService.addRole(role).subscribe((result) => {
      if (result != null) {
        Swal.fire(
          'Successful!',
          'You added a new role',
          'success'
        )
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'New Role was not successfully added, try again later!'
        })
      }
    });
  }
}
