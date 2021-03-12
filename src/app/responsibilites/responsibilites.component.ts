import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-responsibilites',
  templateUrl: './responsibilites.component.html',
  styleUrls: ['./responsibilites.component.css']
})
export class ResponsibilitesComponent implements OnInit {

  constructor(private sharedService:SharedService) {
    alert(this.sharedService.navigationMessage)
   }


  ngOnInit(): void {
  }

}
