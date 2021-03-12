import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  constructor(private sharedService:SharedService) {
    alert(this.sharedService.navigationMessage)
   }
arr=[
  {Sno:1,Roleid:"ROL_0001",Rolename:"HR",Rolecreatedby:"admin",Rolecreateddate:"10-2-2021 4:00pm"},
  {Sno:2,Roleid:"ROL_0002",Rolename:"ProjectManager",Rolecreatedby:"admin",Rolecreateddate:"12-2-2021 10:00am"}
]

  ngOnInit(): void {
  }

}
