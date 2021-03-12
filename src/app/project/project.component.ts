import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  
  constructor(private sharedService:SharedService) {
    alert(this.sharedService.navigationMessage)
   }
   array=[
    {Sno:1,Projectid:"PROJ_0001",Projectname:"EMS",createdby:"admin",createddate:"10-2-2021 4:00pm",Modifieddte:"13-2-2021 5:00pm"},
    {Sno:2,Projectid:"PROJ_0001",Projectname:"abc",createdby:"admin",createddate:"14-2-2021 2:00pm",Modifieddte:"15-2-2021 5:00pm"}
  ]


  ngOnInit(): void {
  }

}
