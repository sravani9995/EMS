import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private sharedService:SharedService) {
    alert(this.sharedService.navigationMessage)
   }
   array=[
    {Sno:1,projectid:"PROJ_0001",projectname:"EMS",Moduleid:"MOD_0001",modulename:"Module1",submoduleeid:"SUB_MOD_001",submodulename:"Submodule1" ,taskid:"TASK_0001",Createddate:"27-2-2021 5:10:10pm",FreezingTime:"27-2-2021 5:10:10pm"}
   ,{Sno:2,projectid:"PROJ_0002",projectname:"Cloud",Moduleid:"MOD_0002",modulename:"Module2",submoduleeid:"SUB_MOD_002",submodulename:"Submodule2" ,taskid:"TASK_0002",Createddate:"28-2-2021 3:20:10pm",FreezingTime:"28-2-2021 3:20:10pm"}]


  ngOnInit(): void {
  }

}
