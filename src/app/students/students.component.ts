import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
students:object[];

  constructor() { 
this.students=[
  {
id:"1",
name:"Anish"
  },
  {
id:"2",
name:"ravi"
  }
];
  }

public getStudents():object[]{
  return this.students;
}

  

  ngOnInit(): void {
  }

}
