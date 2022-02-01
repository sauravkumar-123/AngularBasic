import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {

  contactForm : FormGroup;
  designations : string[];

  constructor(private formBuilder : FormBuilder) { 
    this.contactForm=this.createForm();
    this.designations=["Junior Developer", "Senior Developer", "Team Lead", "Manager", "Technical Support", "IT Support", "Human Resource", "IT Recutier", "Accountants"];
  }  //dependency injection

  // ngOnInit(): void {
  //   this.contactForm=this.formBuilder.group({
  //     'contactName' : ['',Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
  //     'Email' : ['', Validators.compose([Validators.required, Validators.pattern("^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$")])],
  //     'MobNo' : ['', Validators.compose([Validators.required, Validators.pattern("[0-9]{10}$")])],
  //     'Organization' : ['', Validators.compose([Validators.required, Validators.maxLength(30)])],
  //     'Designation' : ['', Validators.required],
  //     'City' : ['',Validators.required],
  //     'State' : ['',Validators.required]
  //   });
  // }

  createForm() : FormGroup{
    return this.contactForm=this.formBuilder.group({
      'contactName' : ['',Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      'Email' : ['', Validators.compose([Validators.required, Validators.pattern("^(.+)@(.+)$")])],
      'MobNo' : ['', Validators.compose([Validators.required, Validators.pattern("[0-9]{10}$")])],
      'Organization' : ['', Validators.compose([Validators.required, Validators.maxLength(30)])],
     // 'Designation' : ['', Validators.compose([Validators.required, customValidator])],
      'Designation' : ['', Validators.required],
      'City' : ['',Validators.required],
      'State' : ['',Validators.required]
    },{Validators, customFormControlValidator});
  }

  addContact() :void {
    console.log(JSON.stringify(this.contactForm));
    //window.alert(JSON.stringify(this.contactFormData));
  }
}

//Validation apploy for only one control.
export function customValidator(control: AbstractControl): ValidationErrors | null{
  if(!control.value){
    return null;
  }
  if(control.value=='choose'){
    return {"chooseDesignation" : true}
  }
  
  return null;

}

//validation apply on whole form control.
export function customFormControlValidator(control: AbstractControl): ValidationErrors | null{
  
  const designationcontrol = control.get('Designation')
  if(!designationcontrol){
    return null;
  }
  if(designationcontrol.value=='choose'){
    return {"chooseDesignation" : true}
  }
  
  return null;
}

