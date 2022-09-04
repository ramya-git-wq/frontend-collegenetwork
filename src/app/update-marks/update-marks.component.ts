
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-marks',
  templateUrl: './update-marks.component.html',
  styleUrls: ['./update-marks.component.css']
})
export class UpdateMarksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  students= [
    {id:1001, name:"Ram", marks:90, department:"ECE"},
    {id:1002, name:"Sita", marks:75, department:"CSE"},
    {id:1003, name:"Karthik", marks:50, department:"IT"}
    ];
    model:any={};
    model2:any={} ;
    msg:any="";
 myValue:any;

updateStudent(){
    let k= this.myValue;
    for(let i=0; i<this.students.length;i++){
     if(i==k){
     this.students[i]= this.model2;
     this.model2 = {};
     this.msg = "Record is successfully updated..... ";
     }
    
     }
    
     }
        clickMe(){
      this.msg = "";
     }
    
 }


