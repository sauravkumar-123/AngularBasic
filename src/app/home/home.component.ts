import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   
  firstName : string ="Saurav";
  lastName : string ="Kumar";
  age :number = 24;
  skills :string[] =['JAVA','JavaScript','Angular','Springboot'];
  salary :number = 25000.85;
  location :string ="Bengaluru";
  imagePath :string ="/assets/images/saurav.jpg";
  status :boolean =false;

  fullName():string {
    return this.firstName+" "+this.lastName;
  }

  onClick():void{
    window.alert("Success!!");
  }
}
