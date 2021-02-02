import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
id:number;
name:string;
address:string;

  constructor() {
this.id=1;
this.name="anish";
this.address="tenali";

   }

   getId():number{
     return this.id;
   }

   getName():string{
     return this.name;
   }

   getAddress():string{
     return this.address;
   }

  ngOnInit(): void {
  }

}
