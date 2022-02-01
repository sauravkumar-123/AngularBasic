import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

   //RegNo :string;
  // StudentName :string="Piyush Kumar"
  // Age: Number=25
  // Email: string='krsaurav.097@gmail.com'
  // MobNo: Number=9691098742
  // Course: string="B.E"
  // Stream: string="Information Tech"
  // Fee :Number = 75655.95

  studentModel:Student;

  constructor(){
    this.studentModel=new Student();
  }
}
