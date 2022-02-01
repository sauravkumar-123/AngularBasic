import { Component, OnInit } from '@angular/core';
import { Skill } from './skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {

  skills : Skill[]
  skill : string

  constructor() {
    this.skills=[
      new Skill('Angular'),
      new Skill('Bigdata'),
      new Skill('Rpa'),
      new Skill('Networking')
    ]
   }

   onSkillSelected(skill : Skill) : void{
    this.skill=skill.skill
    console.log("selectedSkill"+this.skill)
  }
  
}
