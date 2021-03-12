import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sprints',
  templateUrl: './sprints.component.html',
  styleUrls: ['./sprints.component.css']
})
// export declare class MatDatepickerModule{}
export class SprintsComponent implements OnInit {

  constructor(private sharedService:SharedService) {
    alert(this.sharedService.navigationMessage)
   }
array=[
  {Sno:1,projectid:"PROJ_0001",projectname:"EMS",sprintid:"MOD_0001",sprintname:"Module1",Startingdate:"24-2-2021 11:10:20 am",Endingdate:"26-2-2021 4:30:10pm",Sprintmaster:"srija"},
  {Sno:2,projectid:"PROJ_0002",projectname:"Pickleball",sprintid:"MOD_0002",sprintname:"Module2",Startingdate:"26-2-2021 10:10:20 am",Endingdate:"28-2-2021 2:30:10pm",Sprintmaster:"anitha"}
]
  ngOnInit(): void {
  }

}
