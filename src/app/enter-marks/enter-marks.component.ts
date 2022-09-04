
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-marks',
  templateUrl: './enter-marks.component.html',
  styleUrls: ['./enter-marks.component.css']
})
export class EnterMarksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

    students= [
      {id:1001, name:"Ram", marks:90, department:"ECE"},
      {id:1002, name:"Sita", marks:75, department:"CSE"},
      {id:1003, name:"Karthik", marks:50, department:"IT"}
      ];
      model:any={};
      
      msg:any="";
      addStudents(){
       this.students.push(this.model);
      this.model = {};
     this.msg = "Record is successfully added..... "; 
     
      }
      clickMe(){
        this.msg = "";
       }
      
}


