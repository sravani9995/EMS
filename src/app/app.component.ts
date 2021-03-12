import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logout: boolean = false;
  isshowing: boolean=true;
  constructor(public  ref:Router){

  }
  hide=false;
  title = 'emsproject';
name="";
password="";
valid:boolean=false;
value:string='login';
toggleSidenav(){
  if(this.isshowing)
  this.isshowing=false;
  else if(!this.isshowing)
  this.isshowing=true;
    }

log() {
  if(!this.name || !this.password)
  {
    this.valid=true;
    this.logout=true;
    // this.value='admin';
     this.ref.navigate(['/admin']);
  }
  else{
    this.logout=true;
  // this.value='admin';
   this.ref.navigate(['/admin']);
   }
  }
 
}

