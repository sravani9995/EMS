import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  constructor(private sharedService:SharedService) {
    alert(this.sharedService.navigationMessage)
   }
   array=[
     {Sno:1,projectid:"PROJ_0001",projectname:"EMS",Moduleid:"MOD_0001",modulename:"Module1",CreatedBy:"Admin",Createddate:"15-2-2021 12:00pm",Modifieddate:"16-2-2021 9:00am"}
   ,{Sno:2,projectid:"PROJ_0002",projectname:"pqr",Moduleid:"MOD_0002",modulename:"Module2",CreatedBy:"Admin",Createddate:"18-2-2021 1:00pm",Modifieddate:"19-2-2021 9:00am"}
    ]


  ngOnInit(): void {
  }

}
