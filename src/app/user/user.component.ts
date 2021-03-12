import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  firstname = "";
  middlename = "";
  lastname = "";
  username = "";
  password = "";
  mobilenumber = "";
  emailid = "";
  arr = [
    { SNo: 1, EmpId: "EMP_001", UserName: "srija", FirstName: "srija", MiddleName: "", LastName: "dama", CreatedBy: "admin", Createddate: "2-2-2021 3:00pm" },
    { SNo: 2, EmpId: "EMP_002", UserName: "Sashirekha", FirstName: "Sashi", MiddleName: "rekha", LastName: "pavuluri", CreatedBy: "admin", Createddate: "9-2-2021 3:00pm" }
  ]

  constructor(private sharedService: SharedService) {
    alert(this.sharedService.navigationMessage)
  }
  add() {


  }

  ngOnInit(): void {
  }

}
