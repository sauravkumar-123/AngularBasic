import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appSkilldirective]'
})
export class SkilldirectiveDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null{
    if(!control.value){
      return null;
    }
    if(control.value=='choose'){
      return {"chooseSkillset" : true}
    }
    return null;
  }
  constructor() { }

}
