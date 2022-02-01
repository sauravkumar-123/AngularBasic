export class Employee {
    empId : string;
    firstName : string;
    lastName : string;
    salary : number;
    doj : Date;
    designation : string;
    department : string;
    location : string;

    constructor(empId: string, firstName : string, lastName : string, salary : number, doj : Date, designation : string, department : string, location : string){
        this.empId=empId;
        this.firstName=firstName;
        this.lastName=lastName;
        this.salary=salary;
        this.doj=doj;
        this.designation=designation;
        this.department=department;
        this.location=location;
    }

    fullName(): string{
        return this.firstName+" "+this.lastName;
    }
}
