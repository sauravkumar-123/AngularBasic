import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  employeeList : Employee[]=[];
  selectedLocation : string="All";
  constructor() { 
    this.employeeList=[
      new Employee('EOO1','Saurav','Kumar', 42500.95, new Date("October 26, 2021"),"Associate Engineer","Technology","Bangalore"),
      new Employee('EOO2','Ramesh','Verma', 35600.00, new Date("May 13, 2015"),"Software Developer","Technology","Cheenai"),
      new Employee('EOO3','Nirmal','Gupta', 44588.25, new Date("November 21, 2009"),"Lead Engineer","Technology","Hydrabad"),
      new Employee('EOO4','Bilas','Rao', 45825.85, new Date("August 26, 2015"),"Technology Trainer","Traning","Delhi"),
      new Employee('EOO5','Shobha','Singh', 23699.00, new Date("June 05, 2007"),"Accountants","Accounts","Bangalore"),
      new Employee('EOO6','Neha','Kumari', 56700.85, new Date("April 07, 2010"),"Human Resorce","HR","Cheenai"),
      new Employee('EOO7','Shubhash','Rajpoot', 25000.25, new Date("September 26, 2013"),"Project Manager","Technology","Cheenai"),
      new Employee('EOO8','Nidhi','Verma', 49152.95, new Date("December 14, 2014"),"Human Resource","HR","Hydrabad"),
      new Employee('EOO9','Noman','Harsh', 37855.85, new Date("October 16, 2002"),"Software Engineer","Technology","Bangalore"),
      new Employee('EO10','Madhu','Kumari', 29655.35, new Date("January 15, 2020"),"Accountants","Accounts","Delhi"),
      new Employee('EO11','Mahendra','Yadav', 57800.25, new Date("July 19, 2012"),"QA Engineer","Technology","Bangalore"),
      new Employee('EO12','Dheeraj','Kumar', 44500.25, new Date("December 26, 2007"),"Test Engineer","Technology","Hydrabad"),
      new Employee('EO13','Suraj','Gupta', 23400.65, new Date("May 06, 2011"),"Support Engineer","Technology","Bangalore"),
      new Employee('EO14','Mohika','Singh', 43500.95, new Date("October 16, 2020"),"Test Engineer","Technology","Cheenai"),
      new Employee('EO15','Tanu','Sharma', 37800.00, new Date("June 13, 2019"),"Human Resources","HR","Delhi"),
      new Employee('EO16','Bhumika','Raj', 40650.65, new Date("February 06, 2011"),"Project Lead","R & D","Hydrabad"),
      new Employee('EO17','Radhey','Krishan', 39700.25, new Date("April 16, 2012"),"SofTware Engineer","Technology","Bangalore")
    ]
  }

  ngOnInit(): void {
  }

  countAllEmployee() : number{
    return this.employeeList.length
  }

  countBangaloreEmoplyee() : number{
      return this.employeeList.filter(emp=>emp.location=="Bangalore").length
  }

  countCheenaiEmoplyee() : number{
    return this.employeeList.filter(emp=>emp.location=="Cheenai").length
  }

  countHydrabadEmoplyee() : number{
    return this.employeeList.filter(emp=>emp.location=="Hydrabad").length
 }

 countDelhiEmoplyee() : number{
   return this.employeeList.filter(emp=>emp.location=="Delhi").length
 }

 receivedLocation(selectedLocation : string) : void{
   this.selectedLocation=selectedLocation;
 }
}
