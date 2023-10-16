import { Component, OnInit } from '@angular/core';

import { Staff } from 'src/app/models/staff';
import { StaffService } from 'src/app/services/staff/staff.service';
import {RoleService} from "../../../services/role/role.service";
import { ObserversModule } from '@angular/cdk/observers';

@Component({
  selector: 'app-delete-staff-member',
  templateUrl: './delete-staff-member.component.html',
  styleUrls: ['./delete-staff-member.component.css']
})
export class DeleteStaffMemberComponent implements OnInit {

  members:Array<Staff> = [];
  
  constructor(private staffservice: StaffService){}

  ngOnInit():void
  {
    this.getAllMembers();
  }
  
  getAllMembers(){
    this.staffservice.getStaff().subscribe((result)=>{
      this.members = result;
    })
  }


  
   
}
