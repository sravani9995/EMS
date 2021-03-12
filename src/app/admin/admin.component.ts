import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  isshowing:boolean=true;
  innerWidth: any=",";
  toggleSidenav(){
if(this.isshowing)
this.isshowing=false;
else if(!this.isshowing)
this.isshowing=true;
  }

ngOnInit() {
    this.innerWidth = window.innerWidth;
}
  @HostListener('window:resize', ['$event'])
onResize(event:any) {
  this.innerWidth = window.innerWidth;
}


  constructor(public ref:Router,private sharedService:SharedService) {
    alert(this.sharedService.navigationMessage)
    this.sharedService.navigationMessage = 'about to move to dashboard';
    this.sharedService.navigationMessage = 'about to move to users';
    this.sharedService.navigationMessage = 'about to move to roles';
    this.sharedService.navigationMessage = 'about to move to projects';
    this.sharedService.navigationMessage = 'about to move to modules';
    this.sharedService.navigationMessage = 'about to move to submodules';
    this.sharedService.navigationMessage = 'about to move to Sprints';
    this.sharedService.navigationMessage = 'about to move to tasks';
    this.sharedService.navigationMessage = 'about to move to responsibilites';







   }
  show(){
    this.ref.navigate(['/user']);
  }

}





