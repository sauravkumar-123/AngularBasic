import { Component, OnInit } from '@angular/core';
import { ContactModel } from './contact-model';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent {

  contactFormData : ContactModel;
  designations : string[];

  constructor() { 
    this.contactFormData=new ContactModel();
    this.designations=["Junior Developer", "Senior Developer", "Team Lead", "Manager", "Technical Support", "IT Support", "Human Resource", "IT Recutier", "Accountants"];
  }

  // addContact(contactFormData : any) :void {
  //   console.log(JSON.stringify(contactFormData));
  // }

  addContact() :void {
    console.log(JSON.stringify(this.contactFormData));
    //window.alert(JSON.stringify(this.contactFormData));
  }



}
