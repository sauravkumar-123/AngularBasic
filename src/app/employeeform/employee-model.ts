export class EmployeeModel {
    skillset : string
    employeename : string
    address : string
    email : string
    contactno : number

    constructor(skillset : string="",  employeename : string="", address : string="", email : string="", contactno : number=0){
        this.skillset=skillset
        this.employeename=employeename
        this.address=address
        this.email=email
        this.contactno=contactno
    }
}
