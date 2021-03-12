import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-submodule',
  templateUrl: './submodule.component.html',
  styleUrls: ['./submodule.component.css']
})
export class SubmoduleComponent implements OnInit {
id="";
constructor(private sharedService:SharedService) {
  alert(this.sharedService.navigationMessage)
 }
 array=[
   {Sno:1,projectid:"PROJ_0001",projectname:"EMS",Moduleid:"MOD_0001",modulename:"Module1",submoduleeid:"SUB_MOD_001",submodulename:"Submodule1" ,CreatedBy:"Admin",Createddate:"20-2-2021 2:00pm",Modifieddate:"21-2-2021 9:00am"},
   {Sno:2,projectid:"PROJ_0002",projectname:"Cloud",Moduleid:"MOD_0002",modulename:"Module2",submoduleeid:"SUB_MOD_002",submodulename:"Submodule2" ,CreatedBy:"Admin",Createddate:"22-2-2021 3:00pm",Modifieddate:"23-2-2021 8:00am"}
 ]


  ngOnInit(): void {
  }

}
