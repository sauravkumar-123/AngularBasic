import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employeecount',
  templateUrl: './employeecount.component.html',
  styleUrls: ['./employeecount.component.css']
})
export class EmployeecountComponent implements OnInit {

  @Input()
  employeeCount : number=0;

  @Input()
  BangaloreCount : number=0;

  @Input()
  CheenaiCount : number=0;

  @Input()
  HydrabadCount : number=0;

  @Input()
  DelhiCount : number=0;

  selectedLocation : string=''

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  locationEventChange  = new EventEmitter<string>();

  onLocationChange() : void{
    this.locationEventChange.emit(this.selectedLocation)
    console.log("selected location: "+this.selectedLocation)
  }

}
