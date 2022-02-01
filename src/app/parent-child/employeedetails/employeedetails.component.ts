import { Component, Input, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent{

  employeeDetails : Employee[];

  @Input()
  skill : string;

  constructor() { 
    this.employeeDetails=[
      new Employee('Anand Thakur', 'anand.thakur@gmail.com','Angular'),
      new Employee('Kishore Kumar', 'kishore.kumar@gmail.com','Bigdata'),
      new Employee('Ajay Verma', 'ajay.verma@gmail.com','Rpa'),
      new Employee('Suresh Singh', 'suresh.singh@gmail.com','Bigdata'),
      new Employee('Ram Kumar', 'ram.kumar@gmail.com','Rpa'), 
      new Employee('Nirmala Kumari', 'nirmala.kumari@gmail.com','Networking')
    ]
  }
}
