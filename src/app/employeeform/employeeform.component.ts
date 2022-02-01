import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from './employee-model';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {

  employeeData : EmployeeModel;
  skillset : string[]

  constructor() { 
    this.employeeData=new EmployeeModel()
    this.skillset=['Angular', 'BigData', 'JAVA', 'Python', 'AWS']
  }

  ngOnInit(): void {
  }

  addSkill() :void {
    console.log(JSON.stringify(this.employeeData));
    //window.alert(JSON.stringify(this.contactFormData));
  }
}
