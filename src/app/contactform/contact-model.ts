import { CompileStylesheetMetadata } from "@angular/compiler";

export class ContactModel {

    contactName : string;
    designation : string;
    organization : string;
    city : string;
    state : string;
    email : string;
    mobno : number;
   // dob : Date;


    constructor(contactName : string="", designation : string="",  organization : string="", city : string="", state : string="" ,email : string="",  mobno : number=0 /*, dob : Date*/){
        this.contactName=contactName;
        this.designation=designation;
        this.organization=organization;
        this.city=city;
        this.email=email;
        this.mobno=mobno;
        this.state=state;
       // this.dob=dob;
    }

}
