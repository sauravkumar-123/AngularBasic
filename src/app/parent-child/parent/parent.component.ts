import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  parentData : String= "I am from parent Component"
  dataTosent : string ="I am coming from parent"
  constructor() { }

}
