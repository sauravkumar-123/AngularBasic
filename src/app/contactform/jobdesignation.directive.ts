import { Directive } from '@angular/core';
import { Validator , AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[chooseDesignation]',
  providers : [{
    provide : NG_VALIDATORS,
    useExisting : JobdesignationDirective,
    multi : true
  }]
})

export class JobdesignationDirective implements Validator{

  validate(control: AbstractControl): ValidationErrors | null{
    if(!control.value){
      return null;
    }
    if(control.value=='choose'){
      return {"chooseDesignation" : true}
    }
    
    return null;
  }

  constructor() { }

}
