import {Component, OnInit} from '@angular/core';
import {RoleService} from "../../../services/role/role.service";

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit{
 roles: any[] = [];

  constructor(private roleService: RoleService) {}
  ngOnInit() {
    this.roleService.getRoles().subscribe((data: Object) => {
      // Cast the data to an array if it's an array of objects
      if (Array.isArray(data)) {
        this.roles = data;
      }
    });
  }

  editRole(role: any) {
    // Implement your edit logic here

  }

  loadData() {
    this.roleService.getRoles().subscribe((result) => {
      this.roles = result;
    });
  }

  // Function to delete a role
  deleteRole(id: number) {
    this.roleService.deleteRole(id).subscribe(() => {
      // After successful deletion, refresh the data
      this.loadData();
    });
  }

}
