import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../parent-child/employeedetails/employee';


@Pipe({
  name: 'employeefilter'
})
export class EmployeefilterPipe implements PipeTransform {

  transform(employeeDetails : Employee[], skill : string): Employee[] {
    if(!skill){
      return employeeDetails
    }
    return employeeDetails.filter(employeeDetail=>employeeDetail.skill==skill)
  }

}
