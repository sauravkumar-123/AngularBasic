export class Student {

  RegNo :string;
  StudentName :string;
  Age: Number;
  Email: string;
  MobNo: Number;
  Course: string;
  Stream: string;
  Fee :Number;

  constructor(RegNo :string="", StudentName :string="", Age: Number=0, Email: string="", MobNo: Number=0, Course: string="", Stream: string="", Fee :Number=0){
      this.RegNo=RegNo;
      this.StudentName=StudentName;
      this.Age=Age;
      this.Email=Email;
      this.MobNo=MobNo;
      this.Course=Course;
      this.Stream=Stream;
      this.Fee=Fee;
  }
}
